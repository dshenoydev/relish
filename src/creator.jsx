// Relish — Creator Profile page
//
// One layout, two personalities. Each creator carries a `theme` (a handful
// of CSS variables) and a `motifs` set whose icons are pulled straight from
// what the bio actually says — a chia seed, a reformer spring, ghee for the
// bubbly dietitian; a barbell, a research paper, a rice bowl for the serious
// strength coach. No generic ornaments. Switch personas in the Tweaks panel.

import { useState, useEffect, createContext, useContext } from 'react';
import { RelishLogo, RelishStamp } from './logo';
import { useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakToggle } from './tweaks-panel';

/* ── Motif icons (simple, single-color, bio-derived) ──────────────────── */

function Motif({ name, className = "" }) {
  const cls = "motif " + className;
  switch (name) {
    case "seed": // chia seeds
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <g className="motif-fill">
            <ellipse cx="9" cy="14" rx="2.8" ry="4.6" transform="rotate(-32 9 14)" />
            <ellipse cx="16" cy="9" rx="2.2" ry="3.7" transform="rotate(22 16 9)" />
          </g>
        </svg>
      );
    case "sprig": // greens / plant species
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path className="motif-stroke" d="M12 21 V 8" />
          <path className="motif-fill" d="M12 14.5 C 7 14.5 5.5 9 5.5 9 C 5.5 9 11 9 12 14.5 Z" />
          <path className="motif-fill" d="M12 11 C 17 11 18.5 5.5 18.5 5.5 C 18.5 5.5 13 5.5 12 11 Z" />
        </svg>
      );
    case "bloom": // hormones / bubbly
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <g className="motif-fill" opacity="0.55">
            <circle cx="12" cy="5" r="3.3" />
            <circle cx="12" cy="19" r="3.3" />
            <circle cx="5" cy="12" r="3.3" />
            <circle cx="19" cy="12" r="3.3" />
          </g>
          <circle className="motif-fill" cx="12" cy="12" r="3" />
        </svg>
      );
    case "droplet": // ghee / dairy fat
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path className="motif-fill" d="M12 3 C 12 3 5 11 5 15 a7 7 0 0 0 14 0 C 19 11 12 3 12 3 Z" />
        </svg>
      );
    case "spring": // pilates reformer spring
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path className="motif-stroke" d="M2 12 h3 M19 12 h3 M5 12 q1.5 -5 3 0 t3 0 t3 0" />
        </svg>
      );
    case "spark": // verified / sparkle
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path className="motif-fill" d="M12 2 L 14 10 L 22 12 L 14 14 L 12 22 L 10 14 L 2 12 L 10 10 Z" />
        </svg>
      );
    case "barbell": // strength
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <g className="motif-stroke">
            <line x1="2.5" y1="12" x2="21.5" y2="12" />
            <rect x="4.5" y="8" width="3" height="8" rx="1" />
            <rect x="16.5" y="8" width="3" height="8" rx="1" />
            <rect x="2" y="9.5" width="2" height="5" rx="0.8" />
            <rect x="20" y="9.5" width="2" height="5" rx="0.8" />
          </g>
        </svg>
      );
    case "paper": // research papers
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <g className="motif-stroke">
            <rect x="5" y="3" width="14" height="18" rx="1.5" />
            <line x1="8" y1="8" x2="16" y2="8" />
            <line x1="8" y1="12" x2="16" y2="12" />
            <line x1="8" y1="16" x2="13" y2="16" />
          </g>
        </svg>
      );
    case "bowl": // too much rice / fueling
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <g className="motif-fill"><ellipse cx="9" cy="8" rx="1" ry="1.9" /><ellipse cx="12" cy="7" rx="1" ry="1.9" /><ellipse cx="15" cy="8" rx="1" ry="1.9" /></g>
          <path className="motif-stroke" d="M3.5 11 h17 a8.5 8.5 0 0 1 -17 0 Z" />
        </svg>
      );
    case "plus": // clinical / precise
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path className="motif-stroke" d="M12 4 V 20 M4 12 H 20" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Creators ─────────────────────────────────────────────────────── */

const CREATORS = {
  anjali: {
    name: "Anjali Mehra",
    short: "Anjali",
    pronouns: "she / her",
    eyebrow_no: "No. 03",
    philosophy: "Strong, soft, and slow on purpose. Wellness isn't a punishment — it's how I get to feel like myself again.",
    bio_long: [
      "I'm a registered dietitian, a recovering perfectionist, and the daughter of a mom who fed me dal and ghee while sneaking chia seeds in before chia seeds were a thing. My practice lives in that exact intersection — South Asian whole foods, hormone health, and the part of nutrition that's quietly about feeling like yourself in your own body.",
      "Most of my one-on-one clients are women in their late 20s to early 40s navigating PCOS, gut stuff, post-pill recovery, or the slow creep of 'I don't feel quite right and I've been told it's nothing.' We're not building a six-pack — we're rebuilding the inside.",
      "If you came from a Pilates class, a Reformer studio, or a yoga teacher who keeps mentioning the gut–brain axis — yes, welcome. We'll cook a lot. We'll cite a lot. And we'll absolutely not make you give up cheese.",
    ],
    specialties: [
      { label: "Hormone health", motif: "bloom" },
      { label: "Gut & inflammation", motif: "sprig" },
      { label: "South Asian whole foods", motif: "droplet" },
      { label: "Pilates fueling", motif: "spring" },
      { label: "PCOS", motif: "seed" },
    ],
    credentials: [
      { k: "MS, RD", w: "Columbia, 2019 · Registered Dietitian" },
      { k: "Functional Nutrition", w: "IFNCP, since 2021" },
      { k: "200 hr Yoga · Pilates Mat", w: "Practitioner since 2017" },
      { k: "Featured in", w: "Cup of Jo, mindbodygreen, Vogue India" },
    ],
    stats: [
      { n: "23", l: "articles for Relish" },
      { n: "6", l: "years private practice" },
      { n: "8", l: "active 1:1 clients" },
      { n: "0", l: "supplements sold" },
    ],
    contact_city: "Brooklyn, NY",
    available: 2,
    rate: "$380",
    program_len: "12 weeks",
    sign: "— A.",
    sign_note: "With love, every paragraph.",
    coaching_blurb: "Twelve-week individualized programs grounded in your real life — your kitchen, your cycle, your reformer schedule. No copy-paste templates, no app subscription. You get me, a real nutrition plan, and weekly check-ins.",
    coaching_list: [
      "Initial 90-minute intake call",
      "Weekly written check-ins + a monthly call",
      "Bloodwork + hormone panel review (you bring it, I read it)",
      "Direct text access during your week, with kindness",
    ],
    theme: "anjali",
    motifs: {
      eyebrow: "bloom",
      verified: "spark",
      sign: "bloom",
      coaching: "spring",
      hero: [
        { name: "bloom", cls: "hm-1" },
        { name: "seed", cls: "hm-2" },
        { name: "spring", cls: "hm-3 faded" },
        { name: "sprig", cls: "hm-4" },
      ],
    },
  },
  marcus: {
    name: "Marcus Okonkwo",
    short: "Marcus",
    pronouns: "he / him",
    eyebrow_no: "No. 07",
    philosophy: "You can't out-supplement undertraining. The basics are unsexy and they work.",
    bio_long: [
      "I came up as a college strength coach watching genuinely talented athletes wreck their bodies because someone on YouTube told them creatine was a steroid and cottage cheese was for grandmas. Eight years and a master's in sports nutrition later, that's still the work — translating actual research into something a 21-year-old can do on a Tuesday between practice and class.",
      "I don't sell programs. I don't sell supplements. I take a handful of one-on-one coaching clients each season, write here when I have something to say that hasn't already been said better, and the rest of the time I'm in the gym, cooking too much rice, or reading the kind of research papers I made fun of in undergrad.",
      "If you find something on this page useful, take it. If you find something you disagree with — and you've actually read the citations — send me an email. That's how this stays honest.",
    ],
    specialties: [
      { label: "Strength nutrition", motif: "barbell" },
      { label: "Athlete fueling", motif: "bowl" },
      { label: "Body recomposition", motif: "plus" },
      { label: "Evidence review", motif: "paper" },
    ],
    credentials: [
      { k: "MS, Sports Nutrition", w: "University of Texas, 2018" },
      { k: "CSCS", w: "NSCA, since 2014" },
      { k: "Former Strength Coach", w: "Texas Athletics, 8 yrs" },
      { k: "Published", w: "JSCR, Sports Med (3 papers)" },
    ],
    stats: [
      { n: "47", l: "articles for Relish" },
      { n: "14", l: "years coaching" },
      { n: "12", l: "active 1:1 clients" },
      { n: "0", l: "supplements sold" },
    ],
    contact_city: "Austin, TX",
    available: 3,
    rate: "$420",
    program_len: "12 weeks",
    sign: "— M.",
    sign_note: "Written, edited, fact-checked.",
    coaching_blurb: "Twelve-week individualized programs. No copy-paste templates, no app subscription, no upsells. You get Marcus, a real nutrition plan, and weekly check-ins.",
    coaching_list: [
      "Initial 90-minute intake call",
      "Weekly written check-ins + monthly call",
      "Bloodwork review (you bring it, he reads it)",
      "Direct text access during your training week",
    ],
    theme: "marcus",
    motifs: {
      eyebrow: "plus",
      verified: "plus",
      sign: "plus",
      coaching: "barbell",
      hero: [
        { name: "barbell", cls: "hm-1 faded" },
        { name: "plus", cls: "hm-2 faded" },
        { name: "paper", cls: "hm-3 faded" },
        { name: "bowl", cls: "hm-4 faded" },
      ],
    },
  },
};

const ARTICLES_BY_CREATOR = {
  anjali: [
    { title: "The roti macros that don't match Cronometer (and why that's fine).", tag: "South Asian foods", read: 11, evidence: 4, updated: "Reviewed 1 week ago", desc: "Every macro tracker overestimates roti by ~18%. Here's why, with the actual lab data, and a sane way to log home-cooked Indian meals without losing your mind." },
    { title: "PCOS without the carb panic.", tag: "Hormones", read: 14, evidence: 4, updated: "Reviewed 2 weeks ago", desc: "Cutting all carbs isn't the protocol — and the obsession with it is making symptoms worse. What the actual insulin-resistance research says, gently." },
    { title: "Magnesium glycinate is the only one worth your money. Probably.", tag: "Supplements", read: 6, evidence: 4, updated: "Reviewed 1 month ago", desc: "There are eight forms. Six are marketing. Here's the one most of my clients actually feel a difference from, and the foods that get you there first." },
    { title: "Pilates fueling: a 90-minute reformer class is not a HIIT class.", tag: "Performance", read: 9, evidence: 3, updated: "Reviewed 1 month ago", desc: "If you're under-eating before reformer because 'it's gentle,' you're shaking for a reason. The actual energy demand of mat vs reformer vs lagree." },
    { title: "Ghee is not the enemy. Neither is your aunty.", tag: "South Asian foods", read: 8, evidence: 4, updated: "Reviewed 2 months ago", desc: "The 'saturated fat = heart attack' framing has aged poorly. A look at the dairy-fat literature, the cultural context, and the right way to use ghee daily." },
    { title: "Gut health is not a juice cleanse.", tag: "Gut health", read: 12, evidence: 5, updated: "Reviewed 3 months ago", desc: "Your microbiome doesn't need a $90 powder. It needs about 30 plant species a week, fermented things, and sleep. The 30-plants rule, explained." },
  ],
  marcus: [
    { title: "Protein, finally explained without the bro-science.", tag: "Nutrition · Foundations", read: 14, evidence: 5, updated: "Reviewed 11 days ago", desc: "How much you actually need, by bodyweight. Why the 'window' isn't real. What changes after 40. And the timing thing that does matter." },
    { title: "Creatine is the most-studied supplement on earth. So why is the discourse this bad?", tag: "Supplements", read: 9, evidence: 5, updated: "Reviewed 1 month ago", desc: "A walk through 30 years of meta-analyses. Who it helps, by how much. Why the 'water weight' criticism is half-right and lazy." },
    { title: "Carbs and lifters: a peace treaty.", tag: "Performance", read: 11, evidence: 4, updated: "Reviewed 2 months ago", desc: "If you train hard and eat low-carb, you are probably leaving 15% of your sessions on the table. Here's the math, and a non-dogmatic protocol." },
    { title: "The deload week of eating: why a maintenance phase isn't 'failing.'", tag: "Body recomposition", read: 8, evidence: 4, updated: "Reviewed 2 months ago", desc: "Reverse dieting overpromises. Real maintenance does the actual work — metabolic, hormonal, and frankly psychological." },
    { title: "Magnesium: which form, when, and when to just eat the spinach.", tag: "Supplements", read: 7, evidence: 3, updated: "Reviewed 3 months ago", desc: "Six forms of magnesium walk into a Whole Foods. Only two of them are for you. The others, probably nobody. Here's the breakdown." },
    { title: "Sleep is a nutrition variable. I'm sorry.", tag: "Performance · Foundations", read: 12, evidence: 5, updated: "Reviewed 4 months ago", desc: "If you're sleeping six hours, every gram of protein you eat is doing 70% of its job. The data on this is not subtle." },
  ],
};

/* ── Themes — a few CSS variables per persona ─────────────────────────── */

const THEMES = {
  anjali: {
    primary: "#7E4B6B", primaryDeep: "#573049", accent: "#E27396", accentSoft: "#F3B6C7",
    page: "#FCF4F1", band: "#F8E9EE", bandSoft: "#FCF1F1", surface: "rgba(255,255,255,0.66)",
    coachingBg: "#573049", coachingGlow: "rgba(226,115,150,0.42)", chipActive: "#7E4B6B", onDark: "#FBEFF3",
    line: "rgba(87,48,73,0.16)", lineSoft: "rgba(87,48,73,0.10)", tint: "rgba(126,75,107,0.07)",
    nameStyle: "italic", nameWeight: 400, cardRadius: "26px", cardRadiusLg: "32px", btnRadius: "999px",
  },
  marcus: {
    primary: "#2E2A2B", primaryDeep: "#1A1714", accent: "#8C6B4F", accentSoft: "#C9B6A3",
    page: "#F7F5F0", band: "#EEEAE1", bandSoft: "#F3F0E8", surface: "rgba(255,255,255,0.72)",
    coachingBg: "#1A1714", coachingGlow: "rgba(140,107,79,0.30)", chipActive: "#2E2A2B", onDark: "#F3F0E8",
    line: "rgba(26,23,20,0.14)", lineSoft: "rgba(26,23,20,0.08)", tint: "rgba(46,42,43,0.06)",
    nameStyle: "normal", nameWeight: 400, cardRadius: "6px", cardRadiusLg: "8px", btnRadius: "6px",
  },
};

function applyTheme(t) {
  const r = document.documentElement.style;
  r.setProperty("--c-primary", t.primary);
  r.setProperty("--c-primary-deep", t.primaryDeep);
  r.setProperty("--c-accent", t.accent);
  r.setProperty("--c-accent-soft", t.accentSoft);
  r.setProperty("--c-page", t.page);
  r.setProperty("--c-band", t.band);
  r.setProperty("--c-band-soft", t.bandSoft);
  r.setProperty("--c-surface", t.surface);
  r.setProperty("--c-coaching-bg", t.coachingBg);
  r.setProperty("--c-coaching-glow", t.coachingGlow);
  r.setProperty("--c-chip-active", t.chipActive);
  r.setProperty("--c-on-dark", t.onDark);
  r.setProperty("--c-line", t.line);
  r.setProperty("--c-line-soft", t.lineSoft);
  r.setProperty("--c-tint", t.tint);
  r.setProperty("--c-name-style", t.nameStyle);
  r.setProperty("--c-name-weight", String(t.nameWeight));
  r.setProperty("--c-card-radius", t.cardRadius);
  r.setProperty("--c-card-radius-lg", t.cardRadiusLg);
  r.setProperty("--c-btn-radius", t.btnRadius);
}

/* ── Context ─────────────────────────────────────────────────────────── */

const CreatorContext = createContext(null);
const useCreator = () => useContext(CreatorContext);

/* small helper: an eyebrow with a leading bio motif */
function Eyebrow({ children, className = "eyebrow" }) {
  const { profile } = useCreator();
  return (
    <div className={className}>
      <Motif name={profile.motifs.eyebrow} className="eyebrow-motif" />
      {children}
    </div>
  );
}

/* ── Sub-nav ─────────────────────────────────────────────────────────── */

function ProfileNav() {
  const { profile } = useCreator();
  return (
    <nav className="nav">
      <div className="shell nav-row">
        <a href="/" className="brand-link" aria-label="Relish — home">
          <RelishLogo variant="pom" size={0.78} />
        </a>
        <div className="profile-crumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#experts">Experts</a>
          <span>/</span>
          <b>{profile.short}</b>
        </div>
        <button className="nav-cta">Book {profile.short} →</button>
      </div>
    </nav>
  );
}

/* ── Header ─────────────────────────────────────────────────────────── */

function ProfileHeader() {
  const { profile } = useCreator();
  return (
    <section className="profile-hero">
      <div className="hero-motifs" aria-hidden="true">
        {profile.motifs.hero.map((m, i) => (
          <Motif key={i} name={m.name} className={"hero-motif " + m.cls} />
        ))}
      </div>
      <div className="shell profile-hero-grid">
        <div>
          <Eyebrow>Featured Contributor · {profile.eyebrow_no}</Eyebrow>
          <h1 className="profile-name">{profile.name}</h1>
          <div className="profile-meta">
            <span className="verified">
              <Motif name={profile.motifs.verified} className="" />
              Verified by Relish editors
            </span>
            <span className="mono profile-loc">{profile.pronouns} · {profile.contact_city}</span>
          </div>
          <p className="profile-phil">
            <span className="phil-quote">"</span>{profile.philosophy}<span className="phil-quote">"</span>
          </p>
          <div className="profile-tags">
            {profile.specialties.map((s) => (
              <span key={s.label} className="spec-tag">
                <Motif name={s.motif} className="" />
                {s.label}
              </span>
            ))}
          </div>
          <div className="profile-ctas">
            <a href="#book" className="btn btn-creator btn-arrow">Work with {profile.short}</a>
            <a href="#articles" className="btn btn-creator-ghost btn-arrow">Read the articles</a>
          </div>
        </div>
        <aside className="profile-aside">
          <div className="profile-ph ph"><span>Portrait · 4:5</span></div>
          <div className="profile-stats">
            {profile.stats.map((s) => (
              <div key={s.l}>
                <b>{s.n}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ── Credentials strip ─────────────────────────────────────────────── */

function Credentials() {
  const { profile } = useCreator();
  return (
    <section className="creds-section tight">
      <div className="shell">
        <div className="creds-grid">
          <div className="creds-h">
            <Eyebrow>Credentials · the boring, important part</Eyebrow>
            <h2 className="h-section" style={{ fontSize: "clamp(28px, 3.2vw, 44px)", marginTop: 12 }}>
              What we checked, before {profile.pronouns.split(" / ")[0]} could write here.
            </h2>
          </div>
          <div className="creds-list">
            {profile.credentials.map((c, i) => (
              <div key={i} className="cred">
                <div className="mono cred-num">0{i + 1}</div>
                <div>
                  <div className="serif cred-k">{c.k}</div>
                  <div className="cred-w">{c.w}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About ──────────────────────────────────────────────────────────── */

function About() {
  const { profile } = useCreator();
  return (
    <section className="about-section">
      <div className="shell about-grid">
        <div className="about-left">
          <Eyebrow>About</Eyebrow>
          <h2 className="h-section" style={{ marginTop: 14 }}>In {profile.short}'s own words.</h2>
        </div>
        <div className="about-body">
          {profile.bio_long.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-sign">
            <Motif name={profile.motifs.sign} className="sign-mark" />
            <div>
              <div className="sign-name">{profile.sign}</div>
              <div className="sign-note">{profile.sign_note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Articles ───────────────────────────────────────────────────────── */

function ArticleStars({ n }) {
  return (
    <span className="ev-bar" aria-label={"Evidence " + n + "/5"}>
      {[1, 2, 3, 4, 5].map((i) => <span key={i} className={"ev-pip" + (i <= n ? " on" : "")}></span>)}
    </span>
  );
}

function Articles() {
  const { profile, articles } = useCreator();
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...Array.from(new Set(articles.flatMap((a) => a.tag.split(" · "))))];
  const filtered = filter === "All" ? articles : articles.filter((a) => a.tag.includes(filter));
  return (
    <section id="articles" className="articles-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <Eyebrow>The Work · Published on Relish</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 14 }}>{profile.short}'s articles.</h2>
          </div>
          <div className="article-filters">
            {allTags.map((t) => (
              <button key={t} className={"chip" + (filter === t ? " on" : "")} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="articles-list">
          {filtered.map((a, i) => (
            <article key={i} className="article-row">
              <div className="article-num mono">{String(i + 1).padStart(2, "0")}</div>
              <div className="article-main">
                <div className="article-tag mono">{a.tag.toUpperCase()}</div>
                <h3 className="article-title">{a.title}</h3>
                <p className="article-desc">{a.desc}</p>
              </div>
              <div className="article-meta">
                <div className="article-meta-row">
                  <span className="mono">EVIDENCE</span>
                  <ArticleStars n={a.evidence} />
                </div>
                <div className="article-meta-row">
                  <span className="mono">READ</span>
                  <span>{a.read} min</span>
                </div>
                <div className="article-updated">{a.updated}</div>
              </div>
              <button className="article-arrow" aria-label="Open article">→</button>
            </article>
          ))}
          {filtered.length === 0 && <div className="empty">No articles in this tag yet.</div>}
        </div>
      </div>
    </section>
  );
}

/* ── Coaching CTA ───────────────────────────────────────────────────── */

function Coaching() {
  const { profile } = useCreator();
  return (
    <section id="book" className="coaching-section">
      <div className="shell">
        <div className="coaching-card">
          <Motif name={profile.motifs.coaching} className="coaching-motif" />
          <div className="coaching-left">
            <div className="coaching-eyebrow eyebrow">
              <Motif name={profile.motifs.eyebrow} className="eyebrow-motif" />
              Direct, 1:1 · {profile.available} slots open this quarter
            </div>
            <h2 className="coaching-h" style={{ fontSize: "clamp(34px, 4vw, 58px)", lineHeight: 1.02, margin: "14px 0 18px" }}>
              Work with {profile.short}.
            </h2>
            <p className="coaching-p" style={{ fontSize: 17, lineHeight: 1.55, maxWidth: "46ch", margin: 0 }}>
              {profile.coaching_blurb}
            </p>
            <ul className="coaching-list">
              {profile.coaching_list.map((c, i) => (
                <li key={i}><Motif name="plus" className="li-mark" />{c}</li>
              ))}
            </ul>
          </div>
          <div className="coaching-right">
            <div className="coaching-price-card">
              <div className="price-from">FROM</div>
              <div className="price">{profile.rate}<span className="price-period">/mo</span></div>
              <div className="price-note">{profile.program_len} minimum · sliding scale available</div>
              <a href="#" className="btn btn-block btn-arrow">Apply to work with {profile.short}</a>
              <div className="price-fine">APPLICATIONS REVIEWED WEEKLY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Transparency disclosure ───────────────────────────────────────── */

function Transparency() {
  const { profile } = useCreator();
  const she = profile.pronouns.split(" / ")[0];
  const her = she === "she" ? "her" : "his";
  return (
    <section className="transp-section">
      <div className="shell">
        <div className="transp-card">
          <div className="transp-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" fill="var(--c-tint)" />
              <path d="M10 16l4 4 8-9" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="transp-body">
            <Eyebrow>How this works · plainly</Eyebrow>
            <h3 className="transp-h">{profile.short} has a featured partnership with Relish.</h3>
            <p>
              In plain English: {profile.short} pays a quarterly fee to have a featured profile here. <b>That doesn't change the editorial standard.</b> Every article on this page went through the same Relish fact-check process as any other piece on the site — including the ones written by our unpaid contributors and our editor-in-chief.
            </p>
            <p>
              If a piece of {her} content is sponsored by a brand, you'll see a clear <span className="inline-tag">Sponsored</span> label at the top — never buried, never gray-text. If {she}'s recommending a supplement {she} has a financial relationship with, that's disclosed in the article itself, not in a tooltip.
            </p>
            <div className="transp-links">
              <a href="#">Read our editorial policy →</a>
              <a href="#">Read our sponsored-content policy →</a>
              <a href="#">How contributor partnerships work →</a>
            </div>
          </div>
        </div>

        <div className="editorial-badge">
          <div className="editorial-mark">
            <Motif name={profile.motifs.verified} className="" />
          </div>
          <div>
            <div className="serif" style={{ fontSize: 22, lineHeight: 1.15, color: "var(--c-primary-deep)" }}>Reviewed by Relish editors</div>
            <div style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 4 }}>
              Even paid contributors don't publish unchecked. Our editor-in-chief and at least one outside reviewer sign off on every article before it goes live. <a href="#">See the policy.</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────── */

function ProfileFooter() {
  const { profile } = useCreator();
  const she = profile.pronouns.split(" / ")[0];
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
          <div className="footer-brand">
            <RelishStamp variant="cluster" size={1} />
            <p style={{ color: "rgba(244,237,221,0.7)", marginTop: 22, maxWidth: 38 + "ch" }}>
              Whole foods, honestly. Run by an Indian woman and a small collective of contributors who actually read the studies.
            </p>
            <a href="/" className="btn btn-ghost btn-arrow" style={{ marginTop: 28, borderColor: "rgba(244,237,221,0.25)", color: "var(--cream-soft)" }}>
              Back to Relish
            </a>
          </div>
          <div className="footer-col">
            <div className="mono footer-h">For readers</div>
            <ul>
              <li><a href="/#experts">All contributors</a></li>
              <li><a href="/#diets">Diets compared</a></li>
              <li><a href="/#myths">Myth-busted</a></li>
              <li><a href="#">Tools & calculators</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="mono footer-h">For {profile.short}</div>
            <ul>
              <li><a href="#book">Coaching</a></li>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#">Speaking</a></li>
              <li><a href="#">Email {profile.short}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <b>This isn't medical advice.</b> {profile.short} is a great nutritionist. {she === "she" ? "She is" : "He is"} not your doctor and doesn't have your bloodwork. Anything specific to your body — especially if you're navigating a real medical situation — should involve someone who can actually see you.
          </div>
          <div className="footer-fine">
            <span>© 2026 Relish Media, LLC</span>
            <span>Page last reviewed · 4 days ago</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── App ────────────────────────────────────────────────────────────── */

const PROFILE_TWEAKS = {
  "creator": "anjali",
  "showTransparency": true,
  "showCoaching": true
};

export default function ProfileApp() {
  const [t, setTweak] = useTweaks(PROFILE_TWEAKS);
  const creatorKey = CREATORS[t.creator] ? t.creator : "anjali";
  const profile = CREATORS[creatorKey];
  const theme = THEMES[profile.theme];
  const articles = ARTICLES_BY_CREATOR[creatorKey];

  useEffect(() => { applyTheme(theme); }, [theme]);

  return (
    <CreatorContext.Provider value={{ profile, theme, articles }}>
      <div className="creator-page">
        <ProfileNav />
        <main>
          <ProfileHeader />
          <Credentials />
          <About />
          <Articles />
          {t.showCoaching && <Coaching />}
          {t.showTransparency && <Transparency />}
        </main>
        <ProfileFooter />
      </div>

      <TweaksPanel>
        <TweakSection label="Creator" />
        <TweakSelect
          label="Persona"
          value={creatorKey}
          options={[
            { value: "anjali", label: "Anjali · bubbly dietitian" },
            { value: "marcus", label: "Marcus · serious strength coach" },
          ]}
          onChange={(v) => setTweak("creator", v)}
        />
        <TweakSection label="Sections" />
        <TweakToggle label="Show coaching block" value={t.showCoaching} onChange={(v) => setTweak("showCoaching", v)} />
        <TweakToggle label="Show transparency block" value={t.showTransparency} onChange={(v) => setTweak("showTransparency", v)} />
      </TweaksPanel>
    </CreatorContext.Provider>
  );
}
