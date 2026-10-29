# Ghosted by the Machine: The Game

**Can you beat the hiring machine?**

A free, mobile-friendly browser game inspired by the *Ghosted by the Machine* podcast. It turns the frustrations of today's job search into five quick levels: résumé scanners, AI interviews, disappearing replies, red-flag job postings, and the final offer.

Under the humor is a serious goal: help job seekers feel seen, share practical tips, and push for better hiring practices.

**Let's make hiring human again.**

---

## Play

Play in your browser: **[markklane-collab.github.io/Ghosted](https://markklane-collab.github.io/Ghosted/)**

No download, no sign-up. Works on phone and desktop. About 5 minutes from start to finish.

---

## The five levels

| Level | Name | What you do |
| ----- | ---- | ----------- |
| 1 | The ATS Strikes Back | Match your résumé skills to the job posting's exact keywords before time runs out |
| 2 | Interview Impossible | Answer three questions from an AI interviewer, some real and some ridiculous |
| 3 | The Ghosting Zone | Whack-a-ghost: tap fading conversations before they go silent, and skip the no-reply bots |
| 4 | The Hiring Circus | Spot red flags in job postings and hiring processes |
| 5 | The Final Offer | Accept, negotiate, or decline an offer. Your choice decides your ending |

Along the way you earn **Human Points**, manage your **Confidence**, and get real advice from **Riley**, a recruiter who's on your side. The system is the villain here, not the people inside it.

At the end, you get a badge and a ready-to-post LinkedIn summary of your results.

---

## How it's built

- `index.html` is the game. `content.js` holds the questions. Plain HTML, CSS, and JavaScript.
- No frameworks, no build step, no database, no tracking.
- Fonts load from Google Fonts. Everything else is self-contained.

### Install it like an app

On iPhone, open the game in Safari, tap **Share**, then **Add to Home Screen**. On Android or desktop Chrome, tap **Install the app** on the title screen. It opens full-screen with the ghost icon and works offline.

### Adding new questions

All questions live in `content.js`, and the game picks 3 at random from each list every time someone plays. See [CONTENT-GUIDE.md](CONTENT-GUIDE.md) for the weekly routine and copy-and-paste templates.

### Run it locally

Download `index.html` and open it in any modern browser.

### Publish it with GitHub Pages

1. Upload `index.html` and `README.md` to this repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
5. After a minute or two, your game is live at `https://<your-username>.github.io/<repository-name>/`.

---

## Feedback

Played it? We'd love to hear what made you laugh, what felt too real, and what you'd add next. Share your results on LinkedIn with **#MakeHiringHumanAgain**.

---

## About the podcast

*Ghosted by the Machine* explores AI in hiring, candidate experience, and how to make hiring more human.

**[add your podcast link here]**

---

© 2026 Ghosted by the Machine. All rights reserved.
The game, name, logo, and characters may not be reused or redistributed without permission.

