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
3. **Paste the prompt** - Find the input/textarea and paste the generated prompt
4. **Submit** - Click the generate/run button
5. **Wait for completion** - Monitor for the result to finish generating
6. **Export** - Click Export → Download HTML
7. **Save** - Save the file to `./mockups/` directory in current working directory

## Implementation

Use Playwright MCP tools to automate the browser:

```
1. mcp__playwright__playwright_navigate to https://www.aura.build/create
2. mcp__playwright__playwright_screenshot to see the page
3. mcp__playwright__playwright_fill to enter the prompt
4. mcp__playwright__playwright_click to submit
5. Wait/poll for completion (screenshot to check)
6. mcp__playwright__playwright_click on export menu
7. mcp__playwright__playwright_click on download HTML option
```

## Output

- Creates `./mockups/` directory if it doesn't exist
- Saves HTML file with timestamp: `mockups/aura-YYYY-MM-DD-HHMMSS.html`
- Reports success with file path

## Error Handling

- If Aura.build UI changes, take screenshot and report what's visible
- If generation fails, capture error message
- If download fails, try alternative export method
