---
name: run
description: Generate prompt, open Aura.build, run it, and download the HTML
---

# Aura Run

Automates the full workflow: generate prompt → paste into Aura.build → run → download HTML.

Uses **agent-browser** to connect to user's existing browser (already logged into Aura.build).

## Usage

```
/aura:run <your idea>
```

Example: `/aura:run dashboard for tracking daily habits`

## Prerequisites

User must have their browser running with remote debugging enabled:

```bash
# Brave
/Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser --remote-debugging-port=9222

# Chrome
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```

Install agent-browser if needed:
```bash
npm install -g agent-browser
```

## Process

1. **Generate the prompt** - Use gen skill with default style
2. **Connect to browser** - Via CDP port 9222
3. **Navigate to Aura.build** - Open https://www.aura.build/create
4. **Discover UI** - Use `snapshot` for accessibility tree
5. **Fill prompt** - Use semantic locators to find textarea
6. **Submit** - Find and click generate button
7. **Wait for completion** - Poll until done
8. **Export HTML** - Click export, download
9. **Save** - Move to `./mockups/`

## Implementation with agent-browser

```bash
# Connect to user's browser
agent-browser connect 9222

# Navigate
agent-browser open "https://www.aura.build/create"

# Get accessibility snapshot to find elements
agent-browser snapshot -i --json

# Find and fill textarea using semantic locators
agent-browser find placeholder "Reference @ template" fill "<prompt>"
# Or by role:
agent-browser find role textbox fill "<prompt>"

# Find and click submit button
agent-browser find role button click
# Or by text/label if needed

# Wait for generation (poll)
agent-browser wait --text "Export" --timeout 120000

# Screenshot to verify
agent-browser screenshot ./mockups/preview.png

# Click export and download
agent-browser find text "Export" click
agent-browser wait 1000
agent-browser find text "Download HTML" click

# Close connection (keeps browser open)
agent-browser close
```

## Dynamic Element Discovery

Use `snapshot -i --json` to get the accessibility tree with element refs:
- Returns elements like `@e1`, `@e2`, etc.
- Shows role, name, text content
- AI analyzes this to find the right elements

Use semantic locators instead of CSS selectors:
- `find role textbox` - Find by ARIA role
- `find text "Generate"` - Find by visible text
- `find label "Prompt"` - Find by form label
- `find placeholder "..."` - Find by placeholder

## Output

- Creates `./mockups/` directory if needed
- Saves: `mockups/aura-YYYY-MM-DD-HHMMSS.html`
- Reports file path on success

## Error Handling

- If not connected: Tell user to launch browser with `--remote-debugging-port=9222`
- If not logged in: Detected via snapshot, tell user to log in, wait, continue
- If generation timeout: Report and abort after 2 min
