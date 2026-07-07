import { useState, useEffect, useRef, useMemo } from 'react';
import { RelishLogo } from './logo';

const NAV_TABS = ["Foundations", "Diets", "Nutrition", "Goals", "Myths", "Experts", "Tools", "Community"];

export function Nav({ active, onJump, logoVariant }) {
  return (
    <nav className="nav">
      <div className="shell nav-row">
        <a href="#top" className="brand-link" onClick={(e) => { e.preventDefault(); onJump("top"); }} aria-label="Relish — home">
          <RelishLogo variant={logoVariant} size={0.78} />
        </a>
        <div className="nav-tabs" role="tablist">
          {NAV_TABS.map((t) => {
            const id = t.toLowerCase();
            return (
              <button
                key={t}
                className={"tab" + (active === id ? " is-active" : "")}
                role="tab"
                onClick={() => onJump(id)}>
                {t}
              </button>
            );
          })}
        </div>
        <button className="nav-cta">Join free</button>
      </div>
    </nav>
  );
}

export function Hero({ headline, sub, paths }) {
  return (
    <section id="top" className="hero">
      <div className="shell hero-grid">
        <div className="hero-left">
          <div className="eyebrow">NO. 01 · HONEST WHOLE FOODS NUTRITION</div>
          <h1 className="h-hero">{headline}</h1>
          <p className="lede" style={{ marginTop: 28 }}>{sub}</p>

          <div className="path-grid">
            {paths.map((p, i) =>
              <button key={i} className={"path-card path-" + i}>
                <span className="path-num">0{i + 1}</span>
                <span className="path-label">{p}</span>
                <span className="path-arrow">→</span>
              </button>
            )}
          </div>

          <a href="/article" className="latest-article">
            <div className="latest-article-left">
              <div className="mono latest-eyebrow">Latest from Relish · 11 days ago</div>
              <div className="serif latest-title">
                Protein, finally explained without the bro-science.
              </div>
              <div className="latest-meta">
                <span>By Marcus Okonkwo</span>
                <span>·</span>
                <span>14 min read</span>
                <span>·</span>
                <span className="latest-ev">Evidence 5/5</span>
              </div>
            </div>
            <div className="latest-article-right">
              <div className="latest-ph ph"><span>Hero photo · pan-seared salmon, lentils</span></div>
              <div className="latest-arrow">Read it →</div>
            </div>
          </a>
        </div>

        <aside className="hero-aside">
          <div className="hero-stamp">
            <div className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>"Eat real. Feel everything."</div>
            <div className="mono" style={{ marginTop: 14, color: "var(--ink-soft)" }}>EST. 2026 · MASSACHUSETTS</div>
          </div>
          <div className="hero-ph ph"><span>Editor portrait · Diya, founder</span></div>
          <div className="hero-meta">
            <div><b>438</b><span>articles, all cited</span></div>
            <div><b>27</b><span>vetted contributors</span></div>
            <div><b>0</b><span>fad diets sold</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}

const EV_LABELS = {
  5: "Decades of strong evidence",
  4: "Well-supported, broadly",
  3: "Mixed but promising",
  2: "Narrow clinical use cases",
  1: "Mostly vibes",
};

const DIETS = [
  {
    name: "Mediterranean",
    accent: "var(--forest)",
    bg: "#eaf0e3",
    radius: "32px 32px 32px 120px",
    photo: "Mediterranean spread · olive oil, fish, beans",
    desc: "Olive oil, fish, beans, family dinners that run long. The one your cardiologist won't shut up about.",
    stars: 5,
    pros: ["Heart & metabolic health, repeatedly proven", "Genuinely sustainable for most people", "Built around joy, not restriction"],
    cons: ["Real olive oil is expensive", "Not a 'lose 10 lbs in a week' plan", "Loosely defined — easy to drift"],
  },
  {
    name: "Plant-Based",
    accent: "var(--forest-soft)",
    bg: "#e8efe1",
    radius: "120px 32px 32px 32px",
    photo: "Buddha bowl · greens, grains, tahini",
    desc: "Vegetables doing the heavy lifting. Done well: incredible. Done lazy: chips and oat milk.",
    stars: 4,
    pros: ["Strong cardiovascular outcomes", "Higher fiber, lower inflammation", "Lower environmental footprint"],
    cons: ["B12, iron, omega-3 need attention", "Ultra-processed vegan junk is still junk", "Protein takes intention"],
  },
  {
    name: "Paleo",
    accent: "var(--amber)",
    bg: "#f1e5cd",
    radius: "32px 120px 32px 32px",
    photo: "Grass-fed meat & roasted root vegetables",
    desc: "Eat like your great-great-grandmother might have. Skip the cave cosplay, keep the whole foods.",
    stars: 3,
    pros: ["Cuts ultra-processed by default", "Good entry off the standard western diet", "Stabilizes blood sugar for many"],
    cons: ["Anthropology is shakier than it claims", "Bans legumes & grains with weak evidence", "Can skew low-carb unintentionally"],
  },
  {
    name: "Keto",
    accent: "var(--terracotta)",
    bg: "#f1dcd0",
    radius: "32px 32px 120px 32px",
    photo: "Avocado, eggs, smoked salmon plate",
    desc: "Tool, not lifestyle. Brilliant for specific medical contexts. Less brilliant as a forever plan.",
    stars: 2,
    pros: ["Clinically real for epilepsy & some metabolic cases", "Rapid initial weight loss is real", "Appetite suppression for many"],
    cons: ["Long-term adherence is brutal", "LDL cholesterol can climb significantly", "Crowds out fiber & polyphenols"],
  },
  {
    name: "Carnivore",
    accent: "#7a2e1a",
    bg: "#ead8cf",
    radius: "120px 32px 120px 32px",
    photo: "Ribeye, butter, salt — that is genuinely it",
    desc: "Steak, eggs, repeat. The internet's most confident diet, with the least evidence behind it.",
    stars: 1,
    pros: ["Elimination protocol can surface food sensitivities", "Simple to plan", "Anecdotally helps some autoimmune cases"],
    cons: ["No long-term studies, full stop", "Zero fiber, zero phytonutrients", "Cardiovascular concerns are not 'debunked'"],
  },
];

function Pips({ n }) {
  return (
    <span className="ev-pips" aria-label={n + " out of 5"}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={"ev-pip" + (i <= n ? " on" : "")}></span>
      ))}
    </span>
  );
}

function DietCard({ d, i }) {
  return (
    <article className={"diet-card diet-card-" + i} style={{ background: d.bg, borderRadius: d.radius }}>
      <div className="diet-photo ph" style={{ borderRadius: d.radius }}>
        <span>{d.photo}</span>
      </div>
      <div className="diet-body">
        <div className="diet-card-top">
          <div className="diet-meta">
            <div className="eyebrow" style={{ color: d.accent }}>The {d.name} diet</div>
            <h3 className="h-card diet-name">{d.name}</h3>
          </div>
          <div className="diet-num serif" style={{ color: d.accent }}>0{i + 1}</div>
        </div>

        <p className="diet-desc">{d.desc}</p>

        <div className="diet-ev">
          <Pips n={d.stars} />
          <div className="diet-ev-text">
            <div className="serif" style={{ fontSize: 18, lineHeight: 1.1 }}>{EV_LABELS[d.stars]}</div>
            <div className="mono" style={{ color: "var(--ink-soft)", marginTop: 4 }}>RESEARCH BACKING · {d.stars}/5</div>
          </div>
        </div>

        <div className="diet-pc">
          <div className="diet-pc-col">
            <div className="pc-h pc-pro">
              <span className="pc-glyph" style={{ background: d.accent }}>+</span>
              What it gets right
            </div>
            <ul>{d.pros.map((p, j) => <li key={j}>{p}</li>)}</ul>
          </div>
          <div className="diet-pc-col">
            <div className="pc-h pc-con">
              <span className="pc-glyph pc-glyph-con">−</span>
              What to know
            </div>
            <ul>{d.cons.map((p, j) => <li key={j}>{p}</li>)}</ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function DietsSection() {
  return (
    <section id="diets" className="diets-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">02 · The Big Five, Compared</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>Every diet, weighed honestly.</h2>
          </div>
          <p className="lede">No tribes. No team jerseys. We rate by what the actual evidence says — and we're upfront when the evidence is mixed.</p>
        </div>
        <div className="diets-grid">
          {DIETS.map((d, i) => <DietCard key={d.name} d={d} i={i} />)}
        </div>
      </div>
    </section>
  );
}

const MYTHS = [
  {
    quote: "Fat makes you fat.",
    verdict: "Busted",
    color: "terracotta",
    truth: "Calories make you fat. Fat is satiating, hormonal, and essential — the 90s were wrong.",
    photo: "Pat of butter on warm sourdough",
    swatch: "#d6a36b",
  },
  {
    quote: "You need to eat every 2 hours.",
    verdict: "Busted",
    color: "terracotta",
    truth: "Frequent eating doesn't 'stoke metabolism.' Your meal rhythm should fit your life, not a magazine.",
    photo: "Vintage kitchen clock, soft afternoon light",
    swatch: "#c08a4a",
  },
  {
    quote: "Carbs are the enemy.",
    verdict: "Mostly False",
    color: "amber",
    truth: "Refined carbs and your body's response to them — different conversation. Lentils are not the villain.",
    photo: "Bowl of dal · lentils, ghee, cumin",
    swatch: "#b27d2b",
  },
  {
    quote: "Breakfast is the most important meal.",
    verdict: "It's Complicated",
    color: "amber",
    truth: "Important if you train early or have blood sugar issues. Optional if you're not hungry. Not sacred.",
    photo: "Soft-boiled egg, toast, black coffee",
    swatch: "#8d5f17",
  },
  {
    quote: "Detox teas clean your liver.",
    verdict: "Busted",
    color: "terracotta",
    truth: "Your liver does that. For free. While you sleep. The tea makes you poop.",
    photo: "Steaming cup of green tea, ceramic",
    swatch: "#5a8b5b",
  },
  {
    quote: "Eggs raise your cholesterol.",
    verdict: "Mostly True",
    color: "amber",
    truth: "For roughly 1 in 3 people, yes — measurably. For everyone else, eggs are largely fine. Test, don't guess.",
    photo: "Six brown eggs in a paper carton",
    swatch: "#c2a878",
  },
];

function MythCard({ m }) {
  return (
    <article className={"myth-card myth-" + m.color}>
      <div className="myth-photo ph" style={{ background: m.swatch }}>
        <span>{m.photo}</span>
      </div>
      <div className="myth-body">
        <div className="myth-top">
          <div className="mono">MYTH</div>
          <span className={"verdict verdict-" + m.color}>{m.verdict}</span>
        </div>
        <blockquote className="serif myth-quote">"{m.quote}"</blockquote>
        <div className="myth-rule"></div>
        <div className="mono" style={{ opacity: 0.7, marginBottom: 8 }}>THE TRUTH</div>
        <p className="myth-truth">{m.truth}</p>
      </div>
    </article>
  );
}

export function MythsSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  };
  return (
    <section id="myths" className="myths-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--terracotta)" }}>03 · Myth-Busted</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>Things you've been told, rechecked.</h2>
          </div>
          <div className="myth-nav">
            <button className="myth-btn" onClick={() => scroll(-1)} aria-label="Previous">←</button>
            <button className="myth-btn" onClick={() => scroll(1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
      <div className="myth-scroll" ref={scrollRef}>
        <div className="myth-spacer-l"></div>
        {MYTHS.map((m, i) => <MythCard key={i} m={m} />)}
        <div className="myth-spacer-r"></div>
      </div>
    </section>
  );
}
