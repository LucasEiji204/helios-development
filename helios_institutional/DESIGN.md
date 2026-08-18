---
name: Helios Institutional
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#c5c5d3'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3035'
  outline: '#8f909c'
  outline-variant: '#444651'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#102974'
  primary-container: '#001e6a'
  on-primary-container: '#7589d8'
  inverse-primary: '#455aa5'
  secondary: '#b7c4ff'
  on-secondary: '#002682'
  secondary-container: '#0050f8'
  on-secondary-container: '#dadfff'
  tertiary: '#ffb5a1'
  on-tertiary: '#5d1805'
  tertiary-container: '#4f0e00'
  on-tertiary-container: '#d57258'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#2c418b'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001552'
  on-secondary-fixed-variant: '#0038b6'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a1'
  on-tertiary-fixed: '#3c0800'
  on-tertiary-fixed-variant: '#7b2e19'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 24px
  unit-xl: 48px
  unit-xxl: 96px
---

## Brand & Style

The design system is engineered for **Helios Development**, a firm characterized by institutional authority, technological precision, and deep-domain expertise. The brand personality is stoic, reliable, and forward-looking, evoking the steady confidence of established infrastructure.

The visual style is **Corporate / Modern** with a lean toward **Minimalist Institutionalism**. It avoids the transient trends of consumer SaaS in favor of a "permanent" aesthetic. The interface uses high contrast, expansive whitespace, and rigid grid alignment to communicate stability. Visual interest is derived from mathematical geometry—subtle radial arcs and orbital lines—referencing the celestial nature of the brand's namesake without compromising its professional rigor.

## Colors

The palette is anchored in a deep navy-to-black spectrum, creating a high-fidelity environment that feels premium and focused. 

- **Primary (Institutional Blue):** Reserved for core branding elements and low-frequency, high-impact surface accents.
- **Secondary & Accent (Action Blues):** Used sparingly for interactive elements, progress indicators, and primary CTAs to ensure they command attention against the dark canvases.
- **Neutrals:** A cold-scale grey palette ensures maximum legibility. Text colors are strictly tiered to guide hierarchy, with `#F5F7FA` providing a sharp contrast against the `#030712` base.

## Typography

This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian appearance. The hierarchy relies on substantial weight variance and tight letter-spacing for large-scale displays.

- **Headlines:** Use SemiBold (600) and Bold (700) weights. "Display" sizes should utilize negative letter-spacing to appear more compact and authoritative.
- **Body Text:** Primarily uses the Regular (400) weight for long-form legibility. Line heights are generous (1.6x) to facilitate scanning in high-density data environments.
- **Labels:** Small labels and UI metadata utilize uppercase with increased letter-spacing to differentiate from body text.

## Layout & Spacing

The system follows a **Fixed Grid** philosophy. Content is centered within a maximum container width of 1280px, ensuring a consistent reading experience on ultra-wide monitors common in institutional settings.

- **Grid Model:** A 12-column grid is used for desktop layouts.
- **Whitespace:** Use "generous gaps" (unit-xl and unit-xxl) between major sections to emphasize focus and prestige. 
- **Rhythm:** All internal component spacing (padding, margins) must be a multiple of 8px.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to 4 columns, and margins reduce to 20px. Display typography scales down significantly to maintain vertical rhythm.

## Elevation & Depth

To maintain a grounded, institutional feel, this design system avoids floating shadows and "pop" effects. Depth is conveyed through:

- **Tonal Layering:** The background is the darkest layer (#030712). Content containers use slightly lighter navies (#050B18, #08142A) to indicate separation.
- **Low-Contrast Outlines:** Instead of shadows, surfaces are defined by 1px borders using `#101F3A` or `#0D1B32`. This creates a "blueprint" or "technical" aesthetic.
- **Geometric Overlays:** Subtle, large-scale radial gradients (15% opacity Helios Blue) can be positioned in the background to provide a sense of atmospheric depth without disrupting the flatness of the UI.

## Shapes

The shape language is primarily **Soft (1)**. A subtle 4px radius is applied to buttons and inputs to prevent them from appearing overly aggressive, while maintaining a precise, engineered look.

- **Interactive Elements:** Standard radius is 4px.
- **Containers:** Larger surfaces and sections utilize 8px (rounded-lg) for a more architectural feel.
- **Geometric Accents:** Decorative elements derived from the logo (arcs and orbits) should be mathematically perfect circles. If a pill-shape is required (e.g., for status tags), it is the only exception to the 4px rule.

## Components

- **Buttons:** 
  - *Primary:* Solid `#1557FF` background, `#F5F7FA` text. No shadow. 4px radius.
  - *Secondary:* Transparent background with a 1px border of `#3D7CFF`. 
  - *Interaction:* On hover, backgrounds shift slightly lighter; no "lift" or movement.
- **Input Fields:** 
  - Background: `#050B18`. Border: 1px solid `#101F3A`. 
  - Active state: Border changes to `#3D7CFF` with a subtle outer glow (not a shadow).
- **Cards:** 
  - No shadows. Use `#08142A` background with a subtle border of `#0D1B32`. 
  - Padding: 32px (unit-lg) for institutional breathing room.
- **Chips/Status:** 
  - Small, uppercase text. Backgrounds are low-saturation versions of the status color (e.g., a dark emerald for "success") to maintain the dark-mode harmony.
- **Micro-interactions:**
  - Fades should be 200ms ease-in-out. 
  - Line animations (e.g., a 1px line drawing itself under a heading) can be used to signal section reveals.