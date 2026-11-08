# Rules for assessment files

1. One file per system, named after its system_id, like `assessments/AI-03.md`.

2. Every file uses exactly this layout:

   ```markdown
   # AI-0X: System name
   ## Risk tier
   ## Why
   ## Deadline
   ## DIFC notes
   ## What's missing
   ## Confidence
   ## Needs human sign-off
   Learning exercise, not legal advice.
   ```

3. Risk tier is exactly one of: out of scope, prohibited, high-risk, transparency only, minimal, needs lawyer.

4. Decide in this order. Do not skip a step.
   1. Check scope with Article 2 (is the output used in the EU?).
      - If where the output is used is unknown, the tier is needs lawyer. Stop here and list the gap under "What's missing". You may also add one "If the output is used in the EU" flag under "What's missing". It names a likely Article 5 ban, Annex III match or Annex III exception, and quotes it. The flag does not decide the tier, and steps 2 to 5 still count as not run.
      - If the output is confirmed as not used in the EU, the tier is out of scope. Stop here and cite Article 2. Scope means whether the law applies to the system at all.
   2. Check the Article 5 bans (the list of banned AI practices).
   3. Check Annex III (the list of high-risk AI uses).
   4. Check Article 50 (the duties to tell people about AI).
   5. Only then, consider minimal.

5. Mark a system prohibited only if you can quote the Article 5 ban it matches. Mark a system high-risk only if you can quote the Annex III point it matches. If you can't quote one, the tier is needs lawyer.

6. Every claim cites an article and a source_id from `regulations/sources.csv`, like (Art. 5(1)(f), S-01).

7. Confidence is high, medium or low, with one sentence on why.

8. Needs human sign-off is yes or no, with the owner's job title from `data/ai-register.csv`. The owner signs off first. The approver named under "Who approves AI risk" in `bank/profile.md` then gives final approval of the AI risk. If the profile names no approver, write "unknown" and list it under "What's missing".

9. Never write "compliant". Write "no gap found".

10. Never give a final legal opinion. Never approve an AI system. Never guess a date, an article or a number.
