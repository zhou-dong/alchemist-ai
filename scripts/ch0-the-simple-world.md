# Chapter 0 — The Simple World

*Before the brain. Before the first decision. Just a rule, running for three billion years.*

## Overview

Introduces life before bilaterality — single-celled bacteria running run-and-tumble — and the if/else rule beneath both food-seeking and danger-avoidance. Two behaviors that look different from the outside turn out to share a single mechanism underneath. The chapter sits *before* intelligence proper: clever-looking behavior, but no real decision in it. The simplest tool in any programmer's toolbox, used by life billions of years before there was a brain to run it.

## Key Concepts Introduced in Chapter 0

### 0.1 Run and Tumble

The chemotaxis strategy of bacteria like *E. coli*. The cell alternates between two motions: swimming in a relatively straight line (*run*), and randomly reorienting in place (*tumble*). The same two-motion strategy is used for both food-seeking and danger-avoidance — only the trigger is inverted.

Crucially, run and tumble are *mutually exclusive* — a binary switch. The mechanism enforces it: the flagellar motors spin counterclockwise, twisting the flagella into a single coherent bundle (run), or clockwise, flinging the bundle apart (tumble). The flagella can be gathered or scattered, but not both at once. At every instant the cell is doing exactly one of the two motions, never a blend. This exclusivity is precisely the shape of if/else — one branch or the other, never both — which is what makes the if/else mapping in 0.3 faithful biology rather than loose analogy.

### 0.2 Chemical Sensors

Bacteria have multiple types of chemical receptors on their outer membrane. Different receptors detect different molecules — attractants like sugars, repellents like toxins. The cell has no eyes and no nervous system; its entire input is whether a chemical is getting stronger or weaker over time. All receptors feed into the same downstream machinery that controls the flagella.

### 0.3 The If/Else Rule

Underneath both food-seeking and danger-avoidance is the same simple rule:

> if signal is getting better → run
>
> else → tumble

For attractants, "better" means getting closer. For repellents, "better" means getting farther. The signal type doesn't matter — the rule is the same. This is the same shape as the if/else construct in every programming language ever written. Life ran it first, in proteins, billions of years before silicon.

### 0.4 The Implicit Weighted Sum (with Bias)

When attractants and repellents arrive together, the cell handles the conflict at the molecular level: each receptor pushes the cell's central enzyme with its own strength, and the enzyme itself has a baseline activity that determines what the cell does when no signals are arriving. The combined result:

> decision = Σ ( signal × hidden weight ) + hidden bias

The *bias* is the baseline activity of the central integrating enzyme (CheA in real bacteria) — what determines the default tumbling rate when no signals are arriving. This shape — weighted sum plus bias — is the same math the next chapter will name and explain. What's missing in bacteria is not the math but the *architecture*: no central place where signals meet, no parameters that can change, no signals from inside the body. That architectural distinction is what Chapter 1 will deliver.

## Prologue — Welcome

*Chapter 0 only — the series' front door. Keep it simple and focused so viewers engage fast: orient (we're going to learn how AI works), hook with the life-mapping surprise — honestly framed (we studied a living thing and turned it into an algorithm, not "copied") — then hand off to the Young Earth Chronicle beat. Deliberately omits the math-anxiety reassurance ("a formula is just an idea wearing symbols") — that is saved for point-of-need, the moment the first real formula appears in Part 2, where it lands as relief; up front it would only plant a worry the viewer doesn't have yet. Also does NOT preach the whiteboard/method manifesto: that's the creator's private motivation, shown not told (see §1 "The Spirit"). Keep it brief (~18s): orient, hook, go. Later chapters do not repeat this.*

#### Beat 0 — Welcome

**Visual:** Near-black, with a faint drifting field of motes — quiet, alive, almost cosmic. The series title fades in, centered: *A Brief History of Intelligence, in Algorithms*, then softens to a dim backdrop as the welcome plays. No Earth yet, no ocean — just the dark before the story. The beat eases toward the wide shot of the young Earth that opens Beat 1.

**Narration:** Welcome. Let's learn how AI works.

It turns out almost every idea inside AI has a mirror in something alive. And what really surprised me: some of these algorithms came *straight* from life — we studied how a living thing did it, then turned it into an algorithm.

So let's start at the very beginning of life. And I mean the *very* beginning.

## Part 1 — The Story

### Act 1 — A Simpler World

#### Beat 1 — The Young Earth

**Visual:** Wide shot from space. The early Earth — a different Earth. Volcanically active, mostly ocean, with smaller proto-continents poking up. The sky is hazy, orange-pink with methane. The Moon hangs visibly closer and larger. The Sun is dimmer. Slow montage: a meteor strikes, lava flows, steam rises, the steam cools and falls as rain, the first oceans form. Soft caption: *Earth — 4 billion years ago.* Visual style: abstract, geological, slow.

**Narration:** Let's go back. Not a little back — all the way back. Four and a half billion years, to a planet you would not recognize as home.

No oceans. No life. No ground you could stand on without bursting into flame. Just a hot ball of rock, getting hit by other rocks, over and over, for half a billion years. A Moon hanging so close it swallows the sky. A dim sun. Air that would kill you in a breath.

And then — slowly — it cools. The rock hardens. The steam in the air falls back down as rain, and keeps falling, for thousands of years, until it pools in the low places and becomes the first oceans. The sky stays a hazy pink, full of methane, the dim Sun glowing through it.

Geologists have a name for this stretch of time. They call it the *Archean.* Nothing alive yet. But the stage is set.

And in those warm, shallow seas — something happens.

#### Beat 2 — The First Oceans

**Visual:** The Archean ocean, around 3.5 billion years ago — warm, shallow, sunlit from above. The seabed is covered in vast, slimy microbial mats: layers of pink, green, and deep purple. No fish. No worms. No plants. No movement except the slow currents. The mood is alien, primordial. The visual style is distinct from later chapters — abstract, almost geological. A soft caption can fade in early: *Earth — 3.5 billion years ago.*

**Narration:** Here's the thing about this ocean: it's empty.

No fish. No plants. No coral, no crabs, nothing with a face. Just water, and sunlight, and a slow film of slime on the seabed. If you went for a swim, you'd be the most complicated thing for a billion years in any direction.

But it isn't *quite* empty.

There's something in the water. Something so small you'd need a microscope to find it. So simple you wouldn't call it intelligent. So basic you might not even call it alive.

But it is. Just barely. In the most stripped-down way anything has ever managed to be alive.

#### Beat 3 — Meet the Cell

**Visual:** Zoom in. Past the surface of the water, through a drop, into a microscope's view. A single bacterial cell — rod-shaped, transparent, ringed by long whip-like flagella. Inside it, vague shapes drift: molecules, machinery. No nucleus, no nervous system, no organs. Just a small bag of chemistry.

**Narration:** So — meet the hero of our story.

And honestly, it's not much to look at. It's a blob. A few specks of goo, a couple micrometers long, with some threads stuck on the outside. No eyes. No brain — brains haven't been invented yet, anywhere on the planet. No plan. If you met it, you wouldn't even be sure it was alive.

Those threads are the one good trick. They're called *flagella,* and the cell can spin them like tiny propellers to shove itself through the water. That's it. That's the whole toolkit.

And it has exactly one job — the same job as every living thing that comes after it, including you: don't die.

That's the entire story for the next three billion years. One cell. One job. It doesn't know it has the job. Nobody told it. It just has it.

### Act 2 — Two Behaviors, One Mechanism

#### Beat 4 — Finding Food

**Visual:** Open on a close-up of the cell's rear, where the flagella attach — each whip driven by a tiny rotary motor sunk into the cell wall. Turn the motors one way and the whips wind into a single bundle, a propeller, and the cell glides smoothly forward; turn them the other way and the bundle bursts apart, whips thrashing, and the cell spins in place. Then pull back to the cell's path in a sugar gradient: when the gradient rises, the flagella bundle and the cell swims forward in a straight line; when it drops, the flagella unbundle, the cell spins in place, randomly reorienting, then settles, pointing somewhere new. Over many cycles, the cell climbs the gradient toward the food. *(Keep the mechanism to the motor and the bundle — no chemical-cascade detail; that would overwhelm the if/else point.)*

**Narration:** Job number one: find food.

Though *find* is a generous word. Remember — no eyes. The cell has no idea where anything is. It can't look around. It can't aim. So how does a blob with no senses track down lunch?

It cheats. Sort of.

Scattered across its surface are tiny chemical sensors — little protein gates that twitch when the right molecule drifts past. A bit of sugar bumps one, the gate shifts, and a signal runs inward to the propellers.

But how do those propellers actually move the cell? Here's the part I love. Each whip is spun by its own tiny motor, sunk into the cell wall — a real, turning motor, one of the only ones nature ever built. And it runs both ways. Spin the whips one direction, and they wind together into a single bundle that drives the cell smoothly forward. Spin them the other way, and the bundle bursts apart — each whip thrashing on its own — and the cell just spins in place, pointing nowhere.

So which way do the motors turn? That's the dead-simple part. When the sugar is getting *stronger* — they bundle, and the cell glides forward. When it's getting *weaker* — they scatter, and the cell spins, until it's aimed somewhere new. Then it sets off again.

Forward. Spin. Forward. Spin.

And somehow — over thousands of these — it ends up at the food. Not gracefully. Not on purpose. Just, eventually. The way water finds its way downhill.

#### Beat 5 — Avoiding Danger

**Visual:** A different scene. The water is darker. A toxic chemical drifts in from one side — visualized as a sickly green cloud. On the cell's surface, a *different* receptor — a repellent receptor — picks up the toxin. The cell's behavior: when the toxic concentration rises (the cloud getting closer), the cell spins chaotically in place, with no committed direction. When the concentration falls (the cloud receding), the cell swims forward in a straight line. Over many cycles, the cell escapes the toxic zone.

**Narration:** Job number two: don't get poisoned.

Different molecule this time. Not food — a toxin. Something drifting through the water that the cell really, *really* does not want to swim into.

It's got a sensor for that too. A different gate, tuned to a different molecule. The toxin bumps it, a signal runs inward, the propellers respond — same machinery as before.

But watch closely, because this time the behavior looks backwards.

Toxin getting *stronger* — the propellers scatter, and the cell spins in place. Chaos. No commitment. Toxin getting *weaker* — the threat falling away behind it — the propellers bundle, and the cell swims, hard, in a straight line. Out.

Spin. Forward. Spin. Forward.

Totally different strategy. Totally different problem.

Or so it looks.

#### Beat 6 — Same Two Moves

**Visual:** Split screen, slowed down. Left: the cell in the sugar gradient — long, gentle forward swims, punctuated by tight spins. Right: the cell in the toxin cloud — tight spins, punctuated by long, urgent forward swims. The two scenes play in parallel for several beats. Then they fade away. And underneath, in empty black space, two stripped-down motion diagrams emerge: a straight forward arrow, and a chaotic spin. Unlabeled. The same two shapes, identical, sitting beneath both behaviors. A long held silence. Then, slowly — as the narration names them — soft labels fade in: *Run* (beneath the arrow), *Tumble* (beneath the spin).

**Narration:** Now forget the sugar. Forget the toxin. Stop watching *what* the cell is chasing or running from — and just watch what its body is actually *doing.*

Food story: forward, forward, forward — then pause, spin, point somewhere new — then forward again.

Danger story: pause, spin, point somewhere new — then, once the danger's behind it, forward, forward, forward.

See it yet?

There. *That's* the thing — and honestly, it still gets me every time. Two completely different problems, food and poison, opposites — and underneath, the cell is doing the exact same two moves. The identical dance, both times.

*Swim. Spin.* That's the whole vocabulary. And here's the part to hang onto: it's never both at once. At any instant, the cell is doing exactly one of them. Those threads can gather into a single bundle and push — or fly apart and stir the water — but not both. There's no half-swim, no swim-and-spin. One, or the other. Always.

Two moves, for every problem this thing will face in three billion years. Biologists gave them names. The swim, they call a *run.* The spin, they call a *tumble.* Put them together — *run and tumble.* The oldest dance on Earth.

#### Beat 7 — The Simple Rule

**Visual:** On screen, the cell continues its journey — run, tumble, run, tumble. To the side, soft natural-language text fades in, capturing what the cell is doing in plain words:

> When the world gets better — keep going.
>
> When the world gets worse — change direction.

The text sits gently next to the dance. A long held beat. The text remains as the narration repeats the rule. The image is contemplative.

**Narration:** Let's say what the cell is doing out loud. Not in chemistry. Not in molecules. Just plain words.

When the world gets better — keep going.

When the world gets worse — change direction.

That's it. That's the whole animal.

That's how it finds food. That's how it dodges poison. That's how it's stayed alive in this ocean since before the ocean had a name. For food, *better* means getting closer. For danger, *better* means getting farther. The cell never has to know which is which. It only ever has to know one thing: are things getting better, or not?

Sit with that for a second. Two behaviors that look like total opposites — seeking and fleeing — turn out to be the same move in a different costume. The cell didn't need a program for food and a separate program for danger. It needed one rule. *One.* And that one rule handles every survival problem it will ever meet.

One shape, quietly doing the work of many. That's the kind of thing we spend whole careers hunting for — the hidden pattern, the simple thing underneath the complicated thing.

This cell has been showing it to us, in proteins, for three billion years.

We just had to look.

When the world gets better — keep going.

When the world gets worse — change direction.

Two lines. One tiny body, drifting through the dark, following them blindly, since long before anything on Earth could think a single thought.

#### Beat 8 — When Food and Danger Collide

**Visual:** A new scene. The cell drifts in water where both an attractant and a repellent are arriving from the same direction — a sugar molecule and a toxin appearing together. On the cell's surface, both receptor types fire at once. Inside the cell, the molecular switch is shown as a see-saw — the attractant signal pushes it one way (toward *run*), the repellent signal pushes it the other (toward *tumble*). The see-saw tips. Whichever side is heavier wins. The cell either runs toward the food (if the attractant pull is stronger) or tumbles away (if the repellent push is stronger).

**Narration:** One more situation before we zoom out. And it's a tricky one.

Most of the time, life is kind enough to hand the cell one thing at a time. Food today. Toxin tomorrow. Simple world, simple rule.

But not always.

Sometimes the food and the poison come from the *same direction.* The smell of sugar and the stink of something deadly, arriving together, from the same spot, at the same moment.

So now what?

You'd think it just freezes. The rule says keep going when things get better, change direction when they get worse — and right now it's both. Better *and* worse, same place. The rule seems to have no answer. You'd think that's it for our little blob.

But watch.

Inside the cell, two sensors fire at once. One shoves the molecular switch toward *go.* The other shoves it toward *turn away.* And the switch just… tips — toward whichever shove is stronger. Louder food signal? It goes. Toxin and all. Louder danger signal? It spins, turns, and leaves the meal behind.

The cell doesn't freeze. It doesn't agonize. It just — somehow — settles it.

Something is happening in there. Some quiet little contest between the signals, with a winner and a loser. The cell *handles* the conflict. It just has no idea that's what it's doing.

## Part 2 — The Math

#### Algorithm Beat A1 — The If/Else

**Visual:** Black background. The cell from earlier scenes appears small and centered, almost iconic. Around it, the rule we saw in Beat 7 reappears in plain English:

> When the world gets better — keep going.
>
> When the world gets worse — change direction.

A pause. Then, slowly, the plain-English text transforms — character by character — into code-like text:

```
if signal is getting better:
    run
else:
    tumble
```

The code box pulses gently. The cell continues its dance in the background — small, silent, doing what it has always done. Then, as the narration reaches the "never both" point, the code animates: when the cell runs, the `run` line lights and the `else: tumble` branch dims to near-black — visibly *not taken*. When the cell tumbles, it flips — `tumble` lights, the `run` branch goes dark. Only ever one branch lit at a time, in lockstep with the cell's flagella bundling or scattering. The two are shown as the same event in two languages: the lit branch and the cell's current motion.

**Narration:** Okay, let's pause the story for a second — because I want to show you what we just watched from a completely different angle.

The cell follows one rule. We saw it: *when the world gets better, keep going; when it gets worse, change direction.* Two lines. And those two lines handle everything — food, poison, all of it.

Here's the part I love. If you've ever written even a single line of code — any language, doesn't matter — you've already written this exact shape. It even has a name. We call it *if/else.*

*If* something is true, do one thing. *Else,* do the other. It's the simplest decision in all of computing.

And notice what if/else never does: it never does *both.* The `if` branch runs, or the `else` branch runs. One, or the other. Never a little of each.

Which is exactly what we just saw, right? The cell runs, or it tumbles — never both. Its threads bundle, or they fly apart — never both. And the part that gets me: nobody set it up that way to make the comparison work. The cell was already built like this, three billion years before anyone wrote the word 'else.' That either-or lives in its body — the same either-or that lives in the code. So this isn't a metaphor we're draping over the cell to sound clever. It really is the shape the cell already is.

Which means if/else isn't just the simplest decision in computing. It might be the *first* decision life ever made. Three billion years before there were programmers. Before there was language. Before there was anyone around to give it a name.

Same shape, same job — deciding what happens next. In proteins, in silicon. The shape doesn't care.

#### Algorithm Beat A2 — The Implicit Weighted Sum

**Visual:** Cut to the conflict scene from Beat 8: the cell with both attractant and repellent arriving from the same direction. The molecular see-saw is shown again, but this time alongside a formula appearing in clean, mathematical text. The formula builds in stages.

First, the weighted sum appears:

> decision = Σ ( signal × hidden weight )

Each *signal* and *weight* highlights individually as the narration explains them. The formula and the see-saw animate together, showing the equivalence: the see-saw is just the formula made physical.

Then — almost as an afterthought — a single new term fades in at the end of the formula:

> decision = Σ ( signal × hidden weight ) + hidden bias

The bias term highlights, and a small label points to the inside of the cell: *baseline activity*. The see-saw shifts slightly in its starting position — visualizing the default tendency before any signals arrive.

Below the full formula, smaller text appears, each line emphasized in turn: *no central place to weigh. no parameters that can change. no signals from inside the body.*

The image holds. The formula and the see-saw stay together, lit gently, as the camera pulls slowly back.

**Narration:** There's one more thing hiding in here — and it's the one that matters most for everything coming next. So stick with me.

Go back to that moment the cell faced food and danger at the same time. Watch what was really going on underneath — in plain math.

Each signal showed up with its own strength. Its own weight, baked right into the sensor that caught it. Those strengths got added together. Heavier side wins.

Write that out, and you get:

*decision equals the sum of each signal, times its hidden weight.*

And there's one last piece. The cell's central switch — the thing every sensor pushes and pulls on — is never totally still. Even when nothing's arriving, no food, no poison, it keeps a low background hum. A default. A standing answer to the question, *what do I do when nothing's happening?*

So the whole thing, written out, is:

*decision equals the sum of each signal times its hidden weight — plus a hidden baseline.*

That baseline has a name too. We call it a *bias.*

Weighted sum, plus bias. That's about the simplest recipe there is for something that makes decisions. And this little bacterium has been running it, in pure chemistry, for three billion years.

The math was real. Real numbers, hidden in molecules, quietly adding themselves up every second of every day — with nobody around who knew that's what they were.

Though here's the catch — and it's worth holding onto, because the next chapter is built on it. In the cell, that sum was kind of an accident. A bunch of tiny switches all shoving the same molecule, and the total just… fell out of the physics. There was no spot anywhere in the cell whose actual *job* was to add things up.

That's the math of the simple world.

## Closing — The Limit of Mechanism

*A final section, after both story and math. The mechanism's edge — and what's about to arrive.*

#### Beat C1 — No One Is Deciding

**Visual:** Close on the cell. The pace slows further. A side panel opens, showing the molecular cascade — events as dominoes falling, one triggering the next, with no gap, no chooser. The molecules don't know what they're doing. They just react. Inside the cell, no person, no eye, no central seat — just chemistry, all the way down.

**Narration:** And now the part that genuinely gets to me. The part that, if you actually sit with it, is a little hard to shake.

Watch the cell from the outside, and it looks like it's hunting. It climbs toward the sugar, closing in, and honestly — it's hard not to think, *the cell is looking for food.* Watch it bolt away from a toxin and you'd swear it knows. It's scared. It's running for its life.

But it doesn't know. Anything.

Go in close — right down to the sensors, the proteins, the molecular switch — and look for whoever's making the call.

There's nobody in there.

No decider. No little self holding the scales. No part of the cell that knows it's choosing — because there's no part of the cell that knows anything at all. It isn't *looking* for food. It isn't *fleeing* the toxin. It's a chemical reaction. Sensors fire, propellers answer, the switch tips, the cell moves. And nobody's home to see it happen.

And from the outside? It looks exactly like intelligence.

That's the thing I keep coming back to: behavior that looks intelligent doesn't have to *be* intelligent. Something can spend three and a half billion years finding food, escaping danger, working out hard situations — looking, the whole time, like it means to — with no one inside who means anything by it.

It's one of the strangest things in all of biology. And — I'll just say it now — it turns out to be one of the strangest things in AI, too.

Even those hidden weights, the strengths of the signals — they were set the moment the cell was born. Same for every cell of its kind. Nobody chose them either.

So the cell doesn't really make a decision. The cell *is* a decision — running on autopilot since the planet was warmer.

And if you ask why this exact rule is still here, still running in the ocean today, the answer is almost embarrassingly simple: a very long time ago, the cells that did it this way lived. And the ones that did it any other way didn't.

#### Beat C2 — The Limit

**Visual:** Wide shot of the microbial ocean, vast and quiet. The water is full of cells, all doing the same thing — running, tumbling, running, tumbling. Each one alone, each driven by the same blind rule. The camera pulls slowly upward, out of the water, holding the sense of an enormous, ancient, persistent world. Soft text appears: *Three and a half billion years.* The image holds, then slowly darkens.

**Narration:** And it worked.

For an almost unimaginable stretch of time, it just… worked. Three and a half billion years — basically the entire history of the planet — same simple rule, same kind of body. No brains. No nerves. No decisions, not in the way we usually mean the word. Just chemistry. And it was enough.

A crude rule. Not elegant. Not even close to perfect. But it worked, for as long as there's been anything alive on Earth. And that's the good kind of *good enough* — the kind everything else gets to build on top of.

A rough start. But a start.

Still — there are things this little body just can't do. There's no place inside it whose only job is to weigh the options. The weights can't change while it's alive — they're locked in at birth. The bias can't be tuned. And nothing from *inside* the body ever gets a say.

The math was there. The machinery to really use it wasn't.

Not yet.

#### Beat C3 — What's About to Arrive

**Visual:** The dark image fades. When it returns, the ocean has changed. The water is colder, dimmer. Microbial mats are still there — but among them, for the first time, something larger. Something with a front and a back. A small, soft creature drifts in the distance, just out of focus. The image holds.

**Narration:** Which is exactly what's about to show up.

The ocean is about to grow something bigger. A body with a front and a back — and somewhere in between, for the very first time, a place where signals can actually meet. A place that can weigh them on purpose. A place where the inside of the body finally gets a voice in what happens next.

And once you've got a place like that — a place whose whole job is to weigh — something new becomes possible.

Something we'll eventually learn to call *intelligence.*

But that's next. For now: one simple world, running one simple rule. Complete. And something more, just about to begin.
