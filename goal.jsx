// Relish — Goal page (shared component, themed per goal)
//
// Each Goal HTML file sets `window.GOAL_CONFIG = {...}` before loading this file.
// Config schema:
//   slug, name, eyebrow, hed, dek,
//   accent: { primary, soft, deep, ink },
//   logoMark, heroPhoto,
//   steps:    [{n, title, body, photo}]
//   coaching: { expertName, expertRole, expertLine, expertHref }
//   articles: [{tag, title, read, ev, href}]
//   resources:[{title, body}]

const { useState: useGS, useEffect: useGE } = React;

const C = window.GOAL_CONFIG;

/* ── Per-goal theme on <body> ───────────────────────────────────────── */
function applyGoalTheme(a) {
  const r = document.documentElement;
  r.style.setProperty("--goal-primary", a.primary);
  r.style.setProperty("--goal-soft", a.soft);
  r.style.setProperty("--goal-deep", a.deep);
  r.style.setProperty("--goal-ink", a.ink || "#1a1a17");
}

/* ── Nav ───────────────────────────────────────────────────────────── */
function GoalNav() {
  return (
    <nav className="nav goal-nav">
      <div className="shell nav-row">
        <a href="Relish — Homepage.html" className="brand-link" aria-label="Relish — home">
          <RelishLogo variant={C.logoMark || "pom"} size={0.78} />
        </a>
        <div className="profile-crumbs">
          <a href="Relish — Homepage.html">Home</a>
          <span>/</span>
          <a href="Relish — Homepage.html#goals">Goals</a>
          <span>/</span>
          <b>{C.name}</b>
        </div>
        <a href="#signup" className="nav-cta goal-cta">Get the starter guide</a>
      </div>
    </nav>
  );
}

/* ── Hero ──────────────────────────────────────────────────────────── */
function GoalHero() {
  return (
    <section className="goal-hero">
      <div className="shell goal-hero-grid">
        <div>
          <div className="eyebrow goal-eyebrow">{C.eyebrow}</div>
          <h1 className="h-hero goal-hed">{C.hed}</h1>
          <p className="lede goal-dek">{C.dek}</p>
          <div className="goal-hero-ctas">
            <a href="#guide" className="btn goal-btn-primary btn-arrow">Start the guide</a>
            <a href="#coaching" className="btn btn-ghost btn-arrow">Work with an expert</a>
          </div>
          <div className="goal-hero-meta">
            <span><b>{C.steps.length}</b> steps · ~25-min read</span>
            <span className="goal-meta-dot"></span>
            <span>Updated this week</span>
            <span className="goal-meta-dot"></span>
            <span>Cited throughout</span>
          </div>
        </div>
        <aside className="goal-hero-aside">
          <div className="goal-hero-ph ph"><span>{C.heroPhoto}</span></div>
          <div className="goal-hero-tape">
            <div className="goal-tape-mark"><RelishLogo variant="seed" size={0.6} showWord={false} /></div>
            <div>
              <div className="serif" style={{ fontSize: 18, lineHeight: 1.15 }}>"{C.tape}"</div>
              <div className="mono" style={{ color: "var(--ink-soft)", marginTop: 8, fontSize: 10 }}>— DIYA, EDITOR-IN-CHIEF</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ── Signup ────────────────────────────────────────────────────────── */
function GoalSignup() {
  const [email, setEmail] = useGS("");
  const [done, setDone] = useGS(false);
  return (
    <section id="signup" className="goal-signup">
      <div className="shell">
        <div className="goal-signup-card">
          <div>
            <div className="eyebrow goal-eyebrow">Free · No fluff</div>
            <h2 className="h-section goal-signup-h">
              Get the {C.shortName} starter pack — and the weekly notes.
            </h2>
            <p className="lede" style={{ color: "var(--cream-soft)", opacity: 0.85, marginTop: 16, maxWidth: "44ch" }}>
              The full guide on this page as a PDF, plus a short note every Tuesday with one thing worth knowing for {C.shortName.toLowerCase()}. Unsubscribe in one click. Never sold, never spammed.
            </p>
          </div>
          <form className="goal-signup-form" onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}>
            {!done ? (
              <>
                <input
                  type="email"
                  required
                  placeholder="you@actually-yours.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn goal-btn-primary btn-arrow">Send the pack</button>
                <div className="goal-signup-fine">
                  <span>✓ The 22-page PDF</span>
                  <span>✓ Weekly Tuesday notes</span>
                  <span>✓ Unsubscribe instantly</span>
                </div>
              </>
            ) : (
              <div className="goal-signup-done">
                <div className="serif" style={{ fontSize: 30 }}>On its way.</div>
                <div style={{ opacity: 0.8, marginTop: 8 }}>Check your inbox. Reply to that email and you'll get to a human.</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Step-by-step guide ────────────────────────────────────────────── */
function GoalGuide() {
  return (
    <section id="guide" className="goal-guide">
      <div className="shell">
        <div className="section-head goal-guide-head">
          <div>
            <div className="eyebrow goal-eyebrow">The Guide</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>{C.guideTitle}</h2>
          </div>
          <p className="lede">{C.guideDek}</p>
        </div>

        <div className="goal-steps">
          {C.steps.map((s, i) => (
            <article key={i} className={"goal-step " + (i % 2 === 0 ? "goal-step-l" : "goal-step-r")}>
              <div className="goal-step-photo ph">
                <span>{s.photo}</span>
              </div>
              <div className="goal-step-body">
                <div className="goal-step-num serif">{s.n || `0${i + 1}`}</div>
                <div className="mono goal-step-eyebrow">Step {i + 1} of {C.steps.length}</div>
                <h3 className="serif goal-step-title">{s.title}</h3>
                <p className="goal-step-text">{s.body}</p>
                {s.bullets && (
                  <ul className="goal-step-bullets">
                    {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Coaching options ──────────────────────────────────────────────── */
function GoalCoaching() {
  const opts = [
    {
      tag: "1:1 · The full thing",
      title: `Work directly with ${C.coaching.expertName.split(" ")[0]}`,
      body: `${C.coaching.expertRole}. Personalized programming, weekly written check-ins, direct text access during your training week. Real one-on-one — not an app.`,
      price: C.coaching.price,
      ctaLabel: "Apply to work together",
      ctaHref: C.coaching.expertHref,
      featured: true,
    },
    {
      tag: "Self-paced · Personalized",
      title: "Build your own guide",
      body: "Answer 12 questions about your body, schedule, food preferences, and constraints. Get a custom version of the playbook on this page — tailored to your week. Takes 4 minutes.",
      price: "Free",
      ctaLabel: "Start the questionnaire",
      ctaHref: "#",
    },
    {
      tag: "Free · No commitment",
      title: "Just keep reading",
      body: "Subscribe to the weekly note for this track. One useful thing every Tuesday, plus access to every new article in this space as it goes live.",
      price: "Free",
      ctaLabel: "Get the weekly note",
      ctaHref: "#signup",
    },
  ];
  return (
    <section id="coaching" className="goal-coaching">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow goal-eyebrow">How deep you want to go</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>Three honest options.</h2>
          </div>
          <p className="lede">No funnels. The free version is genuinely useful — that's the standard. The paid versions are for people who want a human in the loop.</p>
        </div>
        <div className="goal-coach-grid">
          {opts.map((o, i) => (
            <article key={i} className={"goal-coach-card" + (o.featured ? " is-featured" : "")}>
              {o.featured && <div className="goal-coach-flag">Most personal</div>}
              <div className="mono goal-coach-tag">{o.tag.toUpperCase()}</div>
              <h3 className="serif goal-coach-title">{o.title}</h3>
              <p className="goal-coach-body">{o.body}</p>
              <div className="goal-coach-foot">
                <div className="goal-coach-price serif">{o.price}</div>
                <a href={o.ctaHref} className={"btn " + (o.featured ? "goal-btn-primary" : "btn-ghost") + " btn-arrow"}>
                  {o.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Related articles ──────────────────────────────────────────────── */
function GoalArticles() {
  return (
    <section id="reading" className="goal-articles">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow goal-eyebrow">More to read</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>The supporting evidence.</h2>
          </div>
          <a href="Relish — Homepage.html" className="btn btn-ghost btn-arrow">All articles on Relish</a>
        </div>
        <div className="goal-articles-grid">
          {C.articles.map((a, i) => (
            <a key={i} href={a.href || "#"} className="goal-article-card">
              <div className="goal-article-ph ph"><span>{a.photo || a.tag}</span></div>
              <div className="goal-article-body">
                <div className="mono goal-article-tag">{a.tag.toUpperCase()}</div>
                <h3 className="serif goal-article-title">{a.title}</h3>
                <div className="goal-article-meta">
                  <span>{a.read} min</span>
                  <span className="ev-pips">{[1,2,3,4,5].map(j => <span key={j} className={"ev-pip" + (j <= a.ev ? " on" : "")}></span>)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Resources / tools strip ───────────────────────────────────────── */
function GoalResources() {
  return (
    <section className="goal-resources">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow goal-eyebrow">Tools & resources</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>The boring useful stuff.</h2>
          </div>
        </div>
        <div className="goal-resources-grid">
          {C.resources.map((r, i) => (
            <div key={i} className="goal-resource">
              <div className="goal-resource-num mono">R.0{i + 1}</div>
              <div>
                <div className="serif goal-resource-title">{r.title}</div>
                <p>{r.body}</p>
                <a href="#" className="goal-resource-link">{r.cta || "Open"} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────────────── */
function GoalFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top" style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}>
          <div className="footer-brand">
            <RelishStamp variant="open" size={1} />
            <p style={{ color: "rgba(244,237,221,0.7)", marginTop: 22, maxWidth: 38 + "ch" }}>
              Whole foods, honestly. Every claim is cited. Every contributor is vetted. Sponsored content is always labeled.
            </p>
            <a href="Relish — Homepage.html" className="btn btn-ghost btn-arrow" style={{ marginTop: 28, borderColor: "rgba(244,237,221,0.25)", color: "var(--cream-soft)" }}>
              Back to Relish
            </a>
          </div>
          <div className="footer-col">
            <div className="mono footer-h">Other goal tracks</div>
            <ul>
              <li><a href="Relish — Lean.html">Lean Out & Feel Light</a></li>
              <li><a href="Relish — Strength.html">Build Strength From the Inside</a></li>
              <li><a href="Relish — Longevity.html">Optimum Health · the long game</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="mono footer-h">This page</div>
            <ul>
              <li><a href="#signup">Get the starter pack</a></li>
              <li><a href="#guide">The guide</a></li>
              <li><a href="#coaching">Coaching options</a></li>
              <li><a href="#reading">Related reading</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <b>This isn't medical advice.</b> It's a careful summary of what the literature says, written by credentialed contributors and fact-checked by our editors. Anything specific to your body — especially if you're navigating a real medical situation — should involve someone who can actually see you.
          </div>
          <div className="footer-fine">
            <span>© 2026 Relish Media, LLC</span>
            <span>{C.name} · last reviewed this week</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
function GoalApp() {
  useGE(() => {
    if (C && C.accent) applyGoalTheme(C.accent);
  }, []);

  if (!C) return <div style={{ padding: 40 }}>GOAL_CONFIG missing. Set window.GOAL_CONFIG in the host HTML.</div>;

  return (
    <div className={"goal-page goal-" + C.slug}>
      <GoalNav />
      <main>
        <GoalHero />
        <GoalSignup />
        <GoalGuide />
        <GoalCoaching />
        <GoalArticles />
        <GoalResources />
      </main>
      <GoalFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GoalApp />);
