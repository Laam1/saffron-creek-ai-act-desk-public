#!/usr/bin/env bash
# Automatic review of assessments/ and briefings/. Needs no human.
#
# Exit codes:
#   0  review finished, no critical findings
#   1  review finished, at least one critical finding
#   2  the review itself failed, so nothing is known (findings.json is left as it was)

set -uo pipefail

cd "$(dirname "$0")/.." || exit 2

SCHEMA_FILE="review/findings.schema.json"
FINDINGS_FILE="review/findings.json"

PROMPT="Review every file in assessments/ and briefings/ against .claude/rules/assessments.md and regulations/sources.csv. Report only real problems."

if [ -f "$FINDINGS_FILE" ]; then
  PROMPT="$PROMPT

These were found last time. Report only issues that are new or still not fixed.

$(cat "$FINDINGS_FILE")"
fi

REPLY_FILE="$(mktemp)"
trap 'rm -f "$REPLY_FILE"' EXIT

if ! claude -p "$PROMPT" \
  --output-format json \
  --json-schema "$(cat "$SCHEMA_FILE")" \
  --allowedTools "Read,Grep,Glob" \
  </dev/null >"$REPLY_FILE"; then
  echo "Review failed: claude exited with an error." >&2
  head -c 2000 "$REPLY_FILE" >&2
  exit 2
fi

node -e '
const fs = require("fs");
const [replyFile, findingsFile] = process.argv.slice(1);

function fail(reason) {
  console.error("Review failed: " + reason);
  process.exit(2);
}

let reply;
try {
  reply = JSON.parse(fs.readFileSync(replyFile, "utf8"));
} catch (err) {
  fail("the reply was not valid JSON. " + err.message);
}

const findings = reply.structured_output && reply.structured_output.findings;
if (reply.is_error || !Array.isArray(findings)) {
  fail("the reply held no findings list. " + JSON.stringify(reply).slice(0, 2000));
}

fs.writeFileSync(findingsFile, JSON.stringify({ findings }, null, 2) + "\n");

const count = (severity) => findings.filter((f) => f.severity === severity).length;
console.log("Findings: " + findings.length);
for (const severity of ["critical", "major", "minor"]) {
  console.log("  " + severity + ": " + count(severity));
}

process.exit(count("critical") > 0 ? 1 : 0);
' "$REPLY_FILE" "$FINDINGS_FILE"
