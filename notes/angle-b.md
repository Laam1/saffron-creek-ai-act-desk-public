# AI-04 angle B: the most practical reading of the EU AI Act
This is a working note, not an assessment. AI-04's tier stays "needs lawyer" (`assessments/AI-04.md`). The assumptions below are not known facts. Learning exercise, not legal advice.

## Known facts
- AI-04 (CV Screener) ranks job applicants and "decides who is invited to interview". It uses personal data and was bought. Its owner is the Head of Human Resources (`data/ai-register.csv`).
- Where its output (the ranking) is used: unknown (`data/ai-register.csv`). The bank has customers in the UAE and Germany. Where it hires: unknown (`bank/profile.md`).

## Assumptions (not facts), each answered the likely way for a small bank
- A1 (weakest). At least some rankings are used for jobs in Germany. Then a bank outside the EU is covered, because the output is used in the Union (Art. 2(1)(c), S-01). That text sets no minimum amount.
- A2. The bank only uses AI-04, so it is a deployer, meaning one "using an AI system under its authority" (Art. 3(4), S-01). The vendor is the provider, meaning the maker (Art. 3(3), S-01).
- A3. AI-04 reads CV text only. It does not infer emotions, which is banned at work except for medical or safety reasons (Art. 5(1)(f), S-01).
- A4. AI-04 is high-risk, meaning it carries the Act's heavier duties (Art. 6(2), S-01). It fits "to analyse and filter job applications, and to evaluate candidates" (Annex III point 4(a), S-01). The exit in Art. 6(3) (S-01) fails, because AI-04 shapes the outcome. Ranking is probably profiling too, which closes the exit (Art. 6(3) last subparagraph, S-01). The GDPR definition behind that (Art. 3(52), S-01) was not read, so this is not verified.
- A5. A recruiter sees the list, but no oversight is written down. AI-04 is already in use and the vendor updates it. The bank is a private firm, not a public body.

## Weakest assumption: A1
Selling to Germans says nothing about hiring there. A small bank may hire only in Dubai. If A1 is wrong, Art. 2(1)(c) (S-01) does not reach AI-04, the desk's tier would be out of scope, and the steps below fall away. The DIFC duties stay (Reg. 10.1.1(a), S-03, carried over from `assessments/AI-04.md`, not rechecked). Whether a German applicant for a Dubai job counts: unknown.

## What the bank must do first (all depend on A1)
Dates: Arts. 4 and 5 have applied since 2 February 2025 (Art. 113 third paragraph point (a), as replaced by Art. 1 point 40(a), S-02). High-risk duties apply from 2 December 2027 (Art. 113 point (c)(i), as replaced by Art. 1 point 40(b), S-02).
Grace rule: a high-risk system in service before that date is caught only if it has "significant changes in their designs" from then on (Art. 111(2), as replaced by Art. 1 point 39(a), S-02). AI-04's start date: unknown. Whether vendor updates count: unknown. So the real deadline for steps 4 to 8 is unconfirmed. Plan for 2 December 2027.
1. Now: the Head of Human Resources confirms where rankings are used. If no EU roles use them, record that and keep it so (Art. 2(1)(c), S-01).
2. Now: get the vendor to confirm in writing that AI-04 does not infer emotions (Art. 5(1)(f), S-01).
3. Now: train HR staff on AI. The duty is to support AI literacy, not to guarantee a level (Art. 4(1), as replaced by Art. 1 point 5, S-02).
4. Get the vendor's instructions for use and follow them (Art. 26(1), S-01). Do not rebrand AI-04, substantially modify it or change its purpose, or the bank becomes the provider (Art. 25(1), S-01).
5. Name trained reviewers with the authority and support to act on the ranking (Art. 26(2), S-01).
6. Where the bank controls the input, keep CV data relevant and representative (Art. 26(4), S-01).
7. Monitor AI-04, and suspend it and report if it presents a risk (Art. 26(5), S-01). The lighter route needs "Union financial services law"; assume a DIFC bank cannot use it. Keep logs under the bank's control for at least six months (Art. 26(6), S-01).
8. Tell applicants that AI-04 is used on them (Art. 26(11), S-01). Prepare to explain decisions (Art. 86(1), S-01). Art. 86's start date for AI-04 is unconfirmed, as it sits outside Chapter III.
Probably not needed: a fundamental rights assessment, as the bank is not a public body and AI-04 is not in Annex III point 5(b) or (c) (Art. 27(1), S-01). Whether outside applicants count as workers to be informed (Art. 26(7), S-01): unconfirmed.
