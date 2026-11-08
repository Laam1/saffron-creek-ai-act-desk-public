---
name: classify-system
description: Assess one AI system from data/ai-register.csv under the EU AI Act and DIFC Regulation 10. Use when the user gives a system_id like AI-03.
argument-hint: "[system_id, e.g. AI-03]"
allowed-tools: Read, Grep, Glob, Write
context: fork
---

1. The system_id is $ARGUMENTS. If it's empty, stop and ask me for one.
2. Find its row in data/ai-register.csv. If it isn't there, stop and say "AI-XX is not in the register." Never invent a system.
3. Use Glob to check whether assessments/<system_id>.md already exists. If it does, stop and say "assessments/<system_id>.md already exists. I did not change it." Never overwrite it.
4. Read .claude/rules/assessments.md and regulations/sources.csv.
5. Write assessments/<system_id>.md following every rule. If the register doesn't say something you need, write "unknown" and list it under What's missing.
6. Reply with three lines: the risk tier, the main article or Annex III point, and the confidence.
