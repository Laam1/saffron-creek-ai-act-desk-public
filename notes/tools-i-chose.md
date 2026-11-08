# Tools I chose
Checked 8 November 2026 using a skills search tool, package registry lookups, the registry's downloads figures, code-host repository lookups and each tool's README or SKILL.md; installed nothing.

Real publisher, tool and person names are removed from this note, under project rule 2. Tools are labelled A to H.

## Use these
**Tool A** (package, v2.28.0): an email vendor's official email MCP server.
- Publisher: the email vendor (organisation account); four named package maintainers
- Installs: 17,463 package downloads last week · Stars: 580 · Last updated: 6 Nov 2026
- Settings: an API key (required), sender and reply-to email addresses (optional), `MCP_ALLOWED_FILE_DIRS` (optional), plus a verified domain
- Why: the vendor publishes it, it was updated this week, and the package entry points to the vendor's own repo.
- Watch out: it can send emails and broadcasts, delete contacts, domains and API keys, and read files on your computer to attach them. Set `MCP_ALLOWED_FILE_DIRS` and use a restricted API key.

**Tool B**: how-to guide for the same vendor's email API.
- Publisher: the email vendor (organisation) · Installs: 24.4K · Stars: 211 · Last updated: 6 Nov 2026
- Why: it's the official guide, and it teaches safe habits like idempotency keys and checking webhooks.
- Watch out: it shows the agent how to send email and manage your account with your API key.

**Tool C**: checks a planned feature against the rules that apply.
- Publisher: an AI company (organisation) · Installs: 3.4K · Stars: 35,145 · Last updated: 7 Nov 2026
- Why: a well-known publisher, and a general checklist covering GDPR and approvals.
- Watch out: the full "legal" plugin it comes from also connects chat, file storage, project tracking, e-signature, calendar and email services. Install only this skill, not the whole plugin.

**Tool D**: spots EU AI Act issues in your content and code.
- Publisher: one individual · Installs: 881 · Stars: 489 · Last updated: 4 Oct 2026
- Why: it's read-only by default and won't give a legal verdict, which is the right attitude for a compliance desk.
- Watch out: it reads the files in any project you ask it to review.

**Tool E**: EU AI Act advisor.
- Publisher: one individual · Installs: 295 · Stars: 1,046 · Last updated: 7 Nov 2026
- Why: it's detailed, covers the 2026 Digital Omnibus delays, and its skill file says "Last verified: 2026-11-06".
- Watch out: it's text only, with no scripts, so it can't send, delete or read files by itself. One person wrote it, so check its legal claims against the official text. Its packaged skill file: not checked.

**Tool F**: classifies risk tiers and lists your obligations.
- Publisher: one individual · Installs: 403 · Stars: 29,459 · Last updated: 5 Nov 2026
- Why: a very popular repo, and the skill cites the actual Articles.
- Watch out: it runs 3 Python scripts on your computer. I checked them: they read only the JSON file you give them, and they make no network calls.

## Avoid these
**Tool G**: 17.5K installs, but only 2 stars and 1 fork, on a repo created 5 Sep 2026. That many installs with almost no stars suggests the install count is inflated.

**Tool H** (package): a look-alike of Tool A's name that isn't from the email vendor. It had 42 downloads last week, and its repo has 0 stars and no change since 14 Jun 2025. Its package link still uses an old organisation name, which now redirects to a new one.

## How I decided
1. **Who publishes it?** The package maintainers and the repo owner should match the real company (an organisation account), not a look-alike name.
2. **Do the numbers agree?** Installs, stars, repo age and last update should tell the same story. Lots of installs with no stars, or no updates for a long time, is a warning sign.
3. **What can it do, and is it safe?** Read the SKILL.md (not just a README) and any scripts. Check whether it can send, delete or read files, and which keys it needs. Look at the three security audits on its directory page. They check the code, not who made it: Tool B and Tool G both got Pass, Pass, Warn. Then limit it with restricted keys and allowed folders.
