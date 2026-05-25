// Relish — Homepage main app

const { useState: useS, useEffect: useE } = React;

const HEADLINES = {
  "noise": { h: "The noise stopped here.", s: "A whole-foods nutrition library run by an Indian woman and a small collective of vetted experts. Sources cited. No supplements to sell. No tribes to join." },
  "real":  { h: "Eat real.\nFeel everything.", s: "Whole foods, honestly explained. Built for people who are done with confusing diets and ready for a sustainable, healthier lifestyle." },
  "older": { h: "Like advice from your older sister.\nThe one who reads.", s: "Nutrition without the gimmicks. Every claim cited, every contributor vetted, every diet weighed by the evidence — not the vibes." },
};

const PATHS_PRESETS = {
  "playful": [
    "I  want to fix my relationship with food.  ",
    "I'm trying to feel good in my body",
    "I've been lied to and I want the truth",
  ],
  "direct": [
    "Start with the basics, properly",
    "I'm trying to change my body",
    "I'm rebuilding my relationship with food",
  ],
  "blunt": [
    "Teach me, from scratch",
    "Help me look and feel different",
    "Help me unlearn the bad stuff",
  ],
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "noise",
  "paths": "playful",
  "palette": ["#1f3d2e", "#b27d2b", "#c25a38"],
  "logoMark": "pom",
  "showQuiz": true,
  "showHeroStats": true
}/*EDITMODE-END*/;

function applyPalette(p) {
  const root = document.documentElement;
  root.style.setProperty("--forest", p[0]);
  root.style.setProperty("--amber", p[1]);
  root.style.setProperty("--terracotta", p[2]);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = useS("foundations");

  useE(() => { applyPalette(t.palette); }, [t.palette]);

  // section observer for active tab
  useE(() => {
    const ids = ["foundations", "diets", "nutrition", "goals", "myths", "experts", "tools", "community"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const onJump = (id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };

  const hl = HEADLINES[t.headline] || HEADLINES.noise;
  const paths = PATHS_PRESETS[t.paths] || PATHS_PRESETS.playful;

  const { Nav, Hero, DietsSection, MythsSection } = window.RelishHome1;
  const { GoalsSection, QuizBanner, ExpertsSection, TrustBar, CommunitySection, EmailCapture, Footer } = window.RelishHome2;

  return (
    <>
      <Nav active={active} onJump={onJump} logoVariant={t.logoMark} />
      <main>
        <div id="foundations" style={{ scrollMarginTop: 80 }}></div>
        <Hero
          headline={hl.h.split("\n").map((line, i) => <React.Fragment key={i}>{i > 0 && <br/>}{line}</React.Fragment>)}
          sub={hl.s}
          paths={paths}
        />
        <div id="nutrition" style={{ scrollMarginTop: 80 }}></div>
        <DietsSection />
        <MythsSection />
        <GoalsSection />
        <ExpertsSection />
        <TrustBar />
        <div id="tools" style={{ scrollMarginTop: 80 }}></div>
        <CommunitySection />
        <EmailCapture />
      </main>
      <Footer />
      {t.showQuiz && <QuizBanner />}

      <TweaksPanel>
        <TweakSection label="Logo" />
        <TweakSelect
          label="Mark variant"
          value={t.logoMark}
          options={[
            { value: "pom",     label: "Pomegranate (default)" },
            { value: "open",    label: "Cross-section · seeds" },
            { value: "seed",    label: "Single aril" },
            { value: "cluster", label: "Three seeds" },
            { value: "crown",   label: "Just the crown" },
            { value: "badge",   label: "Badge (profile-pic ready)" },
          ]}
          onChange={(v) => setTweak("logoMark", v)}
        />
        <TweakSection label="Hero" />
        <TweakSelect
          label="Headline"
          value={t.headline}
          options={[
            { value: "noise", label: "The noise stopped here." },
            { value: "real", label: "Eat real. Feel everything." },
            { value: "older", label: "Like advice from your older sister." },
          ]}
          onChange={(v) => setTweak("headline", v)}
        />
        <TweakSelect
          label="CTA voice"
          value={t.paths}
          options={[
            { value: "playful", label: "Playful (default)" },
            { value: "direct", label: "Direct" },
            { value: "blunt", label: "Even more blunt" },
          ]}
          onChange={(v) => setTweak("paths", v)}
        />
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
        <TweakSection label="Behavior" />
        <TweakToggle label="Show scroll quiz" value={t.showQuiz} onChange={(v) => setTweak("showQuiz", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
