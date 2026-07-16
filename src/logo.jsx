// Relish Logo — citrus mark.
//
// The mark is a single bitmap (the uploaded master). All historical
// variant names ("pom", "open", "seed", "cluster", "crown", "badge", plus
// the back-compat aliases) still resolve and render — they just all point
// at the same PNG now, so every existing <RelishLogo variant="…"/> call
// across nav, hero, article-end, footer keeps working without edits.
//
// Locked palette (kept for any consumer that imports POM_COLORS):
//   Forest #1F3D2E
//   Terracotta #C25A38
//   Amber #B27D2B
//   Cream #F4EDDD

import relishLogoTight from './assets/relish-logo-tight.png';

const POM_COLORS = {
  forest: "#1F3D2E",
  terracotta: "#C25A38",
  amber: "#B27D2B",
  cream: "#F4EDDD",
};

/* The mark — tight-cropped bitmap. Sized to be the LOUDEST element in
   any lockup it appears in: the base height (54 * s) is ~1.5× the
   RelishLogo wordmark size (36 * s) so the citrus reads as the anchor,
   wordmark as the label. All variant functions below are kept as thin
   wrappers so external call sites don't have to change. */
function MarkImg({ s = 1 }) {
  const px = 54 * s;
  return (
    <img
      src={relishLogoTight}
      alt=""
      aria-hidden="true"
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

// Wordmark + mark, side by side.
export function RelishLogo({ variant = "pom", size = 1, color = "var(--forest)", showWord = true }) {
  const Mark = MARK_VARIANTS[variant] || MarkImg;
  return (
    <span className="relish-logo" style={{ color }}>
      <span className="relish-mark" aria-hidden="true">
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
// tagline beneath. Mark sized 1.5× the wordmark cap height so the citrus
// remains the loudest element.
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
