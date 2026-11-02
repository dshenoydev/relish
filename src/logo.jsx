// Relish Logo — citrus mark.
//
// The mark is a single bitmap served from public/ (Vite leaves public/
// files untouched, so it's referenced by absolute path, not imported).
// All historical variant names still resolve and render — they just all
// point at the same PNG, so every existing <RelishLogo variant="…"/>
// call across nav, hero, article-end, footer keeps working without edits.

const RELISH_LOGO_SRC = "/relish-logo.png";

const POM_COLORS = {
  forest: "#1F3D2E",
  terracotta: "#C25A38",
  amber: "#B27D2B",
  cream: "#F4EDDD",
};

/* The mark — tight-cropped bitmap, lettering baked in. Base height
   (56 * s) lands the header's existing size={0.78} call around 44px. */
function MarkImg({ s = 1 }) {
  const px = 56 * s;
  return (
    <img
      src={RELISH_LOGO_SRC}
      alt="Relish"
      style={{ height: px, width: "auto", display: "block" }}
    />
  );
}

/* All historical variants resolve to the same bitmap mark. The variant
   API is preserved so existing call sites (variant="open", "seed",
   "cluster", etc.) still mount without edits. */
const MARK_VARIANTS = {
  pom: MarkImg,
  open: MarkImg,
  seed: MarkImg,
  cluster: MarkImg,
  crown: MarkImg,
  badge: MarkImg,
  // Back-compat aliases
  wedge: MarkImg,
  pip: MarkImg,
  orb: MarkImg,
  slice: MarkImg,
  bowl: MarkImg,
};

// Wordmark + mark, side by side. The PNG already carries "relish" in
// script lettering; showWord adds the live "Relish." type treatment
// next to it (forest green, terracotta period) per the brand spec.
export function RelishLogo({ variant = "pom", size = 1, color = "var(--forest)", showWord = true }) {
  const Mark = MARK_VARIANTS[variant] || MarkImg;
  return (
    <span className="relish-logo" style={{ color }}>
      <span className="relish-mark">
        <Mark s={size} />
      </span>
      {showWord && (
        <span className="relish-word" style={{ fontSize: `${36 * size}px` }}>
          Relish<span className="relish-period">.</span>
        </span>
      )}
    </span>
  );
}

// "Stamp" version — for footer / large display. Horizontal lockup with
// the mark to the LEFT of the wordmark (matching the brand-stamp card),
// tagline beneath.
export function RelishStamp({ variant = "pom", size = 1, color = "var(--cream-soft)" }) {
  const Mark = MARK_VARIANTS[variant] || MarkImg;
  return (
    <span className="relish-stamp" style={{ color }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
        <Mark s={size * 1.4} />
        <span className="relish-stamp-word" style={{ fontSize: `${48 * size}px`, lineHeight: 1 }}>
          Relish<span style={{ color: POM_COLORS.terracotta }}>.</span>
        </span>
      </span>
      <span className="relish-stamp-tag">Whole foods, honestly</span>
    </span>
  );
}

export const LOGO_VARIANTS = ["pom", "open", "seed", "cluster", "crown", "badge"];
