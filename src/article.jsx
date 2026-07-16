import { useState, useEffect } from 'react';
import { RelishLogo, RelishStamp } from './logo';
import { useTweaks, TweaksPanel, TweakSection, TweakColor } from './tweaks-panel';

const ARTICLE = {
  hed: "Protein, finally explained without the bro-science.",
  dek: "How much you actually need (by bodyweight). Why the 'anabolic window' isn't real. What changes after 40. And the one timing thing that does matter.",
  author: "Marcus Okonkwo",
  author_short: "Marcus",
  author_role: "Featured Contributor · MS, CSCS",
  read: "14 min read",
  date: "Published May 13, 2026",
  reviewed: "Reviewed 11 days ago by Dr. Lin Wei",
  evidence: 5,
  tag: "Nutrition · Foundations",
  cites: 27,
};

const TOC = [
  { id: "tldr", label: "The TL;DR" },
  { id: "how-much", label: "How much you actually need" },
  { id: "window", label: "The 'window' isn't a window" },
  { id: "after-40", label: "What changes after 40" },
  { id: "timing", label: "The timing thing that does matter" },
  { id: "sources", label: "Sources & further reading" },
];

function ArticleNav() {
  return (
    <nav className="nav">
      <div className="shell nav-row">
        <a href="/" className="brand-link" aria-label="Relish — home">
          <RelishLogo variant="wedge" size={0.78} />
        </a>
        <div className="profile-crumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#nutrition">Nutrition</a>
          <span>/</span>
          <b>Protein, explained</b>
        </div>
        <a href="/creator" className="nav-cta">Read more by Marcus →</a>
      </div>
    </nav>
  );
}

function ArticleHeader() {
  return (
    <header className="article-hero">
      <div className="shell article-hero-grid">
        <div className="article-hero-meta">
          <a href="/#nutrition" className="article-tag-link">{ARTICLE.tag}</a>
          <h1 className="article-hed">{ARTICLE.hed}</h1>
          <p className="article-dek">{ARTICLE.dek}</p>

          <div className="article-byline">
            <a href="/creator" className="byline-author">
              <div className="byline-ph ph"><span>M</span></div>
              <div>
                <div className="byline-name">{ARTICLE.author}</div>
                <div className="byline-role">{ARTICLE.author_role}</div>
              </div>
            </a>
            <div className="byline-meta">
              <div><span className="mono">PUBLISHED</span> {ARTICLE.date.replace("Published ", "")}</div>
              <div><span className="mono">READ</span> {ARTICLE.read}</div>
              <div className="byline-ev"><span className="mono">EVIDENCE</span>
                <span className="ev-pips" aria-label={ARTICLE.evidence + " out of 5"}>
                  {[1,2,3,4,5].map(i => <span key={i} className={"ev-pip" + (i <= ARTICLE.evidence ? " on" : "")}></span>)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="article-hero-photo ph">
          <span>Hero photo · pan-seared salmon over lentils, herb oil, lemon</span>
        </div>
      </div>
    </header>
  );
}

function ArticleJump() {
  return (
    <section className="article-jump">
      <div className="shell">
        <div className="article-jump-card">
          <div className="article-jump-head">
            <div className="mono article-jump-eyebrow">In this piece · jump to</div>
            <div className="article-jump-meta mono">6 sections · {ARTICLE.read}</div>
          </div>
          <ol className="article-jump-list">
            {TOC.map((t, i) => (
              <li key={t.id}>
                <a href={"#" + t.id}>
                  <span className="article-jump-num mono">0{i + 1}</span>
                  <span className="article-jump-label serif">{t.label}</span>
                  <span className="article-jump-arrow">→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PullQuote({ children, by }) {
  return (
    <figure className="pull">
      <span className="pull-mark serif">"</span>
      <blockquote>{children}</blockquote>
      {by && <figcaption>— {by}</figcaption>}
    </figure>
  );
}

function Cite({ n }) {
  return <a href="#sources" className="cite">[{n}]</a>;
}

function Sidebar({ children, title }) {
  return (
    <aside className="sidebar">
      <div className="mono sidebar-eyebrow">Sidebar · in plain English</div>
      <div className="serif sidebar-title">{title}</div>
      <div className="sidebar-body">{children}</div>
    </aside>
  );
}

function ProteinTable() {
  const rows = [
    ["Sedentary, healthy adult", "0.8 g/kg", "Maintenance only. The floor, not the goal."],
    ["Active, not training for size", "1.2–1.6 g/kg", "What most adults should aim for."],
    ["Strength training, body recomp", "1.6–2.2 g/kg", "The sweet spot for most lifters."],
    ["Older adult (50+)", "1.4–2.0 g/kg", "Bumped up to fight sarcopenia."],
    ["Athlete in heavy cutting phase", "2.2–2.4 g/kg", "Preserves muscle in deficit."],
  ];
  return (
    <div className="data-table-wrap">
      <div className="mono data-cap">TABLE 01 · DAILY PROTEIN TARGETS, BY POPULATION</div>
      <table className="data-table">
        <thead>
          <tr><th>Who you are</th><th>Target</th><th>Why</th></tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}><td><b>{r[0]}</b></td><td className="num">{r[1]}</td><td>{r[2]}</td></tr>
          ))}
        </tbody>
      </table>
      <div className="data-foot mono">g/kg = grams of protein per kilogram of bodyweight. Multiply your weight in lbs by 0.45 to get kg.</div>
    </div>
  );
}

function ArticleBody() {
  return (
    <article className="article-body">
      <div className="shell article-body-grid">
        <aside className="article-toc">
          <div className="mono article-toc-h">In this piece</div>
          <ul>
            {TOC.map(t => <li key={t.id}><a href={"#" + t.id}>{t.label}</a></li>)}
          </ul>
          <div className="toc-foot">
            <div className="mono">FACT-CHECKED BY</div>
            <div className="serif" style={{ fontSize: 18, marginTop: 6 }}>Dr. Lin Wei</div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>PhD, Nutritional Biochemistry · Stanford</div>
            <div className="mono toc-cites">{ARTICLE.cites} CITATIONS</div>
          </div>
        </aside>

        <div className="article-prose">
          <p className="lede article-lede">
            Every January, I get the same email from at least one client. "Should I be eating more protein?" The honest answer is almost always yes — but how much, when, and from what is where the conversation gets weird. Let's do this properly.
          </p>

          <h2 id="tldr" className="serif">The TL;DR <span className="anchor-tag mono">JUMP TO SECTION</span></h2>
          <p>
            If you are an adult who trains, aim for somewhere between <b>1.6 and 2.2 grams of protein per kilogram of bodyweight per day</b>.<Cite n="1" /> Spread it across three or four meals. Hit at least 30 grams in your first meal of the day and your last meal of the day. The "anabolic window" you read about in 2007 is, depending on who you ask, either much wider than reported or a complete fiction.<Cite n="2" /> That's the whole article. The rest is the receipts.
          </p>

          <PullQuote by="Phillips, 2017 — meta-analysis of 49 studies">
            For most healthy lifters, the meaningful range is 1.6 to 2.2 g/kg/day. Going higher rarely hurts. Going lower frequently does.
          </PullQuote>

          <h2 id="how-much" className="serif">How much you actually need</h2>
          <p>
            The number you've probably seen — <b>0.8 grams per kilogram</b> — is the RDA.<Cite n="3" /> The RDA is the minimum to prevent deficiency, not the optimum for anyone doing anything. It's the protein equivalent of the minimum legal driving age. Technically you can drive. You'll be a terrible driver.
          </p>
          <p>
            The actual research-backed range for an adult who exercises is meaningfully higher. Stuart Phillips's 2018 meta-analysis — still the most-cited synthesis in the field — found <b>1.6 g/kg</b> as the inflection point above which you get diminishing returns for muscle protein synthesis in trained adults.<Cite n="4" /> Some studies push the ceiling to 2.2 g/kg, particularly during a cut.<Cite n="5" />
          </p>

          <ProteinTable />

          <Sidebar title="What this looks like on a real plate.">
            <p>An 80-kg adult lifting four times a week is targeting roughly <b>130–175 g of protein per day</b>. In practice that's:</p>
            <ul>
              <li>Breakfast — 3 eggs + Greek yogurt with berries · <b>38 g</b></li>
              <li>Lunch — chicken thigh + lentils + greens · <b>42 g</b></li>
              <li>Snack — cottage cheese + an apple · <b>25 g</b></li>
              <li>Dinner — salmon + brown rice + veg · <b>40 g</b></li>
              <li><b>Total: ~145 g</b> — comfortably in range, real food, no shake required.</li>
            </ul>
          </Sidebar>

          <h2 id="window" className="serif">The "anabolic window" isn't a window</h2>
          <p>
            The myth: you must consume protein within 30 minutes of training or your gains evaporate. The truth: the window is somewhere between 4 and 6 hours, depending on what you ate before training. Aragon and Schoenfeld's 2013 review settled this — the "window" is more like a sliding door, and it's open a lot longer than your gym bro thinks.<Cite n="6" />
          </p>
          <p>
            Practically: if you ate a real meal within ~3 hours of training, you can shower, drive home, and eat dinner without losing anything. If you trained fasted, get something in within an hour. That's the whole protocol.
          </p>

          <PullQuote>
            If you trained fasted, eat soon. If you didn't, relax — the window is a sliding door, and it's open all afternoon.
          </PullQuote>

          <h2 id="after-40" className="serif">What changes after 40</h2>
          <p>
            One of the most consistent findings in the last decade: <b>anabolic resistance</b>. As you age, your muscle responds less efficiently to a given amount of protein. The same 20-gram chicken breast that triggers a strong muscle protein synthesis response in a 25-year-old does considerably less in a 65-year-old.<Cite n="7" />
          </p>
          <p>
            The fix is not exotic. You eat more protein, and you eat more per meal — closer to <b>40 grams at a sitting</b>, rather than 20.<Cite n="8" /> This matters enormously for sarcopenia (the age-related loss of muscle mass) and for the kind of independent, mobile old age most of us actually want.
          </p>

          <Sidebar title="Quick translation.">
            <p>Sarcopenia is the medical word for "I used to be able to carry the groceries up the stairs and now I can't." It starts around 30, accelerates after 60, and is one of the strongest predictors of how you'll spend your last decade of life. Eating more protein is one of the two things — the other being resistance training — that we know reliably slows it.<Cite n="9" /></p>
          </Sidebar>

          <h2 id="timing" className="serif">The one timing thing that does matter</h2>
          <p>
            Total daily protein matters most. Distribution matters next. After both of those, individual meal size matters a little. What barely matters at all: which specific minute on the clock you eat your post-workout chicken.
          </p>
          <p>
            The one timing finding that has held up: <b>protein within the first hour of waking is helpful, particularly as you age</b>.<Cite n="10" /> Not because of any magical cortisol mechanism, but because overnight your body has been in a mild catabolic state, and breaking that earlier rather than later compounds over years. A 30-gram protein breakfast does more for your muscle in your sixties than a 70-gram dinner does.
          </p>

          <PullQuote by="Volpi et al., Journal of Gerontology">
            Protein at breakfast is the single most under-prioritized variable in the diet of adults over 50. Anecdotally, in my own clinical work, fixing this alone often outperforms any supplement intervention I've ever attempted.
          </PullQuote>

          <h2 id="sources" className="serif">Sources & further reading</h2>
          <ol className="sources-list">
            <li><b>Phillips, S.M., et al. (2018).</b> <i>A critical examination of dietary protein requirements, benefits, and excesses in athletes.</i> Int J Sport Nutr Exerc Metab.</li>
            <li><b>Aragon, A.A. & Schoenfeld, B.J. (2013).</b> <i>Nutrient timing revisited: is there a post-exercise anabolic window?</i> J Int Soc Sports Nutr.</li>
            <li><b>Institute of Medicine (2005).</b> Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids.</li>
            <li><b>Morton, R.W., et al. (2018).</b> <i>A systematic review, meta-analysis, and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength.</i> Br J Sports Med.</li>
            <li><b>Helms, E.R., et al. (2014).</b> <i>A systematic review of dietary protein during caloric restriction in resistance trained lean athletes.</i> Int J Sport Nutr Exerc Metab.</li>
            <li>+ 22 more citations available on request — email <i>citations@relish.media</i>.</li>
          </ol>

          <div className="article-end">
            <RelishLogo variant="orb" size={0.7} />
            <div>
              <div className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>That's the article.</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>If something here changed how you think — or if you want to argue — Marcus reads every reply.</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function RelatedReads() {
  const items = [
    { tag: "Foundations", title: "Carbs and lifters: a peace treaty.", read: "11 min", ev: 4 },
    { tag: "Supplements", title: "Creatine, finally, in 9 minutes.", read: "9 min", ev: 5 },
    { tag: "Performance", title: "Sleep is a nutrition variable. I'm sorry.", read: "12 min", ev: 5 },
  ];
  return (
    <section className="related-section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ color: "var(--terracotta)" }}>Keep reading</div>
            <h2 className="h-section" style={{ marginTop: 14 }}>More from Marcus.</h2>
          </div>
          <a href="/creator" className="btn btn-ghost btn-arrow">All his articles</a>
        </div>
        <div className="related-grid">
          {items.map((r, i) => (
            <a key={i} href="#" className="related-card">
              <div className="related-ph ph"><span>{r.tag} photo</span></div>
              <div className="mono related-tag">{r.tag.toUpperCase()}</div>
              <div className="serif related-title">{r.title}</div>
              <div className="related-meta">
                <span>{r.read}</span>
                <span className="ev-pips">{[1,2,3,4,5].map(j => <span key={j} className={"ev-pip" + (j <= r.ev ? " on" : "")}></span>)}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top" style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}>
          <div className="footer-brand">
            <RelishStamp variant="pip" size={1} />
            <p style={{ color: "rgba(244,237,221,0.7)", marginTop: 22, maxWidth: 38 + "ch" }}>
              Whole foods, honestly. Every claim is cited. Every contributor is vetted. Sponsored content is always labeled.
            </p>
            <a href="/" className="btn btn-ghost btn-arrow" style={{ marginTop: 28, borderColor: "rgba(244,237,221,0.25)", color: "var(--cream-soft)" }}>
              Back to Relish
            </a>
          </div>
          <div className="footer-col">
            <div className="mono footer-h">More to read</div>
            <ul>
              <li><a href="/#diets">Diets compared</a></li>
              <li><a href="/#myths">Myth-busted</a></li>
              <li><a href="/#experts">Contributors</a></li>
              <li><a href="#">All articles</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="mono footer-h">About this piece</div>
            <ul>
              <li><a href="/creator">About Marcus</a></li>
              <li><a href="#sources">Citations ({ARTICLE.cites})</a></li>
              <li><a href="#">Editorial policy</a></li>
              <li><a href="#">Suggest an edit</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-disclaimer">
            <b>This isn't medical advice.</b> It's a good summary of what the literature says about protein, written by a credentialed sports nutritionist and fact-checked by a research biochemist. It is not a substitute for someone who can see your bloodwork, your training schedule, and your kitchen.
          </div>
          <div className="footer-fine">
            <span>© 2026 Relish Media, LLC</span>
            <span>{ARTICLE.reviewed}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const ARTICLE_TWEAKS = {
  "palette": ["#1f3d2e", "#b27d2b", "#c25a38"],
  "logoMark": "wedge"
};

function applyArticlePalette(p) {
  const root = document.documentElement;
  root.style.setProperty("--forest", p[0]);
  root.style.setProperty("--amber", p[1]);
  root.style.setProperty("--terracotta", p[2]);
}

export default function ArticleApp() {
  const [t, setTweak] = useTweaks(ARTICLE_TWEAKS);
  useEffect(() => { applyArticlePalette(t.palette); }, [t.palette]);
  return (
    <>
      <ArticleNav />
      <main>
        <ArticleHeader />
        <ArticleJump />
        <ArticleBody />
        <RelatedReads />
      </main>
      <ArticleFooter />

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
      </TweaksPanel>
    </>
  );
}
