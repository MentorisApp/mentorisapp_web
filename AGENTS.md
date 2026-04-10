# UI System Guardrails

This repo uses a simple, breathable design system. Keep the interface quiet and consistent.

## Core Rules

- Use semantic tokens from `src/styles/global.css` instead of raw Tailwind color classes when styling new UI.
- Teal is the primary action color. Use it for primary buttons, active states, focused controls, and selective text emphasis.
- Warm sand is an accent, not a second primary. Use it sparingly for pills, soft highlights, progress decoration, and supporting emphasis.
- Natural greys carry most of the layout weight: page background, cards, secondary buttons, borders, muted surfaces.
- Prefer soft borders, restrained shadows, and rounded corners. Avoid heavy contrast and avoid saturated surfaces outside semantic feedback states.

## Primitive Expectations

- Buttons and inputs should reuse the shared patterns in `src/ui/styles/primitives.ts`.
- Cards should default to `surface`, soft border, `shadow-md`, and generous radius.
- Multi-step flows should use teal for the current step, teal-soft for completed steps, and muted grey for upcoming steps.

## Composition Guidance

- Keep spacing breathable. Do not compress forms or card layouts unless density is explicitly requested.

## When Adding New UI

- Start from tokens and existing primitives before creating new variants.
- If a component needs a new style, make it reusable and semantic rather than solving it with page-local utility strings.
- Default to simple layouts that can scale into cards, pills, steppers, and forms without introducing new colors.
