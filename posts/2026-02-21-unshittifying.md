---
tags: post,socialmedia,enshittification
layout: post
title: De-shittifying Your Digital Environment
---

I wanted to make a post for a long time detailing some of the steps I've taken to make things better for myself in the digital world. Fair warning, some of them are extreme but should still spark some ideas.

# Contents

- [General Advice](#general-advice)
  - [uBlock Origin](#ublock-origin)
  - [Redirector](#redirector)
- [Firefox](#firefox)
- [Google Search](#google-search)
- [Twitter/X](#twitterx)
- [Discord](#discord)
- [YouTube](#youtube)
- [GitHub](#github)
- [Gmail](#gmail)
- [Music](#music)
- [Reddit](#reddit)
- [Conclusion](#conclusion)

# General Advice

## uBlock Origin

Use uBlock Origin. If you don't have it on your browser (Chrome), switch to one that does (Firefox).

One of the great things about uBlock is that it not only blocks ads, but you can use it to block _any element_ on the page. If there's some aspect of a web app that annoys you, typically you can right click and use uBlock to remove the element from the page. This isn't perfect and takes a bit of fiddling, but it can do wonders when it works.

One block rule that I love is blocking annoying "login with google" popups that have cropped up everywhere:

```
||accounts.google.com/gsi/iframe
```

## Redirector

I use a Firefox extension called [Redirector](https://addons.mozilla.org/en-US/firefox/addon/redirector/). It allows you to set up rules to redirect your browser from one site to another. For example, you could use it to redirect Twitter's main feed URL to a list feed, so you never "accidentally" end up on the main feed. This one is a bit more advanced, but it could be helpful to some.

# Firefox

How the mighty have fallen. If you're out of the loop, Firefox parent company Mozilla has been speedrunning AI adoption at a breakneck pace, trying to make Firefox into an "AI First Browser". After significant push-back they are finally introducing an option to turn all AI features off, but AI is still enabled by default. Even though it's opt-out, they are calling it opt-in, because apparently consent is dead.

I use a user script to keep as much of this turned off as possible.

1. Navigate to `about:profiles` in your browser.
2. Click "Open Directory" on your profile's Root Directory
3. Create a new file called `user.js`
4. Enter the below content, then restart your browser.

```javascript
user_pref("browser.aiwindow.enabled", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.enable", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.pageAssist.enabled", false);
user_pref("browser.ml.smartAssist.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("extensions.ml.enabled", false);
user_pref("sidebar.notification.badge.aichat", false);
```

## A note on forks

I am not going to recommend anyone switch to a Firefox fork. Despite their direction, Mozilla are still best positioned to provide a safe browsing experience.

Your browser is your portal to the web, and has almost evolved into an operating system in its own right. It's vital that it remains secure, and any downstream fork of Firefox will have delays in security fixes and potential attacks to their software supply chain.

## A note on Brave

Brave is a chromium based browser that has a track record of (in my opinion) unethical behavior, [injecting referral codes](https://web.archive.org/web/20260220185518/https://brave.com/blog/referral-codes-in-suggested-sites/), [injecting their own ads](https://archive.is/W0k4j), and [implementing "Web3" blockchain/NFT features](https://web.archive.org/web/20251216082400/https://brave.com/web3/). Do not use it under any circumstances. Even if their direction changes, which I doubt it will, their leadership has proved over and over that they shouldn't be trusted.

## A note on Chrome-based browsers in general

Google still has full control over chromium, and by extension many of the things that would make it into their forks. Any chrome-based browser now lacks critical tools such as uBlock, and Google keeps trying to [inject anti-competitive frameworks](https://en.wikipedia.org/wiki/Web_Environment_Integrity) that would allow sites to block any browser, addon, or hardware that they don't approve of. Don't use a chrome-based browser if you can help it.

# Google Search

I personally use a self-hosted SearXNG instance, which is a search aggregator that will hit multiple search engines with your query and return the results in a single list with no ads.

A very good alternative if you don't want to self-host is Duck Duck Go, specifically the (no-AI version)[https://noai.duckduckgo.com/]. It disables "AI-summary" widgets and tries its best to remove AI-generated images from the image search.

# Twitter/X

Just stop using it. I know that's not really helpful, but if you have to use it, bookmark a private list that only contains the accounts you care about. You'll be presented with a chronological list that you can catch up with easily. Never go to the main feed.

## Alternative: Mastodon/Fediverse

Getting started in fedi can be a challenge. It's not a single unified platform, but many different servers and server software that can all communicate with each other. Your account works kind of like email, where you have an account on one server that can (normally) communicate with accounts on any server. This all works over a protocol call ActivityPub.

Mastodon is the most popular microblogging federated software, though there are others. [https://joinmastodon.org/servers](https://joinmastodon.org/servers) is a decent place to get started with picking a Mastodon server. If you can't choose, mastodon.social is _fine_, but you may want to move to another server later, which you can absolutely do fairly easily.

New accounts don't follow anything, so your feed will by empty to start. You should start by looking at hashtags of things that interest you, following people that look fun to build up your feed.

## Alternative: BlueSky

BlueSky is a corporate owned and VC-backed platform. It makes claims of being federated (using something called AT Protocol), but it is still highly centralized. Culturally, it's a more liberal-leaning Twitter, but it's still largely the same kind of rage-bait culture as Twitter. I don't personally enjoy it there, but if you have people you want to follow there, it's at least not algorithmic.

# Discord

On PC I use a modified Discord client called [Vesktop](https://vesktop.dev/), which is the Discord desktop app pre-bundled with a mod called Vencord. This blocks most annoyances and has a few nice quality of life features. Note that using a modified client is technically against Discord's TOS, so use at your own risk!

## Alternative: Matrix

Matrix has problems, but as far as alternatives go, it's possibly the least-worst one. One thing to note is that the main instance matrix.org has implemented a paid-tier to help them keep the lights on, with free accounts having limits to things like uploads. You can find other instances, and as with Mastodon, it's federated, so you can still join channels and message people on other instances.

Self-hosting is a bit of a challenge, but possible, and there is a very good Discord bridge that you can use to join Matrix and Discord rooms together: [Out of Your Element](https://gitdab.com/cadence/out-of-your-element/)

Unlike Discord, there are multiple clients to choose from on both PC and Mobile. I tend to use Element since it's the most feature-rich.

## A note on newer alternatives

With Discord ceding ground to surveillance states, leaking personal data, and enshittifying at an accelerating rate, a lot of alternatives have rapidly been cropping up. Most of the ones that have entered the scene recently have been AI-generated slop. For your own safety I do not recommend any of them.

# YouTube

YouTube is one of the main things I consume, but I almost exclusively only watch channels I subscribe to. I've got a variety of methods of doing this.

It's worth mentioning that I directly support the creators I love via their Patreons or other donation platforms. I'm just not willing to give YouTube anything until they fix their hearts.

## Pinchflat

[Pinchflat](https://github.com/kieraneglin/pinchflat) has been a godsend, but I realize that it very likely isn't for everyone as it requires hosting your own services. I use it in conjunction with a self-hosted media server called [Jellyfin](https://jellyfin.org/).

This is a service you can host yourself that will follow the YouTube channels or playlists you tell it to, and automatically download them using `yt-dlp`. I have it set up to download directly to one of my Jellyfin libraries, so I can watch videos offline, without ads, and it also typically downloads videos before YouTube copyright trolls can take them down. This is how I primarily watch videos for the channels I follow, even on mobile.

Unfortunately, as with NewPipe, it can be fragile at times.

## RSS

Did you know YouTube has RSS feeds? These are especially useful since YouTube has a habit of not showing subscribed videos to you, and it helps you avoid their main page where the crap is. Most feed readers will be able to find the feed URL if you give it the link to the channel. If not, the RSS feed can be found using this method:

1. Go to the channels page
2. Click "more..." on their description
3. On the new modal dialog, scroll down and click "Share channel", then "Copy channel id"
4. Paste the ID to the end of this URL, and give that to your feed reader: `https://www.youtube.com/feeds/videos.xml?channel_id=`

I personally use [FreshRSS](https://github.com/FreshRSS/FreshRSS), which I host on my homelab. It allows me to keep my "read" status and subscription list shared between devices.

## On Web

On the web, I use uBlock Origin to make the experience halfway usable. Outside of blocking ads, I also block recommended videos and comments on the watch page.

Here are some of the extra rules I've added for this.

```
youtube.com##.ytd-watch-next-secondary-results-renderer
youtube.com##.ytd-shelf-renderer
youtube.com##.ytd-comments
youtube.com##.ytp-endscreen-content
www.youtube.com##:matches-path(/^(?!\/feed\/history).*$/)ytd-rich-section-renderer:has(#title:has-text(/(^| )Shorts( |$)/i))
www.youtube.com###secondary
www.youtube.com##.ytp-fullscreen-grid-stills-container
```

## On Mobile (Android)

For watching videos on mobile whose channels I'm not subscribed to via Pinchflat, I use a custom client called [NewPipe](https://newpipe.net/). It's recommended to install it via NewPipe's official update repository using F-Droid. It updates frequently and can unfortunately often break, as YouTube keeps trying to block it and other methods of watching videos.

# GitHub

This is probably a bit weird to have on the list given its relative unshittified-ness, but there is one tip I can offer. If you are against LLMs or are skeptical of LLMs in coding, there are some agent accounts worth blocking, which you can do at your [GitHub settings page](https://github.com/settings/blocked_users):

- `claude`
- `cursoragent`
- `gemini-code-assist`

GitHub will warn you with a banner anytime you open a repository page if one of those accounts has contributed. It doesn't necessarily mean it contains generated code, but it's a good litmus test. As [No Boilerplate](https://namtao.com/@noboilerplate/116085772162424749) put it, you can use it to "immediately adjust your expectations" of the project.

## Alternative: Codeberg

[Codeberg](https://codeberg.org/) is a non-profit GitHub alternative, running using [Forgejo](https://forgejo.org/) an Open Source Git forge that you can even self-host. Of course, most projects are still only on GitHub, but if you don't want to host your own projects there, Codeberg or Forgejo is a good alternative.

# Gmail

This one is hard, and I'm still not sure what to do about it yet. So far, I've signed up for ProtonMail, but this was immediately before their CEO voiced support for a certain fascist, and have been hesitant to complete the switch.

What I will say, if you do try to switch off of Gmail, go to a service that supports custom domains, and get yourself a domain of your own. That way if you ever have to switch again you won't have to update all your accounts and notify your contacts of a new address.

# Music

This section is mainly about Spotify, YouTube Music and other "endless stream" music platforms that are becoming worse and worse over time.

Buy music from real artists. Plenty of artists are on [Bandcamp](https://bandcamp.com/). I use some self-hosted solutions to stream and sync my music collection (Navidrome w/ Ultrasonic as an Android client, unison and mpd on my desktop) but you can easily get by with just a folder or a file share.

Worst-case, `yt-dlp` can be used to download music from YouTube, but you should still try to support the artist if you can.

I use this bash script to help with MP3 downloads, which embeds metadata including thumbnail.

`yt-dlp-mp3`
```bash
#!/bin/bash

yt-dlp --cookies-from-browser firefox -v --embed-metadata --embed-thumbnail --ppa "ffmpeg: -c:v mjpeg -vf crop=\"'if(gt(ih,iw),iw,ih)':'if(gt(iw,ih),ih,iw)'\"" --convert-thumbnails jpg --audio-format mp3 -x --format bestaudio -o '%(channel)s - %(title)s' "$@"
```

You can even use it to download a whole playlist:

```
yt-dlp-mp3 --yes-playlist https://www.youtube.com/playlist?list=...
```

# Reddit

Reddit is legitimately terrible. There are a few subreddits that are well moderated, but if you _must_ go there, at least use Redirector or something else to block yourself from browsing the main feed, and using uBlock to block any UI elements that show recommendations.

Outside of hitting it after a web search when looking for something specific, I stay off of it. Every other experience I've had with that platform has been awful.

# Conclusion

That's basically it for now. I'll likely come back to update these when I find or remember other things I'm doing.
