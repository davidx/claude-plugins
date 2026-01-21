# Default Style Profile

Apply these preferences to ALL generated Aura prompts:

## Aesthetic: Linear-inspired with Rich Details

### Visual Language
- Clean, minimal interface with purposeful negative space
- Subtle depth through layered shadows (not flat, not skeuomorphic)
- Refined micro-interactions that feel responsive and alive
- Muted, sophisticated color palette with strategic accent colors

### Colors
- Background: Off-white or very light gray (#FAFAFA, #F5F5F5) for light mode
- Cards/Surfaces: Pure white with subtle shadow (shadow-sm or custom 0 1px 3px rgba(0,0,0,0.08))
- Primary: Deep violet/indigo (#5E5ADB, #6366F1) or sophisticated blue (#3B82F6)
- Text: Near-black (#171717) for headings, muted gray (#525252) for body
- Borders: Very subtle (#E5E5E5) or none, rely on shadows instead
- Accents: Purposeful pops of color for status/actions

### Typography
- Font: Inter (primary) or Geist
- Headings: font-medium (500), tracking-tight (-0.025em), not bold
- Body: Regular weight, generous line-height (1.6-1.7)
- Size scale: Restrained, not too large. Base 14-15px.
- Letter-spacing: Slightly tight for headings, normal for body

### Spacing & Layout
- Generous padding (p-5, p-6) inside cards/containers
- Consistent gaps (gap-4, gap-6) between elements
- Content max-width containers for readability
- Asymmetric layouts welcome when purposeful

### Components
- Buttons: Subtle rounded corners (rounded-md, not full), solid fills for primary, ghost/outline for secondary
- Cards: Minimal borders, soft shadows, rounded-lg corners
- Inputs: Clean borders, generous padding, clear focus states with ring
- Icons: Lucide or similar, stroke-width 1.5-2, sized appropriately (16-20px)

### Interactions & Animation
- Transitions: 150-200ms, ease-out timing
- Hover states: Subtle background shifts, not dramatic color changes
- Focus: Visible ring (ring-2 ring-offset-2 ring-primary)
- Loading: Skeleton screens over spinners when possible
- Micro-animations: Scale on click (active:scale-[0.98]), subtle transforms

### Principles
- Clarity over decoration
- Every element earns its place
- Quiet confidence, not flashy
- Professional but not sterile
- Details matter but don't overwhelm
