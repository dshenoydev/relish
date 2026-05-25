// Relish — Homepage part 2: Goals, Quiz, Experts, Trust, Community, Email, Footer

const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

/* ─── Goals — pathway cards ──────────────────────────────────────────── */
const GOALS = [
{
  title: "Lean Out & Feel Light",
  href: "Relish — Lean.html",
  accent: "var(--terracotta)",
  bg: "linear-gradient(155deg, #f1dcd0 0%, #ead1c0 100%)",
  chip: "Composition",
  desc: "Fat loss without starving, crashing, or hating breakfast. Built for steady, repeatable progress.",
  bullets: ["Sustainable deficit playbook", "Protein floors, not ceilings", "Habits that survive a bad week"]
},
{
  title: "Build Strength From the Inside",
  href: "Relish — Strength.html",
  accent: "var(--amber)",
  bg: "linear-gradient(155deg, #f1e5cd 0%, #e7d3a8 100%)",
  chip: "Performance",
  desc: "Muscle, energy, recovery. Eat to train. Train to live longer. Nothing crashed off a bro-science forum.",
  bullets: ["Real protein math, by bodyweight", "Carbs that actually fuel sessions", "Creatine, citrulline, the few that work"]
},
{
  title: "Optimum Health (The Long Game)",
  href: "Relish — Longevity.html",
  accent: "var(--forest)",
  bg: "linear-gradient(155deg, #e3ebdb 0%, #cfdcc4 100%)",
  chip: "Longevity",
  desc: "Eat now for the body you want at 70. Fiber, polyphenols, sleep, the quiet boring things that work.",
  bullets: ["The 30-plants-a-week rule, explained", "Inflammation, the version that's real", "What to actually test for, by decade"]
}];


function GoalsSection() {
  return (
    <section id="goals" className="goals-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--amber-deep)" }}>04 · Choose Your Path</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>What are you actually here for?</h2>
          </div>
          <p className="lede">Three honest tracks. Pick the one that matches where you are right now — switch later if life changes its mind.</p>
        </div>
        <div className="goals-grid">
          {GOALS.map((g, i) =>
          <a key={i} href={g.href} className="goal-card" style={{ background: g.bg }}>
              <div className="goal-num serif" style={{ color: g.accent }}>0{i + 1}</div>
              <div className="goal-body">
                <span className="tag" style={{ background: "rgba(255,255,255,0.55)", color: g.accent }}>{g.chip}</span>
                <h3 className="h-card" style={{ marginTop: 14 }}>{g.title}</h3>
                <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>{g.desc}</p>
                <ul className="goal-bullets">
                  {g.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <span className="btn btn-arrow goal-card-cta" style={{ background: g.accent, color: "var(--cream-soft)", marginTop: 20 }}>
                  Start here
                </span>
              </div>
              <div className="goal-shape" style={{ background: g.accent }}></div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

/* ─── Goal Quiz floating banner ──────────────────────────────────────── */
const QUIZ_OPTS = [
"I want to stop feeling foggy and heavy",
"I'm building muscle and want to eat smarter",
"I need to fix my gut, honestly",
"I want to age well and skip the diseases",
"I just want to be normal around food again",
"Other — I'll figure it out"];


function QuizBanner() {
  const [open, setOpen] = useState2(false);
  const [dismissed, setDismissed] = useState2(false);
  const [picked, setPicked] = useState2(null);

  useEffect2(() => {
    const onScroll = () => {
      if (dismissed) return;
      const el = document.getElementById("myths");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.6) setOpen(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!open || dismissed) return null;

  return (
    <div className="quiz-banner" role="dialog" aria-label="Quick question">
      <button className="quiz-x" onClick={() => setDismissed(true)} aria-label="Dismiss">✕</button>
      <div className="quiz-inner">
        <div className="quiz-left">
          <div className="eyebrow" style={{ color: "rgb(57, 118, 0)", fontFamily: "Merriweather" }}>HELP US HELP YOU!</div>
          <h3 className="serif quiz-h">Wait — what's <em style={{ color: "rgb(57, 118, 0)" }}>your</em> goal?</h3>
          <p style={{ color: "var(--ink-soft)", fontSize: 14, margin: 0 }}>Pick the one closest to how you feel today. We'll tune what shows up next.</p>
        </div>
        <div className="quiz-options">
          {QUIZ_OPTS.map((q, i) =>
          <button
            key={i}
            className={"quiz-chip" + (picked === i ? " picked" : "")}
            onClick={() => setPicked(i)} style={{ borderColor: "rgb(100, 140, 82)", backgroundColor: "rgb(118, 155, 86)" }}>
            
              {q}
            </button>
          )}
        </div>
      </div>
    </div>);

}

/* ─── Experts strip ──────────────────────────────────────────────────── */
const EXPERTS = [
{
  name: "Dr. Anjali Mehra, RD",
  creds: "MS, Registered Dietitian · 14 yrs clinical",
  philosophy: "Nutrition should make you freer, not more anxious. Food is medicine, sometimes — and dinner, always.",
  tags: ["Whole foods", "Gut health", "South Asian diets"]
},
{
  name: "Marcus Okonkwo",
  creds: "CSCS, Sports Nutritionist · former D1 strength coach",
  philosophy: "You can't out-supplement undertraining. You can't out-train a junk diet. The basics are unsexy and work.",
  tags: ["Strength nutrition", "Athlete fueling", "Body recomp"]
},
{
  name: "Dr. Lin Wei",
  creds: "PhD, Nutritional Biochemistry · Stanford",
  philosophy: "Most nutrition arguments online would end in 30 seconds if anyone read the methods section.",
  tags: ["Research literacy", "Metabolic health", "Longevity"]
}];


function ExpertsSection() {
  return (
    <section id="experts" className="experts-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--forest)" }}>05 · The People Behind It</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>Vetted contributors. Not influencers.</h2>
          </div>
          <p className="lede">Every contributor passes editorial review. Credentials are listed. Conflicts of interest are disclosed. No exceptions.</p>
        </div>
        <div className="experts-grid">
          {EXPERTS.map((x, i) =>
          <article key={i} className="expert-card">
              <div className="expert-ph ph"><span>{x.name.split(",")[0]}</span></div>
              <div className="expert-body">
                <div className="expert-name-row">
                  <h3 className="h-card" style={{ fontSize: 26 }}>{x.name.split(",")[0]}</h3>
                  <span className="verified" title="Editorially reviewed">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l1.7 1.5L12 2l.5 2.3L14.5 6 13 8l1.5 2L12.5 11 12 13l-2.3-.5L8 14l-1.7-1.5L4 13l-.5-2.3L1.5 9 3 7 1.5 5 3.5 4 4 2l2.3.5L8 1z" fill="currentColor" /><path d="M5.5 8l2 2 3.5-4" stroke="var(--cream-soft)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    Verified
                  </span>
                </div>
                <div className="mono" style={{ color: "var(--ink-soft)", marginTop: 4 }}>{x.creds}</div>
                <p className="serif expert-phil">“{x.philosophy}”</p>
                <div className="expert-tags">
                  {x.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                </div>
                <a href="Relish — Creator.html" className="expert-link">Read their takes →</a>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

/* ─── Trust bar ──────────────────────────────────────────────────────── */
function TrustBar() {
  const items = [
  { k: "Every claim is cited", d: "Every paragraph, every stat, linked to source." },
  { k: "Contributors are vetted", d: "Credentials checked. Conflicts disclosed." },
  { k: "Sponsored content is labeled", d: "Always. No native-ad games." },
  { k: "Last-reviewed date on everything", d: "If it's old, you'll know before you read." }];

  return (
    <section className="trust-bar tight">
      <div className="shell">
        <div className="trust-grid">
          {items.map((t, i) =>
          <div key={i} className="trust-item">
              <div className="trust-mark">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 1l2.8 2.4L17.5 3l1 3.6 3 2.4-2.2 3 2.2 3-3 2.4-1 3.6-3.7-.4L11 21l-2.8-2.4-3.7.4-1-3.6-3-2.4 2.2-3-2.2-3 3-2.4 1-3.6 3.7.4L11 1z" stroke="currentColor" strokeWidth="0.8" fill="rgba(31,61,46,0.06)" /><path d="M7 11l3 3 5-6" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 22, lineHeight: 1.15 }}>{t.k}</div>
                <div style={{ color: "var(--ink-soft)", fontSize: 14, marginTop: 4 }}>{t.d}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ─── Community quotes ──────────────────────────────────────────────── */
const QUOTES = [
{
  text: "I stopped weighing myself for the first time in 12 years. The myth section did that. The carb one specifically. I cried.",
  who: "Priya, 34",
  where: "Reader since Feb"
},
{
  text: "I'm a personal trainer. I send the protein article to every new client. Even the ones who don't want it. Especially them.",
  who: "Marcus, 41",
  where: "Toronto"
},
{
  text: "Finally a nutrition site that didn't try to sell me magnesium in the first three paragraphs.",
  who: "Devi, 28",
  where: "Reader since launch"
}];


function CommunitySection() {
  return (
    <section id="community" className="community-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">06 · From the Community</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>Real readers. Real shifts.</h2>
          </div>
          <a href="#" className="btn btn-ghost btn-arrow">Join the community</a>
        </div>
        <div className="quotes-grid">
          {QUOTES.map((q, i) =>
          <figure key={i} className={"quote-card quote-" + i}>
              <div className="quote-mark serif">“</div>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <b>{q.who}</b>
                <span>{q.where}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}

/* ─── Email capture ─────────────────────────────────────────────────── */
function EmailCapture() {
  const [email, setEmail] = useState2("");
  const [sent, setSent] = useState2(false);
  return (
    <section className="email-section">
      <div className="shell">
        <div className="email-card">
          <div className="email-left">
            <div className="eyebrow" style={{ fontSize: "6px", fontFamily: "Merriweather", color: "rgb(232, 247, 238)" }}>Free · No fluff</div>
            <h2 className="h-section" style={{ color: "var(--cream-soft)", marginTop: 14 }}>
              Get the myth-busting starter guide.
            </h2>
            <p className="lede" style={{ color: "rgba(244,237,221,0.78)", marginTop: 18 }}>
              22 pages. Every diet trope you've heard, rechecked against the research. No upsell, no funnel — just the document.
            </p>
          </div>
          <form
            className="email-form"
            onSubmit={(e) => {e.preventDefault();if (email) setSent(true);}}>
            
            {!sent ?
            <>
                <input
                type="email"
                required
                placeholder="you@actually-yours.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              
                <button type="submit" className="btn btn-terracotta btn-arrow">Send it over</button>
                <small>One email. Unsubscribe in one click. We don't sell anything to anyone.</small>
              </> :

            <div className="email-sent">
                <div className="serif" style={{ fontSize: 28, color: "var(--cream-soft)" }}>On its way.</div>
                <div style={{ color: "rgba(244,237,221,0.78)", marginTop: 8 }}>Check your inbox in a minute. Check spam in five.</div>
              </div>
            }
          </form>
        </div>
      </div>
    </section>);

}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  const cols = [
  { h: "The site", links: ["Foundations", "Diets compared", "Nutrition", "Goals", "Myths", "Tools"] },
  { h: "About", links: ["Our editorial policy", "Contributor guidelines", "How we cite", "Last-reviewed dates", "Sponsored content policy"] },
  { h: "Quietly important", links: ["Privacy policy", "Terms of use", "Accessibility", "Press", "Contact"] }];

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <RelishStamp variant="pip" size={1} />
            <p style={{ color: "rgba(244,237,221,0.7)", marginTop: 22, maxWidth: 36 + "ch" }}>Whole foods, honestly. Run by an Indian woman and a small collective of contributors who read, test, and research for you.

            </p>
          </div>
          {cols.map((c, i) =>
          <div key={i} className="footer-col">
              <div className="mono footer-h">{c.h}</div>
              <ul>
                {c.links.map((l, j) => <li key={j}><a href="#">{l}</a></li>)}
              </ul>
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <div className="footer-disclaimer" style={{ fontSize: "14px" }}>
            <b style={{ fontSize: "16px" }}>Disclaimer: This isn't medical advice.</b> It's good information, carefully researched, but your doctor knows you and we don't. If you're navigating a real medical situation — pregnancy, an eating disorder history, diabetes, anything — please loop in someone who can see your bloodwork.
          </div>
          <div className="footer-fine">
            <span>© 2026 Relish Media, LLC</span>
            <span>Made slowly, in Brooklyn & Mumbai</span>
          </div>
        </div>
      </div>
    </footer>);

}

window.RelishHome2 = { GoalsSection, QuizBanner, ExpertsSection, TrustBar, CommunitySection, EmailCapture, Footer };