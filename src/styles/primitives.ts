export const interactiveFocusClassName =
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10";

export const cardSurfaceClassName = "rounded-xl border border-border bg-surface shadow-md";

export const mutedCardSurfaceClassName =
  "rounded-lg border border-border bg-surface-muted shadow-sm";

export const formControlBaseClassName =
  "w-full rounded-md border border-border bg-surface text-start text-sm text-text placeholder:text-text-soft transition-[box-shadow,background-color,border-color] duration-200 hover:ring-2 hover:ring-border/50 focus:outline-none focus:bg-surface focus:ring-3 focus:ring-border/70 disabled:pointer-events-none disabled:border-border disabled:bg-surface-muted disabled:text-text-soft disabled:opacity-70";

export const formControlErrorClassName =
  "border-error/50 text-text hover:border-error/60 focus:border-error/60 focus:ring-error/10";

export const formControlSizeClassNames = {
  small: "px-3 py-2 text-sm",
  normal: "px-3.5 py-2.5 text-sm",
  large: "px-4 py-3 text-base",
} as const;

export const stepIndicatorClassNames = {
  current: "border-primary bg-primary text-white shadow-sm",
  completed: "border-primary/15 bg-primary-soft text-primary",
  upcoming: "border-border bg-surface text-text-soft",
} as const;
