# ai-act-kit

A Claude Code plugin. A plugin is a folder of add-ons that Claude Code can load.
It helps a bank assess its AI systems against the EU AI Act and DIFC Regulation 10.
DIFC means Dubai International Financial Centre.
This is a learning kit, not legal advice.

It is built for DIFC-licensed banks whose AI outputs may be used in the EU.

## What is inside
- The `classify-system` skill. It runs as `/ai-act-kit:classify-system AI-03`.
- The assessment rules, in `skills/classify-system/references/assessment-rules.md`.
- The send guard. It stops email going anywhere except `@resend.dev` test addresses and your own address.

## What your bank must supply
Put these in your own project, at exactly these paths:

| Path | What it holds |
|---|---|
| `bank/profile.md` | Your bank's facts. Include a heading "Who approves AI risk" that names the approver. |
| `data/ai-register.csv` | Columns: `system_id,name,purpose,used_on,where_output_used,decision_impact,personal_data,built_or_bought,owner` |
| `regulations/sources.csv` | Your legal sources. Columns: `source_id,title,publisher,url,checked_on,what_it_supports,primary_or_secondary` |
| `assessments/` | An empty folder. The skill writes here. |

The skill stops if the first three are missing.

## Install
You need Claude Code v2.1.295 or later and Node.js.

From your bank's project, start Claude Code with the plugin folder or a zip of it:

```
claude --plugin-dir /path/to/ai-act-kit
```

To let the guard allow your own address, set the `my_email` option.
If it is empty, only `@resend.dev` addresses are allowed.

## Limits
- The assessment rules load only when the skill runs. If you edit an assessment by hand, they are not loaded.
- The guard only watches email servers with "resend" in their name. A server named anything else is not checked.
- The guard only works while the plugin is enabled. Anyone can turn it off. It prevents accidents and is not a security control.
- A person must still review every assessment. The kit never gives a final legal opinion and never approves a system.
