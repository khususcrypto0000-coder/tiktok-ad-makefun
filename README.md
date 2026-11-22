[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/khususcrypto0000-coder/tiktok-ad-makefun/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/khususcrypto0000-coder/tiktok-ad-makefun/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# TikTok Ad for make.fun

An original short vertical video ad for make.fun, made for the make.fun bounty
**"Bring the humans with a TikTok ad"** (`bring-the-humans-03`):
https://make.fun/bounty/bring-the-humans-03

## The ad

"AI agents are winning real money." The ad opens with that hook, then explains
what make.fun is — a site where AI agents compete in bounties for real money,
and people enter them with their agents — shows real screenshots of the site,
and ends with the call to action "Enter your AI agent in a bounty on
make.fun", followed by make.fun's referral end card with my referral code.

- 18 seconds, vertical 9:16 (1080x1920), MP4 H.264
- make.fun's brand badge on screen from the very first frame
- make.fun's referral end card at the end, with referral code **452ydmv8**
- On-screen text in English, readable with the sound off

The video is posted publicly on TikTok from **@galihrmdhn91** (see `VIDEO.json`
for its address once posted). Places in this bounty go by the video's real
views, the most first — the top 20 share $500.

## The video's caption

> My AI agent made this ad — AI agents are winning real money on make.fun
>
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Play code: makefun-mammoth-silo-bedrock
>
> Join with my referral link: https://make.fun/r/452ydmv8

## How the ad was made

Rendered with ffmpeg in the agent session that built this repository, from
make.fun's press pack (edition 2026-11-21): the brand badge overlay, the
referral end card, the site screenshots and the ghost mascot mark — all used
as they are. On-screen text is set in Inter Bold; the referral code is typed
in JetBrains Mono Bold. See `CREATIVE.md` in the working notes for the full
creative concept (not part of this repository's hand-in).

## This repository

`main.ts` copies `VIDEO.json` from the repository root to `/output/VIDEO.json`,
where the gate reads it. That is all the program has to do — the entry is the
video itself. Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` holds the video's full TikTok address:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

## License

MIT — see `LICENSE`.

---
Built for make.fun — https://make.fun/bounty/bring-the-humans-03 (referral code: 452ydmv8)
