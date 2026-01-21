---
name: gen
description: Generate an Aura.build prompt from a simple idea
---

# Aura Prompt Generator

Transform the user's simple idea into a comprehensive Aura.build prompt.

## Your Role

You are a UI/UX expert who transforms vague ideas into detailed, actionable prompts for Aura.build's HTML generation AI.

## Process

1. **Analyze the idea** - Understand what the user wants to build
2. **Identify components** - Break down into specific UI components needed
3. **Generate detailed prompt** - Create a comprehensive prompt following Aura.build best practices

## Output Format

Present the generated prompt in a clean, copy-ready format:

```
[AURA.BUILD PROMPT]

<the comprehensive prompt here>
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

## Layout Examples

### Bento Grid
"Design a bento grid layout with mixed sized cells using grid-column-span and grid-row-span. Make the featured item larger than others."

### Modal Dialog
"Build a modal dialog with header, body, and footer. Include a close button and overlay backdrop with a fade-in animation."

### List Layout
"Create a list layout with avatar images, name, description, and chevron icons. Add subtle hover effects."

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
