# Weekly content guide

All weekly questions live in **`content.js`**, for both job seeker mode and Recruiter Mode. The game draws **3 at random** from each list every time someone plays, so every question you add makes replays more varied. You never need to touch `index.html` to add questions.

## The weekly routine (about 15 minutes)

1. **Pick a theme.** Use this week's podcast episode, a guest's best insight, or a hiring story in the news.
2. **Write 1–3 new items** using the templates below. One for Level 2 and one for Level 4 is plenty.
3. **Change `"week"`** at the top of `content.js` to the new date, like `"Nov 9"`. The title screen shows "New this week · Nov 9".
4. **Commit.** The live game updates within a few minutes. Players who installed the app get the new questions the next time they open it.

Or simply send the theme or episode notes to Claude and ask it to write, test, and publish the new questions.

## Rules that keep the game working

- Keep **at least 3 items** in each job seeker list (`resumes`, `interview`, `circus`). The Recruiter Mode lists (`recruiter.suspects`, `recruiter.offer`) add to the built-in scenarios, so they can start empty.
- Every quiz question needs **exactly one** answer with `"best": true`.
- Put a backslash before quotation marks inside text: `\"like this\"`.
- Keep the commas between items. A missing comma breaks the file. The game then falls back to its built-in questions, so it keeps working, but your new ones won't show.

## Template: Level 2 interview question (`interview` list)

```js
{
  "q": "The interviewer's question goes here?",
  "o": [
    { "t": "A weak answer", "hp": -15, "c": -4, "fb": "Why it falls flat." },
    { "t": "The best answer", "hp": 60, "c": 8, "best": true, "fb": "Why it works, with a real tip." },
    { "t": "An OK answer", "hp": 20, "c": 3, "fb": "What's good about it, and what's missing." },
    { "t": "The funny answer", "hp": 10, "c": 2, "fb": "A joke, then a nudge toward the real lesson." }
  ]
}
```

`hp` = Human Points earned. `c` = change to the player's confidence.

## Template: Level 4 red-flag question (`circus` list)

```js
{
  "q": "The scenario or question goes here?",
  "o": [
    { "t": "Option A", "hp": -10, "fb": "Feedback." },
    { "t": "The right answer", "hp": 50, "best": true, "fb": "Why, plus what to ask or do." },
    { "t": "Option C", "hp": -10, "fb": "Feedback." },
    { "t": "Option D", "hp": 5, "fb": "Feedback." }
  ]
}
```

## Template: Level 1 job posting (`resumes` list)

```js
{
  "title": "Job title",
  "co": "Company name · Remote",
  "jd": "Posting text. Put the [exact keywords] players should match in square brackets.",
  "right": ["Exact keyword 1", "Exact keyword 2", "Exact keyword 3", "Exact keyword 4", "Exact keyword 5"],
  "wrong": ["Vague phrase", "Buzzword", "Funny wrong answer", "Another wrong answer"],
  "tip": "Riley's advice for this posting."
}
```

The `right` list must use the same words as the bracketed keywords in `jd`.

## Recruiter Mode templates (the `recruiter` section)

Recruiter Mode has built-in scenarios, and anything you add here joins the pool. Each play of **Red Flag or Real Talent?** draws 8 candidates (always 3 fakes and 5 real people). Each play of **The Offer Call** draws 4 questions.

### Red Flag or Real Talent? candidate (`recruiter.suspects`)

```js
{
  "n": "Candidate name",
  "fake": 0,
  "clues": ["Clue one", "Clue two", "Clue three"],
  "truth": "Real. Why the clues that look suspicious are actually normal."
}
```

Use `"fake": 1` for a fake candidate. Put fake candidates' names in quotation marks, like `"“Jordan Lee”"`, to match the built-in ones. Exactly 3 clues. Real candidates should teach fairness: gaps, accents, career changes, disabilities, and bad internet are not red flags.

### Offer Call question (`recruiter.offer`)

```js
{
  "ask": "“What the candidate says.”",
  "field": "Short topic label",
  "o": [
    { "t": "Weak reply", "m": 1, "a": -10, "b": 0, "post": "What ends up in the offer", "fb": "Why it falls flat." },
    { "t": "Best reply", "m": 3, "a": 15, "b": 5, "best": 1, "post": "What ends up in the offer", "fb": "Why it works." },
    { "t": "OK reply", "m": 2, "a": 5, "b": 2, "post": "What ends up in the offer", "fb": "What's good, and what's missing." },
    { "t": "Risky reply", "m": 1, "a": 5, "b": -10, "post": "What ends up in the offer", "fb": "The trade-off." }
  ]
}
```

`m` = minutes the reply takes on the call (the call lasts 20). `a` = candidate trust. `b` = hiring manager trust. Exactly 4 replies, one with `"best": 1`.

## Voice

Funny, a little too real, and always useful. The system is the villain, never recruiters. Riley, a recruiter, is on the player's side. Every answer's feedback should leave the player with something they can use in a real job search.
