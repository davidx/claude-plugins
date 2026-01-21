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

1. **Generate the prompt** - Use the gen skill logic with default style
2. **Navigate to Aura.build** - Open https://www.aura.build/create
3. **Handle login if needed** - If not logged in, wait for user to log in
4. **Discover UI elements** - Analyze page to find input and submit
5. **Paste the prompt** - Fill the textarea
6. **Submit** - Click generate
7. **Wait for completion** - Poll until done
8. **Export** - Download HTML
9. **Save** - Save to `./mockups/`

## Login Handling

If the page shows a login prompt or "Sign In" button:
1. Tell the user to log in manually in the browser window
2. Wait and poll until the create page is ready (textarea visible)
3. Then continue with automation

Do NOT use fallbacks. Wait for the user to complete login.

## Dynamic Selector Discovery

**DO NOT use hardcoded selectors.**

1. Take screenshot with `mcp__playwright__playwright_screenshot`
2. Read screenshot image to visually identify elements
3. Get HTML with `mcp__playwright__playwright_get_visible_html`
4. Analyze to find:
   - Text input (textarea, contenteditable, input)
   - Submit button (arrow icon, type="submit", "Generate" text)
   - Export controls (after generation)
5. Use discovered selectors

## Implementation

```
1. Generate the Aura.build prompt
   - Read config/default-style.md for preferences
   - Create detailed prompt per gen skill reference

2. Navigate
   mcp__playwright__playwright_navigate url: https://www.aura.build/create

3. Screenshot and analyze
   - Take screenshot, read it
   - Get HTML
   - Check if logged in (look for textarea vs login prompt)

4. If not logged in:
   - Tell user: "Please log in to Aura.build in the browser window"
   - Poll every 5 seconds until textarea appears

5. Fill prompt
   - Discover textarea selector from HTML
   - mcp__playwright__playwright_fill with discovered selector

6. Submit
   - Discover submit button from HTML
   - mcp__playwright__playwright_click

7. Wait for generation
   - Poll every 10 seconds with screenshots
   - Look for result/preview
   - Max 2 minutes

8. Export
   - Screenshot to find export UI
   - Click export button
   - Click download HTML
   - Get downloaded file path

9. Save
   - mkdir -p ./mockups
   - Move/copy HTML to mockups/aura-{timestamp}.html
```

## Output

- Creates `./mockups/` directory if needed
- Saves: `mockups/aura-YYYY-MM-DD-HHMMSS.html`
- Reports file path on success
