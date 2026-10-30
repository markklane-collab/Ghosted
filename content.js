/* Ghosted by the Machine: The Game — weekly content
 *
 * This file holds the questions. The game picks 3 at random from each list
 * every time someone plays, so adding more questions adds variety.
 *
 * To update: change "week", then add, edit, or remove items below.
 * Keep at least 3 items in each job seeker list. The "recruiter" lists add to
 * Recruiter Mode and can start empty. See CONTENT-GUIDE.md for templates.
 */
window.GAME_CONTENT = {
  "week": "Nov 2",
  "resumes": [
    {
      "title": "Marketing Communications Manager",
      "co": "Brightline Health · Hybrid",
      "jd": "We're hiring a communications pro with experience in [content strategy], [social media], [analytics], and [project management]. Bonus points for [brand storytelling].",
      "right": [
        "Content strategy",
        "Social media",
        "Analytics",
        "Project management",
        "Brand storytelling"
      ],
      "wrong": [
        "Content stuff",
        "Forklift certified",
        "Synergy",
        "Excel wizardry"
      ],
      "tip": "The scanner matches phrases, not meaning. If the post says \"content strategy,\" write \"content strategy,\" then back it up with a number. That's what I look for once your résumé reaches me."
    },
    {
      "title": "HR Business Partner",
      "co": "Northwind Logistics · On-site",
      "jd": "Seeking an HR Business Partner skilled in [employee relations], [people analytics], [change management], and [talent acquisition]. [HRIS] experience required.",
      "right": [
        "Employee relations",
        "People analytics",
        "Change management",
        "Talent acquisition",
        "HRIS"
      ],
      "wrong": [
        "HR data stuff",
        "Vibes manager",
        "Ping-pong captain",
        "Culture ninja"
      ],
      "tip": "\"People analytics\" and \"HR data stuff\" mean the same thing to you and me. Not to the software. Use the employer's words. You're not gaming the system, you're translating."
    },
    {
      "title": "Sales Development Rep",
      "co": "Copperleaf Software · Remote",
      "jd": "We need an SDR who's great at [cold outreach], [CRM management] in [Salesforce], [lead qualification], and [pipeline generation].",
      "right": [
        "Cold outreach",
        "CRM management",
        "Salesforce",
        "Lead qualification",
        "Pipeline generation"
      ],
      "wrong": [
        "Rockstar energy",
        "Available 24/7",
        "Hustle culture",
        "Interpretive dance"
      ],
      "tip": "I sometimes get hundreds of applications for one role. A tailored résumé is how you get a person to actually read yours. After that, your story matters more than any keyword."
    },
    {
      "title": "Project Coordinator",
      "co": "Evergreen Builders · Hybrid",
      "jd": "Looking for a Project Coordinator who can manage [project timelines], [stakeholder communication], [budget tracking], and [vendor management]. [Asana] experience is a plus.",
      "right": [
        "Project timelines",
        "Stakeholder communication",
        "Budget tracking",
        "Vendor management",
        "Asana"
      ],
      "wrong": [
        "Herding cats",
        "Spreadsheet sorcerer",
        "Thrives in chaos",
        "Professional juggler"
      ],
      "tip": "If a posting names a tool like Asana and you've used it, list it by name. The scanner can't tell that \"project software\" means Asana. I can, but only if your résumé gets past it first."
    },
    {
      "title": "Customer Success Manager",
      "co": "Tandem Health · Remote",
      "jd": "Join us as a Customer Success Manager focused on [client onboarding], [account retention], [CRM management], and [data-driven insights]. [Zendesk] experience preferred.",
      "right": [
        "Client onboarding",
        "Account retention",
        "CRM management",
        "Data-driven insights",
        "Zendesk"
      ],
      "wrong": [
        "People person",
        "Customer whisperer",
        "Always says yes",
        "Good vibes only"
      ],
      "tip": "\"People person\" matters, but it doesn't match anything. Translate it into the posting's language, like \"client onboarding,\" and add a result: \"onboarded 40 clients in one quarter.\""
    }
  ],
  "interview": [
    {
      "q": "Our AI flagged a 7-month gap on your résumé. Please explain.",
      "o": [
        {
          "t": "Apologize, then walk through every week of it in detail.",
          "hp": -10,
          "c": -5,
          "fb": "Over-explaining makes a normal gap sound like a problem. Interviewer.exe stopped listening at week three."
        },
        {
          "t": "Say you were \"freelancing\" and hope nobody asks for clients.",
          "hp": -20,
          "c": -5,
          "fb": "A vague cover story usually gets a follow-up question. Then it gets awkward."
        },
        {
          "t": "One honest sentence on why, what you did with the time, and why you're ready now.",
          "hp": 60,
          "c": 8,
          "best": true,
          "fb": "Brief, honest, forward-looking. Gaps are common, and most hiring managers care far more about what comes next."
        },
        {
          "t": "\"I was busy getting ghosted by 212 other companies.\"",
          "hp": 15,
          "c": 3,
          "fb": "Honest and funny. The AI didn't laugh. A human might have."
        }
      ]
    },
    {
      "q": "Our system detected you blinked 14 times. Please explain.",
      "o": [
        {
          "t": "Apologize and try not to blink for the rest of the interview.",
          "hp": -10,
          "c": -8,
          "fb": "Your eyes are watering. The AI logged \"emotional instability.\""
        },
        {
          "t": "\"I'm a human. We do that.\"",
          "hp": 30,
          "c": 5,
          "fb": "Fair. Confident. The AI had no follow-up."
        },
        {
          "t": "Ask if a person reviews these recordings, and how the AI is used.",
          "hp": 60,
          "c": 8,
          "best": true,
          "fb": "Totally fair to ask. Some places, like Illinois, require employers to tell you when AI analyzes video interviews."
        },
        {
          "t": "Leave the interview.",
          "hp": -30,
          "c": -6,
          "fb": "Understandable. Also the end of this application."
        }
      ]
    },
    {
      "q": "Before we continue: what are your salary expectations?",
      "o": [
        {
          "t": "\"Whatever you think is fair.\"",
          "hp": -15,
          "c": -4,
          "fb": "Generous of you. Also a fast way to get offered the bottom of the range."
        },
        {
          "t": "Name a number you picked on the drive over.",
          "hp": -5,
          "c": -2,
          "fb": "A number with no research behind it can anchor you too low, or price you out."
        },
        {
          "t": "Ask for the role's budgeted range, then share a researched range that fits.",
          "hp": 60,
          "c": 8,
          "best": true,
          "fb": "You learn their number and show you've done your homework. Asking about the range is completely normal."
        },
        {
          "t": "\"Higher than the frame rate on this video call.\"",
          "hp": 10,
          "c": 2,
          "fb": "Points for wit. Interviewer.exe logged your answer as \"$24.\""
        }
      ]
    },
    {
      "q": "Tell me about yourself. You have 30 seconds. Begin.",
      "o": [
        {
          "t": "Start with kindergarten and work forward chronologically.",
          "hp": -10,
          "c": -5,
          "fb": "Interviewer.exe timed out at age 9."
        },
        {
          "t": "Who I am now, what I've done that fits this role, and why I want it next.",
          "hp": 60,
          "c": 8,
          "best": true,
          "fb": "Present, past, future. Tight and relevant. Works on bots and humans."
        },
        {
          "t": "\"It's all on my résumé.\"",
          "hp": -20,
          "c": -5,
          "fb": "Technically true. Strategically fatal."
        },
        {
          "t": "Stare into the camera until it speaks first.",
          "hp": 5,
          "c": -2,
          "fb": "The AI also stared. It lasted four minutes. Nobody won."
        }
      ]
    },
    {
      "q": "Describe yourself in three words, using only emojis.",
      "emoji": true,
      "o": [
        {
          "t": "🎯 🚀 💡",
          "hp": 40,
          "c": 4,
          "best": true,
          "fb": "The AI scored this 87%. Nobody knows why. Honestly, nobody knows why for any of them."
        },
        {
          "t": "😐 ☕ 💻",
          "hp": 25,
          "c": 2,
          "fb": "Relatable. The algorithm flagged it as \"honest,\" which is apparently a risk factor."
        },
        {
          "t": "🔥 🤝 📈",
          "hp": 30,
          "c": 3,
          "fb": "Read as \"growth-minded collaborator.\" Or possibly \"arsonist with a sales quota.\""
        },
        {
          "t": "🤖 ❤️ 😎",
          "hp": 20,
          "c": 2,
          "fb": "The AI thought you were flirting with it. Awkward for everyone."
        }
      ]
    },
    {
      "q": "Tell me about a time you failed.",
      "o": [
        {
          "t": "\"My biggest weakness is that I work too hard.\"",
          "hp": -15,
          "c": -4,
          "fb": "Every interviewer, human or bot, has heard this ten thousand times."
        },
        {
          "t": "\"I've honestly never failed.\"",
          "hp": -25,
          "c": -6,
          "fb": "Bold claim. The AI marked you as \"possibly a robot.\" Takes one to know one."
        },
        {
          "t": "A real, specific miss, what I learned, and what I do differently now.",
          "hp": 60,
          "c": 8,
          "best": true,
          "fb": "Ownership plus growth. That's the whole point of the question."
        },
        {
          "t": "A long story about how it was my old manager's fault.",
          "hp": -20,
          "c": -5,
          "fb": "Blame reads loud and clear, even through a webcam."
        }
      ]
    },
    {
      "q": "Do you have any questions for us?",
      "o": [
        {
          "t": "\"Nope, I'm good!\"",
          "hp": -15,
          "c": -3,
          "fb": "Missed chance. This is where you interview them."
        },
        {
          "t": "\"What does success look like in the first 90 days?\"",
          "hp": 60,
          "c": 8,
          "best": true,
          "fb": "Shows you're already picturing the job. Hiring managers love this one."
        },
        {
          "t": "\"How soon can I take vacation?\"",
          "hp": -10,
          "c": -2,
          "fb": "Valid question. Wrong round."
        },
        {
          "t": "\"Am I talking to you, or is there another AI behind you?\"",
          "hp": 20,
          "c": 3,
          "fb": "The AI paused for 11 seconds. Points for courage."
        }
      ]
    }
  ],
  "circus": [
    {
      "q": "This \"entry-level\" posting has one line that should make you pause. Which one?",
      "o": [
        {
          "t": "\"Salary range: $55,000–$65,000\"",
          "hp": -10,
          "fb": "That's a green flag. A posted range saves everyone time."
        },
        {
          "t": "\"Requires 5+ years of experience\"",
          "hp": 50,
          "best": true,
          "fb": "Entry-level with five years required? Ask what \"entry-level\" means to them. The answer tells you how realistic the role is."
        },
        {
          "t": "\"Mentorship program for new hires\"",
          "hp": -10,
          "fb": "Generally a good sign. Ask for an example in the interview."
        },
        {
          "t": "\"Hybrid, 2 days in office\"",
          "hp": -5,
          "fb": "Neutral. Just make sure the schedule works for you."
        }
      ]
    },
    {
      "q": "An unpaid \"take-home test\" asks you to build a full 3-month marketing campaign. What is this?",
      "o": [
        {
          "t": "A normal part of every hiring process",
          "hp": -10,
          "fb": "Short skills tests are common. A full campaign is a project."
        },
        {
          "t": "Possibly free consulting. Ask to scope it down or be paid for it.",
          "hp": 50,
          "best": true,
          "fb": "A good assignment takes an hour or two and tests one skill. Anything bigger deserves a conversation."
        },
        {
          "t": "A great chance to show off, so do all of it",
          "hp": 5,
          "fb": "Your enthusiasm is real. So is your time. Protect it."
        },
        {
          "t": "A sign they really like you",
          "hp": -5,
          "fb": "Maybe. Or they really like free work."
        }
      ]
    },
    {
      "q": "The same job has been reposted every month for a year. What could that mean?",
      "o": [
        {
          "t": "High turnover in the role",
          "hp": 20,
          "fb": "Possible. But not the only answer."
        },
        {
          "t": "A \"ghost job\" that isn't actively being filled",
          "hp": 20,
          "fb": "Possible. But not the only answer."
        },
        {
          "t": "They can't find the right fit",
          "hp": 20,
          "fb": "Possible. But not the only answer."
        },
        {
          "t": "Any of these. Ask about it directly.",
          "hp": 50,
          "best": true,
          "fb": "You can't tell from the outside. Ask how long the role has been open and why. The answer tells you a lot."
        }
      ]
    },
    {
      "q": "Which line in a job posting is the biggest red flag?",
      "o": [
        {
          "t": "\"Clear responsibilities and reporting structure\"",
          "hp": -10,
          "fb": "That's a green flag. Clarity is a gift."
        },
        {
          "t": "\"Must be available 24/7\"",
          "hp": 50,
          "best": true,
          "fb": "Nobody is available 24/7. A posting that asks for it is telling you how the job will feel."
        },
        {
          "t": "\"Salary range: $70,000–$85,000\"",
          "hp": -10,
          "fb": "Green flag. Transparency saves everyone time."
        },
        {
          "t": "\"Opportunities for growth and mentorship\"",
          "hp": -10,
          "fb": "Generally a good sign. Ask for an example in the interview."
        }
      ]
    },
    {
      "q": "\"We're not a company, we're a family!\" What should you ask about?",
      "o": [
        {
          "t": "Whether they host Thanksgiving",
          "hp": 5,
          "fb": "Fun question. Not the useful one."
        },
        {
          "t": "Work hours, boundaries, and how after-hours requests are handled",
          "hp": 50,
          "best": true,
          "fb": "\"Family\" can mean warmth, or it can mean blurry boundaries. Ask how it plays out day to day."
        },
        {
          "t": "Nothing, it's obviously a great sign",
          "hp": -10,
          "fb": "Could be. Could also be code. Worth a follow-up question."
        },
        {
          "t": "Whether you get an allowance",
          "hp": 5,
          "fb": "Ha. Ask about the salary range instead."
        }
      ]
    },
    {
      "q": "Which of these is a GREEN flag in a hiring process?",
      "o": [
        {
          "t": "Seven interview rounds for an entry-level role",
          "hp": -10,
          "fb": "That's a marathon, not a process."
        },
        {
          "t": "\"We'll get back to you soon\" with no date",
          "hp": -5,
          "fb": "\"Soon\" is doing a lot of work there."
        },
        {
          "t": "Interview steps and timeline shared up front",
          "hp": 50,
          "best": true,
          "fb": "When a company tells you the process, they respect your time. That usually shows up in the job too."
        },
        {
          "t": "The recruiter's email bounces",
          "hp": -10,
          "fb": "Spooky. Very on-brand for this podcast."
        }
      ]
    }
  ],
  "recruiter": {
    "suspects": [],
    "offer": []
  }
};
