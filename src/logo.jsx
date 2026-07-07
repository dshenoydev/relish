// Relish Logo — pomegranate mark.

const POM_COLORS = {
  forest: "#1F3D2E",
  terracotta: "#C25A38",
  amber: "#B27D2B",
  cream: "#F4EDDD",
};

function MarkPom({ s = 1 }) {
  const px = 44 * s;
  return (
    <svg viewBox="0 0 44 44" width={px} height={px} aria-hidden="true">
      <g transform="translate(22 10)" fill={POM_COLORS.forest}>
        <rect x="-1.2" y="-8" width="2.4" height="8" rx="1" transform="rotate(-28)" />
        <rect x="-1.2" y="-9" width="2.4" height="9" rx="1" />
        <rect x="-1.2" y="-8" width="2.4" height="8" rx="1" transform="rotate(28)" />
      </g>
      <circle cx="22" cy="26" r="15" fill={POM_COLORS.terracotta} />
      <ellipse cx="16" cy="22" rx="3.6" ry="5" fill={POM_COLORS.amber} opacity="0.35" />
    </svg>
  );
}

function MarkOpen({ s = 1 }) {
  const px = 44 * s;
  return (
    <svg viewBox="0 0 44 44" width={px} height={px} aria-hidden="true">
      <g transform="translate(22 9)" fill={POM_COLORS.forest}>
        <rect x="-1" y="-7" width="2" height="7" rx="1" transform="rotate(-28)" />
        <rect x="-1" y="-8" width="2" height="8" rx="1" />
        <rect x="-1" y="-7" width="2" height="7" rx="1" transform="rotate(28)" />
      </g>
      <circle cx="22" cy="25" r="15" fill={POM_COLORS.terracotta} />
      <circle cx="22" cy="25" r="12" fill={POM_COLORS.cream} />
      <g fill={POM_COLORS.terracotta}>
        <circle cx="16" cy="20" r="2.4" />
        <circle cx="22" cy="18" r="2.4" />
        <circle cx="28" cy="20" r="2.4" />
        <circle cx="14" cy="26" r="2.4" />
        <circle cx="20" cy="25" r="2.4" />
        <circle cx="26" cy="25" r="2.4" />
        <circle cx="30" cy="26" r="2.4" />
        <circle cx="18" cy="30" r="2.4" />
        <circle cx="24" cy="31" r="2.4" />
      </g>
    </svg>
  );
}

function MarkSeed({ s = 1 }) {
  const px = 40 * s;
  return (
    <svg viewBox="0 0 40 40" width={px} height={px} aria-hidden="true">
      <ellipse cx="20" cy="22" rx="11" ry="14" fill={POM_COLORS.terracotta} />
      <ellipse cx="16" cy="18" rx="2.5" ry="4" fill={POM_COLORS.cream} opacity="0.55" />
      <rect x="19" y="4" width="2" height="6" rx="1" fill={POM_COLORS.forest} />
    </svg>
  );
}

function MarkCluster({ s = 1 }) {
  const px = 44 * s;
  return (
    <svg viewBox="0 0 44 44" width={px} height={px} aria-hidden="true">
      <circle cx="15" cy="20" r="8" fill={POM_COLORS.terracotta} />
      <circle cx="29" cy="18" r="8" fill={POM_COLORS.amber} />
      <circle cx="22" cy="30" r="8" fill={POM_COLORS.forest} />
    </svg>
  );
}

function MarkCrown({ s = 1 }) {
  const px = 40 * s;
  return (
    <svg viewBox="0 0 40 40" width={px} height={px} aria-hidden="true">
      <g transform="translate(20 26)" fill={POM_COLORS.forest}>
        <rect x="-2" y="-20" width="4" height="20" rx="2" transform="rotate(-25)" />
        <rect x="-2" y="-22" width="4" height="22" rx="2" />
        <rect x="-2" y="-20" width="4" height="20" rx="2" transform="rotate(25)" />
      </g>
      <circle cx="20" cy="32" r="3" fill={POM_COLORS.terracotta} />
    </svg>
  );
}

function MarkBadge({ s = 1 }) {
  const px = 48 * s;
  return (
    <svg viewBox="0 0 48 48" width={px} height={px} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="none" stroke={POM_COLORS.forest} strokeWidth="1.2" />
      <circle cx="24" cy="24" r="20" fill={POM_COLORS.cream} />
      <g transform="translate(24 14)" fill={POM_COLORS.forest}>
        <rect x="-0.8" y="-5" width="1.6" height="5" rx="0.6" transform="rotate(-25)" />
        <rect x="-0.8" y="-6" width="1.6" height="6" rx="0.6" />
        <rect x="-0.8" y="-5" width="1.6" height="5" rx="0.6" transform="rotate(25)" />
      </g>
      <circle cx="24" cy="27" r="10" fill={POM_COLORS.terracotta} />
      <ellipse cx="20" cy="24" rx="2.4" ry="3.4" fill={POM_COLORS.amber} opacity="0.4" />
    </svg>
  );
}

const MARK_VARIANTS = {
  pom: MarkPom,
  open: MarkOpen,
  seed: MarkSeed,
  cluster: MarkCluster,
  crown: MarkCrown,
  badge: MarkBadge,
  wedge: MarkPom,
  pip: MarkCluster,
  orb: MarkPom,
  slice: MarkOpen,
  bowl: MarkOpen,
};

export function RelishLogo({ variant = "pom", size = 1, color = "var(--forest)", showWord = true }) {
  const Mark = MARK_VARIANTS[variant] || MarkPom;
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

export function RelishStamp({ variant = "pom", size = 1, color = "var(--cream-soft)" }) {
  const Mark = MARK_VARIANTS[variant] || MarkPom;
  return (
    <span className="relish-stamp" style={{ color }}>
      <Mark s={size * 1.2} />
      <span className="relish-stamp-word" style={{ fontSize: `${44 * size}px` }}>
        Relish<span style={{ color: POM_COLORS.terracotta }}>.</span>
      </span>
      <span className="relish-stamp-tag">Whole foods, honestly</span>
    </span>
  );
}

export const LOGO_VARIANTS = ["pom", "open", "seed", "cluster", "crown", "badge"];
