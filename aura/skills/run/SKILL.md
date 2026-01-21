---
name: run
description: Generate prompt, open Aura.build, run it, and download the HTML
---

# Aura Run

Automates the full workflow: generate prompt → paste into Aura.build → run → download HTML.

## Usage

```
/aura:run <your idea>
```

Example: `/aura:run dashboard for tracking daily habits`

## Process

1. **Generate the prompt** - Use the gen skill logic with default style to create the Aura prompt
2. **Open in user's browser** - Use system default browser (preserves login session)
3. **Discover UI elements** - Take screenshot, analyze to find input and submit elements
4. **Paste the prompt** - Fill the discovered textarea
5. **Submit** - Click the discovered submit button
6. **Wait for completion** - Poll until generation finishes
7. **Export** - Find and click export/download option
8. **Save** - Save the file to `./mockups/` directory

## Browser Strategy

**IMPORTANT**: Use the user's default browser to preserve their Aura.build login session.

On macOS:
```bash
open "https://www.aura.build/create"
```

This opens in their default browser (Brave, Chrome, Safari, etc.) where they're already logged in.

For automation after opening, use Playwright but connect to an existing browser or use CDP.

## Dynamic Selector Discovery

**DO NOT use hardcoded selectors.** The UI may change.

Instead:
1. Take a screenshot with `mcp__playwright__playwright_screenshot`
2. Get page HTML with `mcp__playwright__playwright_get_visible_html`
3. Analyze the screenshot and HTML to identify:
   - The main text input area (likely a textarea or contenteditable div)
   - The submit/generate button (look for arrow icon, "Generate" text, or submit type)
   - The export button (after generation completes)
4. Use the discovered selectors

## Implementation

```
1. Generate the Aura.build prompt
   - Read config/default-style.md for style preferences
   - Create detailed prompt following the gen skill's reference docs

2. Navigate to Aura.build
   mcp__playwright__playwright_navigate
   url: https://www.aura.build/create

3. Discover the UI
   - Take screenshot to visually identify elements
   - Get HTML to find actual selectors
   - Look for: textarea, input fields, submit buttons

4. Fill the prompt
   - Find the text input element from HTML analysis
   - Use mcp__playwright__playwright_fill with discovered selector

5. Submit
   - Find the submit/generate button
   - Use mcp__playwright__playwright_click

6. Wait for generation
   - Poll every 10 seconds with screenshots
   - Look for preview/result appearing
   - Timeout after 2 minutes

7. Export HTML
   - Screenshot to find export UI
   - Click export menu/button
   - Click download HTML option
   - Or: get page HTML directly if download fails

8. Save to ./mockups/
   - Create directory if needed: mkdir -p ./mockups
   - Save as: mockups/aura-{timestamp}.html
```

## Output

- Creates `./mockups/` directory if it doesn't exist
- Saves HTML file with timestamp: `mockups/aura-YYYY-MM-DD-HHMMSS.html`
- Reports success with file path

## Fallback

If Playwright automation fails:
1. Generate the prompt and display it to user
2. Open Aura.build in their browser: `open "https://www.aura.build/create"`
3. Instruct user to paste prompt manually
4. After they export, help save to mockups/
