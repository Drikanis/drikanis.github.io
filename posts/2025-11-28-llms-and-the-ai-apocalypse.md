---
tags: post,industry
layout: post
title: LLMs and the AI Apocalypse
---

I wanted to get my thoughts down, at least my current ones, about generative AI.

## The Good

I'm going to get this out of the way- there are some applications of generative AI that are an overall boon, at least in my opinion.

- **Transcription engines** ML trained alongside a language model can produce more accurate speech to text transcription.
- **Translation** LLMs, _at least in theory_, should be able to provide more accurate and nuanced language translation.
- **Natural Language Interfaces** LLMs can be trained to extract intent from natural language requests. This can be a benefit for a variety of assistive automation technology.

But that's basically it. Considering that many of these are assistive in nature, I'm still hesitant to throw out LLMs entirely.

## The Bad

Oh boy here we go. Generative AI is what some like to call a "hyper-object" which is to say something that cannot be held in a human mind without examining it from a narrow slice at a time. So let's do some slicing.

I'll note that I am really not an expert here, these are just my thoughts having absorbed news and commentary on the topics from a variety of sources.

### Environmental Slice

The current boom of Generative AI is only accelerating the issues we're facing with climate change. These data-centers use power comparable to entire nations. For example a single Microsoft build-out is going to use the equivalent of 20% of the UK's entire energy grid.

This is the absolute _worst_ time in human history to be pulling massive amounts of watts for what is, in my opinion, the largest tech industry hoax of all time.

### Economic Slice

The economics of Generative AI simply don't make sense. The current valuation of these companies is driven primarily by the promise that it brings, but none of these companies with the exception of NVIDIA have actually turned any profits. They're losing so much money that NVIDIA is literally giving them GPUs in exchange for stock in their companies because they cannot afford it otherwise. They have nothing else to offer but their own inflated stock price.

Companies are massively overbuilding and overinvesting where there has been zero return on any investment so far, driven by circular "round-trip" investments/purchases and stock market hype. The inflated growth of these companies now accounts for over 50% of the growth in US GDP.

Several major banks are now warning that is is a bubble (or multiple bubbles) that are on the verge of bursting, just from a pure numbers perspective, and irrespective of how good the technology even is.

### Technological Slice

This is where I feel almost qualified to talk about this. Generative models, LLMs specifically, are auto-complete. They predict the next word in a sequence of words. That's it.

They admittedly do this very well. You may even think they are intelligent because they are able to answer questions. But do you know _how_ they answer questions? They are auto-completion engines, so why are they answering questions instead of appending to whats been said by the user?

Basically, it's because AI companies hired hundreds of people to write and curate question-and-answer style transcripts. The LLM _is just auto-completing a chat transcript_. In the early days, all these models would do is auto-complete or extend what had been typed by the user (GitHub Copilot worked exclusively this way) over time and with additional data from users trying to chat with it and rating the response, and combined with the underpaid labor of people writing and curating transcripts manually, it "learned" to auto-complete their side of a transcript.

It _really_ doesn't understand anything. Deep learning may help it relate tokens together probabilistically, but at the end of the day it's just math regurgitating words in a probable sequence.

For some applications, this may be "good enough". Some light coding, some email templates, inflammatory social media posts. But the second you try to rely on it for expertise or - gods forbid - companionship, it falls over with potentially devastating results.

But that's exactly what AI companies want you to use it for. The "team of experts in your pocket".

### Psychological Slice

I feel like this isn't talked about enough. This isn't just "AI Psychosis", though it certainly includes that. This is ceding part of your thought over to a machine that not only cannot think, but is also not under your control, and is only available for rent.

Confession time: when GitHub Copilot first came out, I was intrigued. I signed up for the technical alpha immediately, and even paid for an additional year once it was up.

It was _magical_, it almost knew what I was going to type, and made it extremely fast and easy to get code written. Over time though, I noticed several things:

1. **It made me lazy**: I just wanted the code written, rather than taking the time to do it right.
2. **It made leading suggestions** When you are coding with copilot enabled, it's constantly giving you code suggestions. Sometimes these look exactly like what you need, but it doesn't give you the opportunity to think about the problem before coming up with a solution on your own. Every suggestion primes you into thinking about the solution only in the way that it suggested, short circuiting the deep thought that would have prevented...
3. **Dead-end suggestions** When accepting its suggestions you'll often end up with a naive solution that doesn't work in the long run, requiring a lot of refactoring to fix.
4. **Subtle bugs** The problem with a system that is designed to produce things that "look correct" is that when they aren't correct, they are much, much harder to debug. It's as if you are pair coding with someone who is actively trying to sabotage you between shots.
5. **I couldn't work without it** Even with the shortcomings, I'd come to rely on it.

After I quit using Copilot, it took me _months_ to re-learn how to get into a deep focus state to quickly produce quality code. It had been interrupting and supplanting my thought so much that I had forgotten how to do things properly myself.

And this I think is the real psychological danger. A middle-man for thought. Thinking-as a-service. All the while doing a far worse job than any human ever could on their own.

### Societal Slice

It should go without saying that a lot of people are worried about increased automation in a society that values having a job above all else. It has happened before and it will happen again.

Irrespective of how good these models are at doing different jobs, that will not stop executives from using it as an excuse to fire and rehire if necessary, at a lower wage. Either way, they win.

Thankfully the solution is "simple":

- Unions
- Universal Basic Income
- Guaranteed Housing
- Universal Single-Payer Healthcare

That should be easy... Right?

### Legal Slice

Generative AI require massive amounts of data to create. This data must have come from somewhere.

Overwhelmingly we're discovering that it was stolen, without attribution or compensation, from hundreds of thousands if not millions of uncredited authors and artists.

This of course is copyright infringement, barring any fair-use claims that may hold up in court. But more than that, it's the theft of labor. Scraping value from everything they can get their hands on and reducing it into a slurry that somewhat resembles art to extract what value they can from it.

This of course presents some legal issues for anyone making and using these models. What if it regurgitates entire copyrighted works, as it's done in the past? How do you stake a copyright claim on something a human didn't create?

### Moral Slice

A civic engineer would never use an AI generated image of a bridge plan to build a bridge, so why would any self-respecting software engineer rely solely on generative AI to design and produce their software?

I strongly believe that "vibe-coding" is a full abdication of an engineers ethical responsibilities. It's a practice that should be ridiculed and shamed at every opportunity.

### Information Slice

This is one you've probably experienced. Search results are getting worse, and finding the information you need online is getting harder and harder. LLMs are being used by SEO spammers and scammers to _flood_ the internet with slop, drowning out anything real.

Of course the AI companies want this to happen so people will rely on their "more accurate" chatbots for information.

What we're seeing is the dilution of facts and humanity in the information space. The internet has undergone rapid inflation, and the spaces between the things that are real are getting filled with nonsensical slop.

There has been an effort by some to combat this, and the fight isn't over. From Anubis preventing scraping, to alternative search engines providing more accurate "slop-less" results.

## What Now?

Honestly, I don't know what the future holds. It seems like the AI industry is on the verge of collapse, but it's looked like that for the past 2-3 quarters.

I think overall, we'll see a bubble burst, and the economic ramifications of that. Generative AI will find a place to simmer quietly like block-chain and meta-verse technology has before it. Any experts who use it will find out it's real strengths and weaknesses and where it may fit into their work.

I do not think it will ever be the massive paradigm shift that AI evangelists are claiming it is, and certainly will never achieve "AGI" or super intelligence in this millennium. It'll have some use-cases we'll eventually get comfortable with, we'll find ways to fix the damage its done to the internet, and people will eventually go on with their lives.

And no, Sam, we won't ever be building a Dyson Sphere.

