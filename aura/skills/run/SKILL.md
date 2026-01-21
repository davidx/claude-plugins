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
2. **Navigate to Aura.build** - Open https://www.aura.build/create in browser
3. **Paste the prompt** - Fill the textarea with the generated prompt
4. **Submit** - Click the submit button
5. **Wait for completion** - Poll until generation finishes (check for result/preview)
6. **Export** - Click Export → Download HTML
7. **Save** - Save the file to `./mockups/` directory in current working directory

## Selectors (as of Jan 2026)

```
Textarea:     textarea.textarea-custom
Submit:       button[type="submit"]
```

## Implementation Steps

```
1. First, generate the Aura.build prompt using the gen skill's default style
   - Read config/default-style.md for preferences
   - Create detailed prompt with all specifications

2. mcp__playwright__playwright_navigate
   url: https://www.aura.build/create

3. mcp__playwright__playwright_fill
   selector: textarea.textarea-custom
   value: <the generated prompt>

4. mcp__playwright__playwright_click
   selector: button[type="submit"]

5. Wait for generation (poll with screenshots every 5-10 seconds)
   - Look for preview/result to appear
   - Generation typically takes 30-60 seconds

6. Once complete, find and click Export button
   - Take screenshot to locate export UI
   - Click export/download option

7. Save HTML to ./mockups/aura-{timestamp}.html
```

## Output

- Creates `./mockups/` directory if it doesn't exist
- Saves HTML file with timestamp: `mockups/aura-YYYY-MM-DD-HHMMSS.html`
- Reports success with file path

## Error Handling

- If Aura.build UI changes, take screenshot and report what's visible
- If generation fails or times out (>2 min), capture error and abort
- If download fails, try to copy HTML from page source
