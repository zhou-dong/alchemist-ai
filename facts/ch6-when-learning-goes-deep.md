# Facts — When Learning Goes Deep

*This file holds facts specific to this chapter.*

> **Status note:** like ch2/ch5, this script carries no established/plausible/speculative tagging — the "Human Parallel" section states real AI history with the same confident phrasing as the Bila narrative. This is the densest, most specific AI-history section of any chapter so far. It contained one likely factual error (the 2024 Nobel Prize claim below), **fixed in the script on 2026-09-12** — see the note below.

## The perceptron and its limits — history

- Frank Rosenblatt built the Mark I Perceptron, a physical machine that learned to classify simple images by adjusting weights, in the late 1950s. (established, matches standard AI history; consistent with ch2/ch3's Rosenblatt dating)
- Marvin Minsky and Seymour Papert published *Perceptrons* in 1969, proving that a single-layer perceptron can only learn linearly separable functions. (established — this is a real, well-documented result and publication date)
- The XOR problem (a single-layer perceptron cannot learn the XOR function, since its true/false outputs are not linearly separable) is a real, standard illustration of this limitation, correctly described in the script. (established)
- The claim that *Perceptrons*' publication caused funding for neural network research to dry up and led to a period of reduced activity now commonly called the "AI Winter" is a widely repeated characterization in AI history, though the book is more precisely one contributing cause among several (also including broader disappointment with machine translation and general AI funding cuts in the 1970s) rather than the sole cause. (plausible as the field's popular retelling; the script's framing of it as a direct, singular cause is a simplification of a more multi-causal history)
- Frank Rosenblatt died in a boating accident on July 11, 1971. (established — a real, documented, and sensitive biographical fact; should be handled with care in narration, not dramatized beyond the plain fact)

## What Minsky did not disprove

- Minsky and Papert's book did not prove that multi-layer networks with hidden layers were incapable of solving non-linear problems like XOR — it proved this specifically for single-layer perceptrons. The book is commonly understood, in retrospect, to have been read more broadly (and pessimistically) than its actual mathematical claim. (established characterization, consistent with standard histories of the AI Winter)
- The claim that the missing piece was specifically *a training method for hidden layers* (not the hidden layer's existence, which had been theoretically discussed earlier) is an accurate framing of why the 1969–1986 gap mattered. (established)

## The 1986 backpropagation paper

- David Rumelhart, Geoffrey Hinton, and Ronald Williams published "Learning representations by back-propagating errors" in *Nature* in 1986, demonstrating that backpropagation could train multi-layer networks with hidden layers to solve non-linearly-separable problems. (established, matches standard AI history)
- The paper's finding that hidden units trained by backpropagation learn internal feature representations not explicitly designed by a human is accurately described. (established)
- Backpropagation as an algorithm (the chain-rule-based computation of gradients through a computational graph) had actually been described earlier by other researchers in various forms (e.g., work by Paul Werbos in the 1970s, and Seppo Linnainmaa's automatic differentiation work in the 1970s) — the 1986 Rumelhart/Hinton/Williams paper is correctly credited as the paper that made backpropagation's use for training multi-layer neural networks widely known and adopted, but the script's framing ("in 1986... three researchers... demonstrated that backpropagation... could train hidden layers," implying the technique's origin) simplifies a real prior history of independent discovery. (plausible as "the paper that popularized/vindicated the method for neural nets"; overstated if read as "backpropagation's invention")

## The 2024 Nobel Prize claim — corrected

- The 2024 Nobel Prize in Physics was awarded jointly to **John J. Hopfield and Geoffrey Hinton**, "for foundational discoveries and inventions that enable machine learning with artificial neural networks." The original script omitted Hopfield and framed the prize as awarded to Hinton alone, specifically for the 1986 backpropagation paper — the actual citation is broader (covering Hopfield's associative-memory networks and Hinton's Boltzmann-machine-era work), not narrowly the 1986 paper. **Fixed in the script on 2026-09-12**: the relevant line now names Hopfield as co-recipient and attributes Hinton's share to the broader line of work rather than the 1986 paper specifically. (established, now correctly reflected in the script)

## Broad lineage claim

- "From that 1986 paper, everything followed... every one of them trains its hidden layers through backpropagation" — backpropagation is indeed the dominant training method underlying the deep learning systems named (image recognition, language models), so the general lineage claim is broadly defensible, but as with ch3's similar claim, it compresses independent contributions from many researchers across decades into a single-paper origin story. (plausible as a simplified narrative lineage; not a precise claim of singular causation)

## Framing notes

- The claim that "the algorithms did not appear from nowhere. They are the same logic that life discovered hundreds of millions of years ago — just running on silicon instead of cells" and the closing line that evolution "found the same answer seventeen years before Hinton's paper could name it" are the chapter's own rhetorical/philosophical framing (paralleling Bila's story to human AI history), not claims requiring independent verification. (framing)
- The Human Parallel section's structure (loss → backpropagation → implicit association, mapped directly onto the Rosenblatt → AI Winter → 1986 backprop arc) is a pedagogical device, not a historical claim that Bila's evolutionary story and the human research timeline are causally connected. (framing)
