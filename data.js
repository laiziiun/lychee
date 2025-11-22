/*************************************************************
 * DATA.JS — All content for the portfolio lives here.
 * Edit this file to update:
 *  - Experiences
 *  - Projects
 *  - Skills
 *  - Fun facts
 *************************************************************/

/* -------------------- EXPERIENCE -------------------- */
const experiences = [
    {
      id: "exp-dsta-engr",
      title: "Engineer, Advanced Systems",
      org: "Defence Science and Technology Agency (DSTA)",
      period: "Present",
      location: "Singapore",
      bullets: [
        "Developing, testing, and delivering game-changing engineering solutions.",
        "Bridging technical developments with operational requirements."
      ],
      tags: ["Systems Engineering"]
    },
    {
      id: "exp-hyperganic",
      title: "Algorithmic Engineer, Advanced Projects",
      org: "Hyperganic Technologies AG",
      period: "2021",
      location: "Remote",
      bullets: [
        "Developed voxel-based algorithms for 3D printable designs.",
        "Automated conformal cooling channel optimisation.",
        "Built custom meshing workflows for simulating products."
      ],
      tags: ["Computational Design", "Additive Manfacturing", "Algorithms"]
    },
    {
      id: "exp-astar",
      title: "Intern, Polymer Processing Group",
      org: "A*STAR SIMTech",
      period: "2020",
      location: "Singapore",
      bullets: [
        "Investigated Triply Periodic Minimal Surface structures for radiotherapy bolus customisation.",
        "Fabricated prototypes and tested dose performance."
      ],
      tags: ["Additive Manfacturing", "Algorithms"]
    },
    {
        id: "exp-dsta-intern",
        title: "Intern, Naval Sys",
        org: "DSTA",
        period: "2020",
        location: "Singapore",
        bullets: [
          "ML pipeline for computer vision at sea."
        ],
        tags: ["Machine Learning"]
      },
    {
    id: "exp-spf-intern",
    title: "Intern, Operations Dept",
    org: "Singapore Police Force",
    period: "2017",
    location: "Singapore",
    bullets: [
        "Explored emerging tech and potential applications."
    ],
    tags: []
    }
  ];
  
  /* -------------------- PROJECTS -------------------- */
  const projects = [
    {
      id: "proj-biomass-review",
      title: "Electroreforming of Biomass",
      meta: "B.Engg FYP - Micromachines review",
      categories: ["research"],
      tags: ["Electrochemistry", "Hydrogen"],
      frontDescription:
        "Explored how electrochemistry can convert biomass into hydrogen and chemicals.",
      backDescription:
        "Mapped reaction pathways, analysed system tradeoffs and identified potential for electroreforming lignocellulosic biomass.",
      link: "https://doi.org/10.3390/mi12111405",
      linkLabel: "Read paper ↗"
    },
    {
      id: "proj-hca",
      title: "Volunteer @ HCA",
      meta: "Hospice Care Association Singapore",
      categories: ["people"],
      tags: ["Volunteering"],
      frontDescription:
        "Supported palliative care patients through medical escorting, home cleaning etc.",
      backDescription:
        "Certified mani/pedicurist, featured in Lianhe Zaobao.",
        link: "https://www.zaobao.com.sg/news/singapore/story20211222-1225364?fbclid=IwAR1h56RakVKXLhccQ72Flz2wKBLlGbACEfo_jaGvfELO_gSGAJLZAqzZshA",
      linkLabel: "Read Zaobao article ↗"
    }, 
    {
        id: "proj-mahjong",
        title: "Mahjong Reinforcement Learning",
        meta: "Class - Decision Making Under Uncertainty",
        categories: ["research"],
        tags: ["Game Theory", "Reinforcement Learning"],
        frontDescription:
          "Developed Reward Functions for Mahjong.",
        backDescription:
          "Combined ShangTing reward function with foward search algorithm to create agents to win mahjong games.",
        link: "https://arxiv.org/pdf/2305.04145",
        linkLabel: "Read paper ↗"
        },
    {
        id: "proj-dengue",
        title: "Dengue Forecasting",
        meta: "Class - Machine Learning",
        categories: ["research"],
        tags: ["Big Data", "Machine Learning"],
        frontDescription:
            "Developed ML models for dengue forecasting in Singapore.",
        backDescription:
            "Examined traditional state space models, supervised learning techniques and deep networks using meteorological data and search engine trends.",
        link: "https://arxiv.org/pdf/2407.00332?",
        linkLabel: "Read paper ↗"
        },

    {
        id: "proj-covid",
        title: "Covid 19 Vaccine Acceptance",
        meta: "Class - Data Systems and Management",
        categories: ["research"],
        tags: ["Big Data", "Machine Learning"],
        frontDescription:
            "Explored how socioeconomic status affects Covid19 vaccination rates.",
        backDescription:
            "Correlated Area Deprivation with vaccination rates, and effects on policies on vaccine follow-through rates.",
        link: "https://arxiv.org/pdf/2401.02047",
        linkLabel: "Read paper ↗"
        },
    {
        id: "proj-scdf",
        title: "Vibration Sensor Pipeline for Structural Analysis",
        meta: "SCDF Innovation Challenge 2019",
        categories: ["challenge"],
        tags: ["Sensors", "Machine Learning"],
        frontDescription:
            "Project Objective: improve safety of firefighting by predicting structural collapse.",
        backDescription:
            "Awarded second prize and presented findings at the Singapore Workplace Safety and Health (WSH) Conference.",
        link: "https://www.ntu.edu.sg/mae/news-events/news/detail/-mae-team-emerge-champions-for-scdf-lifesavers'innovation-challenge-2019",
        linkLabel: "See Article ↗"
        },
    {
        id: "proj-smrt",
        title: "Track Damper Monitoring",
        meta: "SMRT Innovation Challenge 2019",
        categories: ["challenge"],
        tags: ["Sensors"],
        frontDescription:
            "Project Objective: inspect dampers under floating concrete tracks.",
        backDescription:
            "Awarded third prize, conducted iterative design and site tests before handover.",
        link: "https://www.ntu.edu.sg/mae/news-events/news/detail/mae-team-rubi-won-third-place-in-smrt-ntu-innovation-challenge-2019",
        linkLabel: "See Article ↗"
        },
    {
        id: "proj-hackasia",
        title: "AI controlled Cooling",
        meta: "Hack.Asia Hackathon 2019",
        categories: ["challenge"],
        tags: ["Machine Learning"],
        frontDescription:
            "Project Objective: optimise flow of coolant in buildings using AI.",
        backDescription:
            "Awarded regional second prize.",
        },

    {
        id: "proj-ptp",
        title: "Peer Tutor",
        meta: "School of MAE PTP",
        categories: ["people"],
        tags: ["Volunteering"],
        frontDescription:
            "Peer tutored for Fluid Mechanics (MA3006) and Physics A (PH1012).",
        backDescription:
            "Lecture video series have amassed over 20,000 views (and counting)!",

        }, 
    {
        id: "proj-ldp",
        title: "President, MAE LDP",
        meta: "School of MAE",
        categories: ["people"],
        tags: ["Volunteering"],
        frontDescription:
            "Lead, organised, executed events for students and wider community.",
        backDescription:
            "Events include: NTU-HP Innovation Challenge, Leadership Speech Series, Community STEM Workshops. Lead ambassadorial teams for Open House, oneNTU Service Week etc.",

        }, 
  ];
  
  /* -------------------- SKILLS -------------------- */
  const skills = {
    "Systems Engineering": {
      short: "Thinking in terms of end-to-end systems, not components.",
      details:
        "Learning to architect, experiment and integrate best-of-breed systems to deliver cohesive capabilities"
    },
    "Algorithmic Design & AM": {
      short: "Using algorithms to explore design spaces humans can't by hand.",
      details:
        "Worked with creative geometries, voxel algorithms, custom meshing, and manufacturability-aware exploration."
    },
    "Data, ML & Experimentation": {
      short: "From lab measurements to ML pipelines at sea.",
      details:
        "Comfortable designing experiments, cleaning data and building models guided by real constraints."
    },
    "Teaching & Communication": {
      short: "Clear explanations enable collaboration.",
      details:
        "Experienced in STEM outreach, technical tutoring, hackathons — translating classroom lessons into solutions and inspiring the next generation."
    }
  };
  
  /* -------------------- FUN FACTS -------------------- */
  const funFacts = [
    "In NTU, my team and I partnered with seven grassroots organisations to bring Arduino, CAD & 3D printing to over 200 children from less privileged backgrounds.",
    "I wrote a Telegram bot to help with scheduling duty personnel. You can find it on Telegram - search up the bot '605 Duty Scheduler' and log on to the demo environment using 'demo'.",
    "You are a miracle, according to statistical probability. Thank you for being here, and I hope you'll have a great day 🥰",
    "I have gotten very into rucking (basically running with a rucksack) - looking for workout buddies!",
    "I served NS as a Security Trooper in 605 SQN - many fond memories, ask me for stories! 🪖",
    "I graduated from National Junior College in 2017. Hope the amazing caifan canteen stall is still there!",
    "Life is unpredictable. Eat desserts first.",
  ];
  
