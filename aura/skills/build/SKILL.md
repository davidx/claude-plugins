---
name: build
description: Generate an Aura.build prompt with default style preferences
---

# Aura Prompt Generator

Transform the user's simple idea into a comprehensive Aura.build prompt.

## Your Role

You are a UI/UX expert who transforms vague ideas into detailed, actionable prompts for Aura.build's HTML generation AI, selecting the appropriate style based on what's being built.

## Process

1. **Read style guide** - Load `config/default-style.md` for style selection logic
2. **Analyze the idea** - Understand what the user wants to build
3. **Determine style** - Based on the style selection logic:
   - **Use Linear style** (`config/styles/linear.md`) for:
     - Admin panels, dashboards, internal tools
     - Productivity apps, task managers, project management
     - Data-dense interfaces (tables, lists, complex forms)
     - When user explicitly requests "linear" or "linear-inspired"
     - When described as "heavily UX-focused" or "app-like"
   - **Use Website style** (from `config/default-style.md`) for:
     - Marketing sites, landing pages
     - E-commerce, portfolios, blogs
     - Content-focused or promotional pages
4. **Identify components** - Break down into specific UI components needed
5. **Apply chosen style** - Incorporate colors, typography, spacing, animations from the selected style
6. **Generate detailed prompt** - Create a comprehensive prompt following Aura.build best practices

## Output Format

Present the generated prompt in a clean, copy-ready format:

```
[AURA.BUILD PROMPT]

<the comprehensive prompt here, with style preferences applied>
```

---

# Aura.build Prompting Reference

## HTML Generation Tips

### 1. Specify the framework or library
Mention whether you want vanilla HTML/CSS or a specific framework like Tailwind CSS, Bootstrap, or Material UI.

Example: "Generate a contact form using Tailwind CSS with responsive design and form validation."

### 2. Define the component structure
Outline the key elements you need.

Example: "Create a product card with image at the top, product title, price, short description, and an 'Add to Cart' button."

### 3. Include responsive behavior requirements
Specify how your design should adapt to different screen sizes.

Example: "Create a navbar that collapses into a hamburger menu on mobile devices under 768px width."

### 4. Reference a style guide or brand colors
Provide color codes or style information.

Example: "Use the color palette #3A86FF (primary), #FF006E (accent), and #FFFFFF (background) with rounded corners (8px radius)."

### 5. Mention interactive elements
Describe any animations or effects.

Example: "Include a hover effect that scales the card by 1.05x and adds a subtle shadow when users hover over the product."

### 6. Provide a reference or inspiration
Point to existing designs.

Example: "Create a testimonial section similar to those on Airbnb's homepage with avatar, quote, and customer name."

---

## Component Prompt Templates

### Hero Section
"Generate a modern hero section for a SaaS product with Tailwind CSS. Include a headline, subheading, CTA button, and a floating mockup image on the right side. Make it fully responsive."

### Pricing Table
"Create a 3-tier pricing table with Tailwind CSS. Each card should have a plan name, price, feature list with checkmarks, and a signup button. Highlight the recommended plan and make it responsive."

### Navigation Bar
"Design a sticky navigation bar with logo on left, navigation links in center, and login/signup buttons on right. Make it collapse to a hamburger menu on mobile, with a smooth slide-in animation."

### Testimonial Cards
"Create a testimonial section with 3 cards in a row. Each card should have a customer image, quote, name, and position. Use a clean design with subtle shadows and rounded corners. Add a star rating at the top of each card."

---

## Responsive Design Strategies

### 1. Specify breakpoints
Define exactly when layouts should change.

Example: "Create a layout that switches from 3 columns on desktop (1024px+) to 2 columns on tablet (768px to 1023px) and 1 column on mobile (below 768px)."

### 2. Describe mobile-specific behaviors
Detail how elements should adapt.

Example: "On mobile, the navigation menu should collapse into a hamburger icon that, when clicked, reveals a full-screen overlay menu with a close button in the top-right corner."

### 3. Prioritize content for mobile
Explain what content is most important.

Example: "On mobile, prioritize the sign-up form by placing it above the feature list. On desktop, display them side-by-side."

### 4. Specify touch-friendly elements
Request appropriate sizing for touch interfaces.

Example: "Make all buttons at least 44px tall on mobile for better touch targets, with 16px spacing between interactive elements."

---

## Device Framing

For more realistic mockups, request your UI to be framed within appropriate device containers:

### Desktop Browser Frame
"Create a landing page and frame it within a modern browser window with macOS-style traffic light buttons (red, yellow, green) in the top-left corner."

### iPhone Frame
"Design a mobile app screen for a fitness tracker, and place it inside a modern iPhone frame with the notch/Dynamic Island at the top."

### iPad Frame
"Create a tablet version of our dashboard and display it within an iPad Pro frame with thin bezels and rounded corners."

### Framing Tips
- Specify exact device models: "Frame this design in an iPhone 14 Pro" is better than "put this in a phone frame"
- Request contextual elements: Include URL bars for browser frames or status bars with realistic time/battery indicators for mobile frames
- Add environmental context: "Show the iPhone on a wooden desk with soft lighting" creates more realistic mockups
- Consider angle and perspective: "Show the iPad at a slight angle (15°) with a subtle shadow beneath it" adds depth

---

## Styling & Frameworks

### Be explicit about CSS frameworks
"Generate a contact form using Bootstrap 5 with form validation and floating labels" is better than just "Create a contact form."

### Include specific class patterns
For Tailwind users: "Use Tailwind's container class with mx-auto and px-4 for proper spacing and centering."

### Specify design system or component library
"Create a dashboard layout using Material UI components with a sidebar, header, and main content area."

### Mention CSS architecture
"Use BEM methodology for CSS class naming and organization with separate component-based stylesheets."

### Reference known styles
"Design a settings page in the style of Apple's iOS interface" or "Create a music player with Spotify's dark theme aesthetic."

---

## Typography & Fonts

### Recommended Modern Web Fonts

**Sans-Serif UI Fonts:**
- **Inter** - A versatile, highly legible sans-serif designed for screens. Weights: 300-700
- **Geist** - Modern sans-serif by Vercel with compact spacing and softly bent arcs. Weights: 300-700
- **Plus Jakarta Sans** - Friendly sans-serif designed for digital interfaces. Weights: 300-800
- **Manrope** - Modern geometric sans-serif with clean lines and balanced proportions. Weights: 300-800
- **IBM Plex Sans** - Corporate typeface with excellent legibility for enterprise apps. Weights: 300-700

**Monospace:**
- **Geist Mono** - Clean monospaced companion to Geist Sans, ideal for code. Weights: 300-700

### Font Size Scale
- H1 Display: 2.5rem - 3rem (40-48px)
- H2 Heading: 1.75rem - 2rem (28-32px)
- H3 Subheading: 1.25rem - 1.5rem (20-24px)
- Body Text: 1rem (16px)
- Small Text: 0.875rem (14px)
- Micro / Caption: 0.75rem (12px)

### Font Weights
- Light (300): Subtitles, secondary text
- Regular (400): Body text, paragraphs
- Medium (500): Emphasis, subheadings
- Semibold (600): Buttons, important text
- Bold (700): Headings, strong emphasis

### Letter Spacing
- Tight (-0.025em): For large headlines
- Normal (0em): For body text
- Wide (0.025em): For improved legibility
- Extra Wide (0.1em): For uppercase text

### Typography Prompt Example
"Create a landing page using Inter font with the following typography scale:
- Headings: 40-60px, font-weight: 640, letter-spacing: -0.06em
- Subheadings: 28-36px, font-weight: 560, letter-spacing: 0.00em
- Body text: 14-16px, font-weight: 460, line-height: 1.5
- Button text: 14px, font-weight: 560
- Ensure proper contrast and hierarchy between text elements"

### Font Pairing Strategies

**Serif + Sans-Serif** (Classic contrast):
"Create a landing page using Playfair Display for headings and Inter for body text. Use a dramatic size contrast with headings at 64px and body text at 16px."

**Sans-Serif + Sans-Serif** (Modern cohesive):
"Design a website with Bricolage Grotesque (600 weight) for headings and Inter for body text. This creates a strong but cohesive visual hierarchy."

**Weight Contrast** (Same family):
"Use Inter Black (900) for headings and Inter Regular (400) for body text."

**Serif Editorial**:
"Generate a blog layout using Merriweather Bold for headings and IBM Plex Serif for body text, creating a scholarly, refined typography system."

### Responsive Typography

**Fluid Typography**:
"Create a landing page with fluid typography that scales between mobile and desktop: Headings clamp(32px, 5vw, 64px), Subheadings clamp(24px, 3vw, 36px), Body clamp(16px, 1vw, 18px)."

**Breakpoint-Based**:
"Create typography that changes at breakpoints: Headings 48px on desktop, 36px on tablet, 24px on mobile. Body text 18px on desktop, 16px on tablet, 14px on mobile."

---

## Animation Techniques

### Fade-in Effects
"Add a simple fade-in animation to the hero section that transitions from opacity 0 to 1 over 800ms with an ease-in-out timing function."

### Slide-in Animations
"Create a slide-in animation for the sidebar that enters from the left with a transform: translateX(-100%) to translateX(0) transition."

### Blur Effects
"Apply a blur-in effect to images where they start with filter: blur(10px) and transition to filter: blur(0) when they enter the viewport."

### Sequenced Animations
"Create a staggered entrance for list items where each item appears 150ms after the previous one using incremental animation-delay values."

### Animation Timing & Delays
- **Duration**: Set animation-duration for how long an animation takes. Example: `animation-duration: 500ms;`
- **Delay**: Use animation-delay to postpone the start. Example: `animation-delay: 250ms;`
- **Timing Function**: Control acceleration. Example: `animation-timing-function: ease-in-out;`
- **Negative Delays**: Start an animation partway through its cycle. Example: `animation-delay: -2s;`

### Best Practices
Keep animations subtle and purposeful. Use the prefers-reduced-motion media query to respect user preferences for reduced motion. Aim for animations under 500ms for UI interactions to maintain responsiveness.

### Text Animations

**Character Reveal**: "Create a typing animation that reveals each character with a 50ms delay between characters for the main headline."

**Word Fade Up**: "Create a staggered fade-up animation for each word in the tagline, with 100ms delay between each word, moving from 10px below to their final position."

**Gradient Text**: "Apply a moving gradient background from blue to purple to the main heading, with the gradient animating horizontally over 3 seconds in a loop."

**Clipped Slide In**: "Create a text animation that slides in with a clipping mask effect that reveals the text from left to right over 800ms with an ease-out timing function."

### Card Animations

**Hover Scale**: "Add a hover effect to product cards that scales them to 1.05x their size and adds a subtle shadow with a smooth 300ms transition."

**Tilt Effect**: "Create a 3D tilt effect for feature cards that responds to cursor position, with a maximum rotation of 10 degrees and a subtle shadow that shifts with the tilt angle."

**Staggered Entrance**: "Implement a staggered entrance animation for testimonial cards where each card fades in and moves up with a 100ms delay between each card."

**Flip Card**: "Create flip cards that rotate 180 degrees on hover to reveal additional information on the back side, with a smooth 3D rotation effect."

### Button Animations

**Scale & Color**: "Create a button that scales to 1.05x size and shifts from blue-500 to blue-600 on hover with a 250ms transition."

**Ripple Effect**: "Add a Material Design-inspired ripple effect that expands from the click point outward with a subtle fade-out animation."

**Border Animation**: "Create a button with an animated border that appears to draw around the button's perimeter on hover, taking 1 second to complete."

**Icon Slide**: "Create a button where the text slides left and an arrow icon appears from the right on hover, with a smooth 300ms transition."

**Pulse Effect**: "Add a pulsing glow effect to the CTA button that expands and fades out repeatedly to draw attention to important actions."

**Loading State**: "Create a button that shows a loading spinner when clicked, with text fading out and spinner fading in during the loading state."

### Alert Animations

**Slide Down**: "Create a success alert that slides down from the top of the page, remains visible for 5 seconds, then slides back up and out of view."

**Fade & Shake**: "Create an error alert that fades in and shakes horizontally three times to draw attention to critical errors."

**Toast Notification**: "Create a toast notification that slides in from the right edge, shows a progress bar indicating time until auto-dismiss, then slides out."

**Stacked Alerts**: "Create a system for stacked notifications where new alerts appear at the bottom and push existing alerts upward."

### Animation Duration Guidelines
- Ultra-fast (100ms): Micro-interactions
- Fast (200-300ms): Hover effects, buttons
- Medium (400-600ms): Modals, alerts
- Slow (700ms-1s): Page transitions

---

## JavaScript Visualization Libraries

### Three.js
Create 3D scenes, models, and animations directly in the browser.

Example: "Create a landing page with a Three.js background featuring a slow-rotating 3D model of our product."

### COBE.js
Lightweight library for creating interactive 3D globes.

Example: "Add a COBE.js globe to our 'Global Presence' section that highlights our office locations with markers."

### Vanta.js
Animated backgrounds with minimal configuration.

Example: "Use Vanta.js BIRDS effect as a subtle animated background for our newsletter signup section."

### GSAP
Professional-grade animation library for modern websites.

Example: "Implement a staggered fade-in animation using GSAP for the features list as users scroll down the page."

---

## Tailwind's Design System

### Color System
Tailwind uses a numeric scale for color intensity, from 50 (lightest) to 900 (darkest).

Example: "Create a button with a blue-600 background that changes to blue-700 on hover, with white text."

### Spacing System
Tailwind uses a consistent spacing scale where 1 unit equals 0.25rem (4px by default).

Example: "Add p-4 for padding, mt-6 for margin-top, and gap-2 between flex items."

### Typography Scale
Tailwind's font sizes range from text-xs to text-9xl, with standardized line heights.

Example: "Use text-xl font-medium for headings and text-sm text-gray-600 for descriptions."

### Responsive Design Patterns
Tailwind's breakpoint prefixes: sm, md, lg, xl, and 2xl.

Example: "Create a grid with grid-cols-1 on mobile, md:grid-cols-2 on tablets, and lg:grid-cols-3 on desktop."

---

## Responsive Layout Patterns

### Column Drop
Multi-column layout stacks vertically as screen width decreases.
"Create a three-column layout that becomes a single column on mobile, stacking the sections in order of importance."

### Layout Shifter
Elements reposition, not just stack, as screen size changes.
"Design a product showcase where the gallery is on the left on desktop, but moves above the product information on mobile for better visual flow."

### Off Canvas
Secondary content is placed off-screen and shown when needed.
"Create a mobile layout with a hamburger menu that reveals a slide-out navigation drawer from the left side when clicked."

### Mostly Fluid
Grid-based layout that reflows and eventually stacks on smaller screens.
"Create a fluid grid layout with 4 items per row on large screens, 2 per row on tablets, and 1 per row on mobile."

---

## Layout Examples

### Bento Grid
"Design a bento grid layout with mixed sized cells using grid-column-span and grid-row-span. Make the featured item larger than others."

### Dashboard Bento
"Create a metrics dashboard with a bento layout: small KPI cards in the top row (1x1 each), a large chart in the middle (2x2), bar charts on the bottom left (2x1), and a scrollable activity feed on the bottom right (2x1)."

### Portfolio Bento
"Create a personal portfolio homepage with a bento box layout: a featured project spanning 2x2 grid cells, an about me section (1x1) with circular profile photo, skills section (1x2), and three smaller project cards (1x1 each)."

### Media Gallery Bento
"Design a media gallery with a main large image (3x2), a wide image on the top right (3x1), and two smaller images below (2x1 and 1x1). Include hover effects that display image titles."

### Modal Dialog
"Build a modal dialog with header, body, and footer. Include a close button and overlay backdrop with a fade-in animation. Make it responsive with full-width display on small screens."

### List Layouts

**Basic List**: "Create a list of user profiles with circular avatar images on the left, name and role information in the middle, and a chevron icon button on the right for navigation."

**Contact List**: "Create a contacts list with user avatars, names, job titles, and action buttons (call, message) aligned to the right. Use subtle hover effects."

**Settings List**: "Design a settings menu with left-aligned icons, setting names, and toggle switches on the right. Include clear section dividers."

**Notification List**: "Create a notification feed with color-coded categories (red for alerts, blue for information, green for success), notification content, and relative timestamps. Include unread indicators."

**Product List**: "Design a product list with product images, names, prices, brief descriptions, and add-to-cart buttons. Include stock indicators and rating stars."

### List Layout Best Practices
- Maintain consistent spacing between list items
- Use clear visual hierarchies for primary/secondary information
- Consider dividers or alternating backgrounds for long lists
- Ensure touch targets are at least 44px tall on mobile
- Include clear feedback states (active, hover, focus)

### Alerts
"Design alert components with success, error, warning, and info variants. Include an icon, message, and dismiss button."

### Sidebar Navigation
"Create a dashboard layout with fixed-width sidebar navigation, active state indicators, and a main content area."

### Advanced Grid Layout
"Create a responsive grid layout with various cell sizes using grid-template-areas for complex content organization."

### Action Bar / Toolbar
"Build an action bar with formatting controls, dividers, and primary action button for content editing interfaces."

### Top Navigation Bar
"Design a responsive navigation bar with logo, menu links, and user profile. Include dropdown menus and a mobile hamburger toggle."

---

## Advanced Techniques

### Chain your requests
Start with a basic structure, then refine in subsequent prompts: "Now add form validation to the contact form with appropriate error messages."

### Provide example code snippets
Share a code snippet you like and ask: "Create a product listing page following this component structure but styled with Tailwind CSS."

### Use persona-based prompting
"Create HTML/CSS for a pricing section as if you were an experienced UI designer specializing in SaaS products."

### Request accessibility features
"Create a form with WCAG 2.1 AA compliance, including proper aria labels, keyboard navigation, and focus states."

---

## Style Presets

Based on the idea, suggest appropriate styles:

- **SaaS/Tech**: Clean, minimal, blue/purple gradients, Inter font
- **E-commerce**: Bold, high contrast, clear CTAs, product-focused
- **Portfolio**: Artistic, unique layouts, serif accents, generous whitespace
- **Dashboard**: Dark mode option, data visualization colors, monospace for numbers
- **Blog/Content**: Readable, serif for body, clear hierarchy
- **Mobile App Landing**: Device frames, app store buttons, feature highlights

---

## Prompt Generation Checklist

When generating a prompt, always include:

1. **Framework**: Tailwind CSS (default) or specified framework
2. **Layout Structure**: Header, sections, footer arrangement
3. **Components**: All UI elements with specific details
4. **Colors**: Hex codes for primary, accent, background, text
5. **Typography**: Font family, sizes, weights
6. **Spacing**: Padding, margins, gaps
7. **Responsive**: Mobile, tablet, desktop breakpoints
8. **Interactions**: Hover, focus, active states
9. **Animations**: Entry animations, transitions
10. **Accessibility**: ARIA labels, focus states, contrast
