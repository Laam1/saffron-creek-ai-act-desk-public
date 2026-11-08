# AI-04 handoff for the compliance officer
Learning exercise, not legal advice. Sources: S-01 EU AI Act, S-02 its 2026 amendments, S-03 DIFC Regulation 10, S-04 DIFC Data Protection Law, S-05 GDPR (EU data protection law).

## The system
AI-04 (CV Screener) is a bought AI tool that ranks job applicants and decides who is invited to interview at Saffron Creek Bank, a made-up bank licensed in the DIFC, a financial free zone in Dubai. Its risk tier is "needs lawyer", because where its rankings are used is unknown, and that decides whether the EU AI Act applies (Art. 2(1)(c), S-01).

## Two readings
Both rest on assumptions, not known facts. Each was written without seeing the other. A provider makes an AI system. A deployer uses it.

| Point | Strict reading | Practical reading |
|---|---|---|
| Does the EU AI Act apply? | Assumes yes: rankings are used in the EU (Art. 2(1)(c), S-01). | Assumes yes: some rankings are for jobs in Germany (Art. 2(1)(c), S-01). |
| Risk level | High-risk (Art. 6(2), Annex III point 4(a), S-01). | Same. |
| Bank's role | Deployer and provider (Arts. 3(4), 25(1), S-01). | Deployer only. The vendor is the provider (Arts. 3(3), 3(4), S-01). |
| Main EU duties | Deployer duties (Art. 26, S-01) plus provider duties (Arts. 9 to 16, S-01). | Deployer duties (Art. 26, S-01). First: confirm scope, get the vendor to confirm no emotion inference (Art. 5(1)(f), S-01), train staff (Art. 1 point 5, S-02). |
| Deadline | 2 December 2027, no grace period (Art. 1 point 40(b), S-02). | Plan for the same date. A grace rule may apply. AI-04's start date is unknown (Art. 1 point 39(a), S-02). |
| GDPR | Assumes an impact assessment (Art. 35, S-05). | Not addressed. |
| Weakest assumption | The bank as provider. The register says "bought" (Art. 25(1), S-01). | EU use. No file says the bank hires in Germany (Art. 2(1)(c), S-01). |

**Neither reading tests the case of no EU use, and no file shows any EU use.** If there is none, the Act does not reach AI-04 and the EU duties above fall away (Art. 2(1)(c), S-01). Whether a German applicant for a Dubai job counts: unknown.

**DIFC duties do not depend on the EU answer.** To check: manual review on request (Art. 38(1), S-04), notice at first use (Reg. 10.2.2(a), S-03), fair treatment (Reg. 10.3.1(b), S-03), and a way to complain (Reg. 10.3.5, S-03). Biggest open risk: AI-04 may be "High Risk Processing Activities" (Schedule 1, S-04). If so, the guidance bars its use until the DIFC Commissioner has set certification requirements (Guidance on Reg. 10.3.3, S-03). Whether those exist: unknown.

## What we need from the bank to decide
1. **Head of Human Resources, in writing:** is AI-04 used for any EU job, or are its rankings used in the EU? (Art. 2(1)(c), S-01)
2. Does a person review the ranking before anyone is rejected? (Art. 38(1), S-04)
3. Has the bank rebranded or substantially changed AI-04 (Art. 25(1), S-01)? When did it go into service, and have vendor updates changed its design (Art. 1 point 39(a), S-02)?
4. Can the vendor confirm it does not infer emotions (Art. 5(1)(f), S-01) and show fair treatment (Reg. 10.3.1(b), S-03)?
5. Is the bank incorporated in the DIFC, and what is its legal reason to use the data? (Arts. 6(3), 10, S-04)
6. Do applicants use a website (Reg. 10.2.2, S-03), and how many CVs are processed (Schedule 1, S-04)?

## My suggested next step
Get answer 1 first, then repeat the AI-04 assessment from the scope check. Ask a lawyer when Art. 86 (S-01) starts to apply to AI-04. This desk gives no final opinion. The Head of Human Resources signs off first, then the Chief Risk Officer gives final approval.
