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

## Job seeker mode: the five levels

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

## New: Recruiter Mode

**Same machine, other side of the desk.** Recruiter Mode is for recruiters, talent acquisition, and HR. You follow one Marketing Coordinator hire from the first meeting to the offer, without ghosting anyone.

Play it from the title screen, or go straight to **[Recruiter Mode](https://markklane-collab.github.io/Ghosted/recruiter.html)**.

| Level | Name | What you do |
| ----- | ---- | ----------- |
| 1 | The Intake Meeting | The hiring manager wants a unicorn. Turn their wish list into a job real people can apply for |
| 2 | Screener Settings | Set the AI screener's rules before it runs, then see who it threw out |
| 3 | The Inbox Avalanche | It's Friday at 4:00 PM and 18 candidates are waiting. Answer them before 5:00 or they get ghosted |
| 4 | Red Flag or Real Talent? | Spot fake video interviews without rejecting real people who just look different on paper |
| 5 | The Offer Call | Your top candidate has a competing offer, a pay question, and wants to know how the AI scored them |

Two scores pull against each other: **Human Score** (how candidates feel) and **Hiring Manager** (how your boss feels). Each level can be played timed or untimed.

---

## How it's built

- `index.html` is the job seeker game. `recruiter.html` is Recruiter Mode. `content.js` holds the job seeker questions. Plain HTML, CSS, and JavaScript.
- No frameworks, no build step, no database. Privacy-friendly analytics (GoatCounter), no cookies.
- Fonts load from Google Fonts. Everything else is self-contained.

### Install it like an app

On iPhone, open the game in Safari, tap **Share**, then **Add to Home Screen**. On Android or desktop Chrome, tap **Install the app** on the title screen. It opens full-screen with the ghost icon and works offline.

### Adding new questions

All questions live in `content.js`, and the game picks 3 at random from each list every time someone plays. See [CONTENT-GUIDE.md](CONTENT-GUIDE.md) for the weekly routine and copy-and-paste templates.

### Run it locally

Download the repository and open `index.html` in any modern browser.

### Publish it with GitHub Pages

1. Keep all files at the top level of this repository.
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

