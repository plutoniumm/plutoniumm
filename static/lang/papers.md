# Paper style rules

1. **Plain and short.** Common words, one idea per sentence, active voice. No em dashes, no stitched semicolons.
2. **Every sentence earns its place.** It is obvious, shown in this paper, or cited.
3. **Define before use.** Standard letters (n, k, d, L, p, T), acronyms spelled out on first use, no invented jargon, one word per concept throughout (a new word reads as a new meaning).
4. **One story.** One thread from the gap to the finale; every section and paragraph has a job in it. Outline one sentence per paragraph before writing.
5. **Paragraph shape.** Open with the point or question, evidence in the middle, end with the takeaway.
6. **Flow.** Start each sentence with what the reader already knows, end it with the new part. Keep subject and verb close.
7. **Show, don't tell.** Figures, tables, algorithms and equations over prose. Section headers are two or three words. Figure titles state the conclusion. Equations are part of sentences: punctuated and numbered.
8. **No code, only examples.** Zero code references: no file, function, variable, flag or library-call names. Explain machinery (tokens, the decoder's structure, its heads and inputs, a detector volume, a fault model) with a small worked inline example instead.
9. **Plain verbs.** The verb says what happens: is, has, gives, computes, needs, holds, equals. Not carry, realise, read off, yield, admit, account for, govern, exhibit, constitute, manifest. Dressed-up verbs hide the plain statement under them.
10. **Refer to every float.** Each figure, diagram, table and algorithm is cited in the text before it appears, and the text says what to look for.
11. **State results as fact, without filler.** Write "the threshold is 1.1%", not "this paper shows" or "we find that". Never write "the paper" in the prose. "We" is for actions (we sample, we fix d = 5), not claims. Cut very, clearly, obviously, note that, in order to, novel, exactly, crucially, interestingly. No rhetorical questions, no emotion.
12. **Numbers carry their error, claims match evidence.** Every measured number has its uncertainty, sample count and setting nearby: 1.10(4)% over 10^6 shots at d = 7. A bound is a bound, a fit is a fit, three sizes is not a scaling law. Hedge once, where the doubt is.
13. **Math is worked, not described.** Show the equation and the step, not a paragraph about it. Small cases first: d = 3 before general d. Every symbol is defined in the sentence that holds it or just before.

## Section jobs

- **Title.** The result or the object, not the method's brand name. No colons unless needed.
- **Abstract.** Four moves, one or two sentences each: context, gap, what is done, the main number or result. No citations, no undefined acronyms.
- **Introduction.** Known ground, then the gap, then how this work closes it, then the result, then a short list of contributions. The last paragraph may map the sections.
- **Background.** Only what later sections use. If a definition is never used again, cut it.
- **Method.** Enough that a reader could rebuild it from the text alone. A worked small example beats a general description.
- **Results.** One subsection per claim. Each opens with the claim, points at its figure, then gives the numbers.
- **Discussion.** Limits, failure cases and what would change the conclusion. Compare to prior work by number, not adjective.
- **Conclusion.** The result restated in one paragraph and the next open question. No new material.

## Figures and tables

- Readable in grayscale and by colorblind readers; distinguish series by marker or line style too.
- Axis labels with units, legible at print size. Log axes say so.
- Caption: first sentence is the conclusion, then what is plotted, then the setting (sizes, shots, noise model).
- Error bars or bands on every simulated point, and the caption says what they are (one standard deviation, 95% interval).
- A table compares like with like; best value per column in bold only if the comparison is fair.

## Citations

- Cite the original source for a result, plus a review if useful. Cite the specific theorem or section when the claim is narrow.
- Every claim about prior work is checkable in the cited work. Do not cite what was not read.
- Name prior methods by what they do, not only by author: "the union-find decoder [12]".

Sources: Mensh & Kording, "Ten simple rules for structuring papers" (PLOS Comput. Biol. 2017); Gopen & Swan, "The Science of Scientific Writing" (Am. Sci. 1990); Mermin, "What's wrong with these equations?" (Phys. Today 1989).
