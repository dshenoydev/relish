import { useState, useEffect } from 'react';
import { RelishLogo, RelishStamp } from './logo';
import { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakToggle } from './tweaks-panel';

const PROFILE = {
  name: "Marcus Okonkwo",
  short: "Marcus",
  pronouns: "he / him",
  philosophy: "You can't out-supplement undertraining. The basics are unsexy and they work.",
  bio_long: [
    "I came up as a college strength coach watching genuinely talented athletes wreck their bodies because someone on YouTube told them creatine was a steroid and cottage cheese was for grandmas. Eight years and a master's in sports nutrition later, that's still the work — translating actual research into something a 21-year-old can actually do on a Tuesday between practice and class.",
    "I don't sell programs. I don't sell supplements. I take a handful of one-on-one coaching clients each season, write here when I have something to say that hasn't already been said better, and the rest of the time I'm in the gym, cooking too much rice, or reading the kind of research papers I made fun of in undergrad.",
    "If you find something on this page useful, take it. If you find something you disagree with — and you've actually read the citations — send me an email. That's how this stays honest.",
  ],
  specialties: ["Strength nutrition", "Athlete fueling", "Body recomposition", "Gut health"],
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
};

const ARTICLES = [
  {
    title: "Protein, finally explained without the bro-science.",
    tag: "Nutrition · Foundations",
    read: 14,
    evidence: 5,
    updated: "Reviewed 11 days ago",
    desc: "How much you actually need, by bodyweight. Why the 'window' isn't real. What changes after 40. And the timing thing that does matter.",
  },
  {
    title: "Creatine is the most-studied supplement on earth. So why is the discourse this bad?",
    tag: "Supplements",
    read: 9,
    evidence: 5,
    updated: "Reviewed 1 month ago",
    desc: "A walk through 30 years of meta-analyses. Who it helps, by how much. Why the 'water weight' criticism is half-right and lazy.",
  },
  {
    title: "Carbs and lifters: a peace treaty.",
    tag: "Performance",
    read: 11,
    evidence: 4,
    updated: "Reviewed 2 months ago",
    desc: "If you train hard and eat low-carb, you are probably leaving 15% of your sessions on the table. Here's the math, and a non-dogmatic protocol.",
  },
  {
    title: "The deload week of eating: why a maintenance phase isn't 'failing.'",
    tag: "Body recomposition",
    read: 8,
    evidence: 4,
    updated: "Reviewed 2 months ago",
    desc: "Reverse dieting overpromises. Real maintenance does the actual work — metabolic, hormonal, and frankly psychological.",
  },
  {
    title: "Magnesium: which form, when, and when to just eat the spinach.",
    tag: "Supplements",
    read: 7,
    evidence: 3,
    updated: "Reviewed 3 months ago",
    desc: "Six forms of magnesium walk into a Whole Foods. Only two of them are for you. The others, probably nobody. Here's the breakdown.",
  },
  {
    title: "Sleep is a nutrition variable. I'm sorry.",
    tag: "Performance · Foundations",
    read: 12,
    evidence: 5,
    updated: "Reviewed 4 months ago",
    desc: "If you're sleeping six hours, every gram of protein you eat is doing 70% of its job. The data on this is not subtle.",
  },
];

function ProfileNav() {
  return (
    <nav className="nav">
      <div className="shell nav-row">
        <a href="/" className="brand-link" aria-label="Relish — home">
          <RelishLogo variant="wedge" size={0.78} />
        </a>
        <div className="profile-crumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#experts">Experts</a>
          <span>/</span>
          <b>{PROFILE.short}</b>
        </div>
        <button className="nav-cta">Book Marcus →</button>
      </div>
    </nav>
  );
}

function ProfileHeader() {
  return (
    <section className="profile-hero">
      <div className="shell profile-hero-grid">
        <div>
          <div className="eyebrow" style={{ color: "var(--terracotta)" }}>Featured Contributor · No. 07</div>
          <h1 className="h-hero profile-name">
            {PROFILE.name}
          </h1>
          <div className="profile-meta">
            <span className="verified" style={{ background: "rgba(31,61,46,0.1)", padding: "6px 12px" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.7 1.5L12 2l.5 2.3L14.5 6 13 8l1.5 2L12.5 11 12 13l-2.3-.5L8 14l-1.7-1.5L4 13l-.5-2.3L1.5 9 3 7 1.5 5 3.5 4 4 2l2.3.5L8 1z" fill="currentColor"/><path d="M5.5 8l2 2 3.5-4" stroke="var(--cream-soft)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
              Verified by Relish editors
            </span>
            <span className="mono profile-loc">{PROFILE.pronouns} · {PROFILE.contact_city}</span>
          </div>
          <p className="serif profile-phil">
            "{PROFILE.philosophy}"
          </p>
          <div className="profile-tags">
            {PROFILE.specialties.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
          <div className="profile-ctas">
            <a href="#book" className="btn btn-primary btn-arrow">Work with Marcus</a>
            <a href="#articles" className="btn btn-ghost btn-arrow">Read the articles</a>
          </div>
        </div>
        <aside className="profile-aside">
          <div className="profile-ph ph"><span>Portrait · 4:5</span></div>
          <div className="profile-stats">
            {PROFILE.stats.map((s) => (
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

function Credentials() {
  return (
    <section className="creds-section tight">
      <div className="shell">
        <div className="creds-grid">
          <div className="creds-h">
            <div className="eyebrow">Credentials · The boring, important part</div>
            <h2 className="h-section" style={{ fontSize: "clamp(28px, 3.2vw, 44px)", marginTop: 12 }}>
              What we checked, before he could write here.
            </h2>
          </div>
          <div className="creds-list">
            {PROFILE.credentials.map((c, i) => (
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

function About() {
  return (
    <section className="about-section">
      <div className="shell about-grid">
        <div className="about-left">
          <div className="eyebrow" style={{ color: "var(--amber-deep)" }}>About</div>
          <h2 className="h-section" style={{ marginTop: 14 }}>In Marcus's own words.</h2>
        </div>
        <div className="about-body">
          {PROFILE.bio_long.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-sign">
            <div className="serif" style={{ fontSize: 40, fontStyle: "italic", color: "var(--forest)" }}>— M.</div>
            <div className="mono" style={{ color: "var(--ink-soft)" }}>Written, edited, fact-checked.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleStars({ n }) {
  return (
    <span className="ev-bar" aria-label={"Evidence " + n + "/5"}>
      {[1,2,3,4,5].map((i) => (
        <span key={i} className={"ev-pip" + (i <= n ? " on" : "")}></span>
      ))}
    </span>
  );
}

function Articles() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Foundations", "Nutrition", "Performance", "Supplements", "Body recomposition"];
  const filtered = filter === "All" ? ARTICLES : ARTICLES.filter((a) => a.tag.includes(filter));
  return (
    <section id="articles" className="articles-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--forest)" }}>The Work · Published on Relish</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>{PROFILE.short}'s articles.</h2>
          </div>
          <div className="article-filters">
            {tags.map((t) => (
              <button
                key={t}
                className={"chip" + (filter === t ? " on" : "")}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="articles-list">
          {filtered.map((a, i) => (
            <article key={i} className="article-row">
              <div className="article-num mono">{String(i + 1).padStart(2, "0")}</div>
              <div className="article-main">
                <div className="article-tag mono">{a.tag.toUpperCase()}</div>
                <h3 className="serif article-title">{a.title}</h3>
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

function Coaching() {
  return (
    <section id="book" className="coaching-section">
      <div className="shell">
        <div className="coaching-card">
          <div className="coaching-left">
            <div className="eyebrow" style={{ color: "var(--cream-soft)", opacity: 0.6 }}>
              Direct, 1:1 · {PROFILE.available} slots open this quarter
            </div>
            <h2 className="h-section" style={{ color: "var(--cream-soft)", marginTop: 14 }}>
              Work with {PROFILE.short}.
            </h2>
            <p style={{ color: "rgba(244,237,221,0.78)", fontSize: 18, lineHeight: 1.5, marginTop: 16, maxWidth: 52 + "ch" }}>
              Twelve-week individualized programs. No copy-paste templates, no app subscription, no upsells. You get Marcus, a real nutrition plan, and weekly check-ins.
            </p>
            <ul className="coaching-list">
              <li>Initial 90-minute intake call</li>
              <li>Weekly written check-ins + monthly call</li>
              <li>Bloodwork review (you bring it, he reads it)</li>
              <li>Direct text access during your training week</li>
            </ul>
          </div>
          <div className="coaching-right">
            <div className="coaching-price-card">
              <div className="mono" style={{ color: "rgba(244,237,221,0.55)" }}>FROM</div>
              <div className="serif" style={{ fontSize: 56, lineHeight: 1, color: "var(--cream-soft)", margin: "4px 0 6px" }}>$420<span style={{ fontSize: 18, color: "rgba(244,237,221,0.6)" }}>/mo</span></div>
              <div style={{ color: "rgba(244,237,221,0.7)", fontSize: 13 }}>12-week minimum · sliding scale available</div>
              <a href="#" className="btn btn-amber btn-arrow" style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>
                Apply to work with Marcus
              </a>
              <div className="mono" style={{ color: "rgba(244,237,221,0.4)", marginTop: 14, textAlign: "center", fontSize: 10 }}>
                APPLICATIONS REVIEWED WEEKLY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Transparency() {
  return (
    <section className="transp-section">
      <div className="shell">
        <div className="transp-card">
          <div className="transp-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" fill="rgba(31,61,46,0.06)"/>
              <path d="M10 16l4 4 8-9" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="transp-body">
            <div className="eyebrow">How this works · plainly</div>
            <h3 className="serif transp-h">{PROFILE.short} has a featured partnership with Relish.</h3>
            <p>
              In plain English: Marcus pays a quarterly fee to have a featured profile here. <b>That doesn't change the editorial standard.</b> Every article on this page went through the same Relish fact-check process as any other piece on the site — including the ones written by our unpaid contributors and our editor-in-chief.
            </p>
            <p>
              If a piece of his content is sponsored by a brand, you'll see a clear <span className="inline-tag">Sponsored</span> label at the top — never buried, never gray-text. If he's recommending a supplement he has a financial relationship with, that's disclosed in the article itself, not in a tooltip.
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
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1l2.5 2.2L16 3l.5 3.2L19 8l-2 2.5L19 13l-2.5 1.8L16 18l-3.5-.2L10 20l-2.5-2.2L4 18l-.5-3.2L1 13l2-2.5L1 8l2.5-1.8L4 3l3.5.2L10 1z" stroke="currentColor" strokeWidth="0.8" fill="rgba(178,125,43,0.1)"/>
              <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="serif" style={{ fontSize: 22, lineHeight: 1.15 }}>Reviewed by Relish editors</div>
            <div style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 4 }}>
              Even paid contributors don't publish unchecked. Our editor-in-chief and at least one outside reviewer sign off on every article before it goes live. <a href="#" style={{ color: "var(--forest)", textDecoration: "underline" }}>See the policy.</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top" style={{ gridTemplateColumns: "2fr 1fr 1fr" }}>
          <div className="footer-brand">
            <RelishStamp variant="pip" size={1} />
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
            <div className="mono footer-h">For Marcus</div>
            <ul>
              <li><a href="#book">Coaching</a></li>
              <li><a href="#articles">Articles</a></li>
              <li><a href="#">Speaking</a></li>
              <li><a href="#">Email Marcus</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <b>This isn't medical advice.</b> Marcus is a great sports nutritionist. He is not your doctor and he doesn't have your bloodwork. Anything specific to your body — especially if you're navigating a real medical situation — should involve someone who can actually see you.
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

const PROFILE_TWEAKS = {
  "palette": ["#1f3d2e", "#b27d2b", "#c25a38"],
  "showTransparency": true,
  "showCoaching": true
};

function applyProfilePalette(p) {
  const root = document.documentElement;
  root.style.setProperty("--forest", p[0]);
  root.style.setProperty("--amber", p[1]);
  root.style.setProperty("--terracotta", p[2]);
}

export default function ProfileApp() {
  const [t, setTweak] = useTweaks(PROFILE_TWEAKS);
  useEffect(() => { applyProfilePalette(t.palette); }, [t.palette]);

  return (
    <>
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

      <TweaksPanel>
        <TweakSection label="Palette" />
        <TweakColor
          label="Theme"
          value={t.palette}
          options={[
            ["#1f3d2e", "#b27d2b", "#c25a38"],
            ["#2a4636", "#a16a23", "#7a2e1a"],
            ["#1a3a2e", "#c89a3c", "#d97757"],
            ["#143124", "#9a6b2e", "#a85a3e"],
          ]}
          onChange={(v) => setTweak("palette", v)}
        />
        <TweakSection label="Sections" />
        <TweakToggle label="Show coaching block" value={t.showCoaching} onChange={(v) => setTweak("showCoaching", v)} />
        <TweakToggle label="Show transparency block" value={t.showTransparency} onChange={(v) => setTweak("showTransparency", v)} />
      </TweaksPanel>
    </>
  );
}
