---
tags: post
layout: post
title: On the Upper Limits of Complexity
---

Is it just me, or does it seem like technology can't advance much further than it has without turning to shit?

I don't think this necessarily the same thing as Enshittification, the tendency for technology under capitalism to over-monetize and under-deliver. Rather, I think there's an upper limit to complexity that we're finally starting to bounce off of.

Take silicon for example. Moore's Law has been dead for years. We can't cram any more transistors into modern chips, because we can't make those transistors any smaller without running into serious issues with quantum effects. We can't make CPUs much larger because the transmission time of signals from one side to another would literally take longer than a clock cycle. Compensating for either of these problems would involve adding complexity, bringing with it a whole host of new problems.

Another example is application development. We used to write programs either from scratch or with limited APIs for doing things like GUI elements and user interaction. Now we ship entire web browsers along with every application, with several web and server frameworks stacked on top of each other, in languages transpiled to other languages, with hundreds or thousands of thirdparty dependencies. They're many times slower and buggier than they ever were before, with far more moving pieces. Ironically, this design is somehow accepted as being "simpler" than the old ways.

Finally, we're seeing claims that LLMs will be the "operating system" of the future, and that it will be "programmed in English". That's supposedly the future of computing; a non-deterministic, extremely slow, power-hungry, and less accurate computer that isn't even Turing-complete. Overwhelming amounts of complexity to deliver "intelligent" solutions and it's worse than traditional computing at nearly every task.

It's like there's a baseline shit level of everything, and stacking more things on top of each other compounds the level of shit exponentially until, upon reaching a certain level of complexity, the thing becomes more shit than not.

I think that we'll start to see a resurgence of simplicity. More "dumb" electronics and manual switches/buttons. More efficiently and carefully written code with fewer dependencies and superfluous features. Rust I think is a good example of this (hopefully) emerging trend back towards intentionality and simplicity. There's really no reason applications should be running _worse_ than they did two decades ago when CPUs were many times slower than they are now.
