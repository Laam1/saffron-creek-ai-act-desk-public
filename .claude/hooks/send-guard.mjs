// PreToolUse guard for the resend MCP tools.
// Exit 0 allows the tool call. Exit 2 blocks it and shows the stderr line to Claude.
// Any other exit code would let the call through, so every failure here must exit 2.

// Tools whose recipients are all visible in to, cc and bcc.
const ADDRESS_CHECKED = new Set([
  "send-email",
  "send-new-inbox-email",
  "forward-inbox-thread-email",
]);
const BATCH = "send-batch-emails";

// Tools that are always blocked, with the reason given.
const ALWAYS_BLOCKED = [
  [/broadcast/, "broadcasts can reach whole lists of people"],
  [/^create-(audience|segment|contact|automation)/, "it creates something that can reach whole lists of people"],
  [/^(update|duplicate)-automation/, "automations can email whole lists of people"],
  [/^add-contact-to-segment$/, "it adds people to a mailing list"],
  [/^send-event$/, "events start automations that can email people"],
  [/^(reply-to-inbox-thread-email|send-inbox-draft)$/, "its recipients are not visible, so they cannot be checked"],
  [/^update-inbox-agent$/, "it can let an inbox's AI agent forward threads, and those recipients cannot be checked"],
  // Safety net: a send tool this guard has not been told about.
  [/^(send|reply|forward)-/, "this guard does not know how to check its recipients"],
];

function block(reason) {
  process.stderr.write(`Blocked by send guard: ${String(reason).replace(/\s+/g, " ")}\n`);
  process.exitCode = 2;
}

// Turns a to, cc or bcc value into a flat list of lower-case addresses.
function addressesFrom(value) {
  if (value === undefined || value === null) return [];
  const items = Array.isArray(value) ? value : [value];
  return items.flatMap((item) => {
    if (typeof item !== "string") throw new Error("a recipient is not text, so it cannot be checked");
    return item
      .split(/[,;]/)
      .map((part) => (part.match(/<([^<>]*)>\s*$/)?.[1] ?? part).trim().toLowerCase())
      .filter(Boolean);
  });
}

function isAllowed(address, myEmail) {
  return /^[^\s@<>]+@resend\.dev$/.test(address) || (myEmail !== "" && address === myEmail);
}

function checkRecipients(messages) {
  const myEmail = (process.env.MY_EMAIL ?? "").trim().toLowerCase();
  const addresses = messages.flatMap((m) => ["to", "cc", "bcc"].flatMap((field) => addressesFrom(m?.[field])));
  if (addresses.length === 0) return block("no recipients found, so the call cannot be checked");
  const bad = addresses.find((address) => !isAllowed(address, myEmail));
  if (bad) block(`${bad} is not allowed. Only @resend.dev addresses and MY_EMAIL can receive email.`);
}

async function main() {
  let raw = "";
  for await (const chunk of process.stdin) raw += chunk;
  const { tool_name: toolName, tool_input: input } = JSON.parse(raw);
  if (typeof toolName !== "string") throw new Error("the tool name is missing");
  const name = toolName.split("__").pop();

  if (name === BATCH) {
    if (!Array.isArray(input?.emails)) return block("the batch has no list of emails, so it cannot be checked");
    return checkRecipients(input.emails);
  }
  if (ADDRESS_CHECKED.has(name)) return checkRecipients([input]);

  const rule = ALWAYS_BLOCKED.find(([pattern]) => pattern.test(name));
  if (rule) block(`${name} is not allowed: ${rule[1]}.`);
}

main().catch((error) => block(`the tool call could not be read: ${error.message}`));
