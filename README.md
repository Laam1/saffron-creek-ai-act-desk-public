# Saffron Creek AI Act Desk

This desk assesses the AI systems of Saffron Creek Bank against the EU AI Act and DIFC Data Protection Regulation 10.

Saffron Creek Bank is made up, and so is all the data here. **This is a learning project, not legal advice.**

The DIFC (Dubai International Financial Centre) is a financial free zone in Dubai with its own laws. The bank is licensed there and has customers in the UAE and Germany.

## Results

A "risk tier" is the category a system falls into under the assessment rules. The rating is the red/amber/green colour set from that tier.

| System | Name | Risk tier | Rating |
|---|---|---|---|
| AI-01 | Credit Scorer | high-risk | Red |
| AI-02 | Website Chat Assistant | needs lawyer | Amber |
| AI-03 | AML Transaction Monitor | needs lawyer | Amber |
| AI-04 | CV Screener | needs lawyer | Amber |
| AI-05 | Call Emotion Scorer | needs lawyer | Amber |
| AI-06 | Offer Personaliser | needs lawyer | Amber |
| AI-07 | Card Fraud Detector | needs lawyer | Amber |
| AI-08 | Developer Coding Assistant | needs lawyer | Amber |

- **AI-01 is high-risk.** Its output is used in Germany, and it matches the credit-scoring entry in the list of high-risk uses (Annex III, point 5(b), S-01).
- **The other seven are "needs lawyer".** The Act can reach a bank outside the EU when a system's output is used in the EU (Art. 2(1)(c), S-01). For these seven, where the output is used is unknown, so the assessment stops there. This records a gap. It is not a final classification.

Every system still needs sign-off from its owner, then final approval from the Chief Risk Officer. This desk gives no final legal opinion and approves nothing.

## Folders

| Folder | What it holds |
|---|---|
| `assessments/` | One assessment per AI system |
| `bank/` | Facts about the bank |
| `briefings/` | Plain-English summaries for managers (none written yet) |
| `data/` | The register of AI systems |
| `notes/` | Working notes, such as which tools were chosen and why |
| `regulations/` | The list of legal sources, with a source_id for each |
| `.claude/rules/` | Rules that apply only to assessment files or only to briefing files |

## Sources

S-01, S-02 and the other source_ids above are listed in `regulations/sources.csv`, with links to the legal texts.
