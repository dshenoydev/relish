const leanConfig = {
  slug: "lean",
  name: "Lean Out & Feel Light",
  shortName: "Lean Out",
  eyebrow: "Goal Track · 01 of 03",
  hed: "Lean out.\nFeel light.",
  dek: "Fat loss without starving, crashing, or hating breakfast. A protocol you can repeat for ten years — not ten weeks.",
  tape: "Most diets fail because they're punishing. The ones that work, you barely notice you're on.",
  accent: {
    primary: "#c25a38",
    soft: "#f5dcd1",
    deep: "#7a2e1a",
    ink: "#1a1a17"
  },
  logoMark: "pom",
  heroPhoto: "Bowl of grain salad · roasted veg, herbed yogurt",
  guideTitle: "The protocol, in six honest steps.",
  guideDek: "No 'metabolism reset.' No 21-day juice cleanse. This is the version that actually works for adults with jobs and lives.",
  steps: [
    {
      n: "01",
      title: "Calculate your real maintenance — not a guess.",
      body: "Most people undereat and over-track. Your true maintenance calories — what you need to eat to stay exactly the same weight — is the floor from which every other number is built. Get this wrong and the rest of the math fails quietly.",
      photo: "Notebook, pen, kitchen scale",
      bullets: [
        "Use a real TDEE calculator (we link a vetted one in Resources)",
        "Track honestly for 10 days at that number, weigh weekly",
        "Adjust by ±100 cal until your weight is genuinely stable"
      ]
    },
    {
      n: "02",
      title: "Set a moderate deficit — 10 to 20%.",
      body: "Aggressive cuts work for two weeks and fail for six months. A 10–20% deficit feels almost like nothing, and that's the point — you can sustain it through holidays, work trips, sick weeks, and the rest of your actual life.",
      photo: "Two plates · same food, smaller portion"
    },
    {
      n: "03",
      title: "Protein is the floor, not the ceiling.",
      body: "In a deficit, protein keeps your muscle and your sanity. Aim for 1.6–2.2 g per kilogram of bodyweight — anything less and you're losing lean tissue along with the fat, which is a worse body composition than where you started.",
      photo: "Cottage cheese, eggs, salmon — three meals' worth"
    },
    {
      n: "04",
      title: "Eat more fiber than you think you need.",
      body: "30+ grams a day. Fiber is what makes a smaller plate feel like enough — it slows digestion, stabilizes blood sugar, and feeds the bacteria that govern half your hunger signals. It's the single most underrated lever for sustainable fat loss.",
      photo: "Lentils, oats, berries, leafy greens"
    },
    {
      n: "05",
      title: "Sleep is half the work. Genuinely.",
      body: "Under-sleeping while in a deficit reliably wrecks the deficit. Hunger hormones spike, training quality tanks, decision-making collapses by 9 PM. If you can't fix sleep this season, postpone the cut — that's the honest advice.",
      photo: "Bedside · book, water, no phone"
    },
    {
      n: "06",
      title: "Plan the bad weeks before they happen.",
      body: "There will be a week where everything goes sideways — travel, illness, family. Decide *now* what your fallback is. The plan isn't 'don't have bad weeks.' The plan is 'have a script for them so they don't become bad months.'",
      photo: "Calendar marked with rest week"
    }
  ],
  coaching: {
    expertName: "Mira Solanki",
    expertRole: "MS, RD · 9 yrs · body recomp specialist",
    expertLine: "I work with adults who have tried, lost, regained, and are tired of the cycle.",
    expertHref: "/creator",
    price: "$320/mo"
  },
  articles: [
    { tag: "Foundations", title: "Why 'eat less, move more' isn't wrong — it's just useless.", read: 9, ev: 4, photo: "Article hero · scale on tile floor" },
    { tag: "Myth-busted", title: "The metabolism doesn't 'crash.' Here's what actually happens.", read: 7, ev: 5, photo: "Article hero · candle going out" },
    { tag: "Nutrition", title: "Hunger management without willpower — fiber, protein, sleep.", read: 11, ev: 5, photo: "Article hero · oats, berries, yogurt" }
  ],
  resources: [
    { title: "TDEE calculator (vetted)", body: "The one calorie calculator we trust. Built by a research group, not an app studio.", cta: "Open the calculator" },
    { title: "Sample 7-day meal plan", body: "Real food, real portions, real protein. Editable for vegetarian, gluten-free, halal, kosher.", cta: "Download the PDF" },
    { title: "Grocery list generator", body: "Pick what you'll cook this week, get the list. Sorted by aisle, not alphabetical.", cta: "Try the tool" },
    { title: "Hunger journal template", body: "Print-friendly. The kind of thing your doctor will actually read in 3 minutes.", cta: "Print the template" }
  ]
};

export default leanConfig;
