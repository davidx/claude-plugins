---
name: run
description: Generate prompt, open Aura.build, run it, and download the HTML
---

# Aura Run

Automates the full workflow: generate prompt → paste into Aura.build → run → download HTML.

Uses **agent-browser** with user's Brave profile (preserves Aura.build login).

## Usage

```
/aura:run <your idea>
```

## Implementation

Claude executes this workflow:

```bash
# Ensure agent-browser installed
which agent-browser || npm install -g agent-browser

# Launch Brave with user's profile (has their login cookies)
agent-browser open "https://www.aura.build/create" \
  --executable-path "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser" \
  --user-data-dir "$HOME/Library/Application Support/BraveSoftware/Brave-Browser" \
  --headed

# Get accessibility tree
agent-browser snapshot -i --json
# Analyze output to find elements

# Fill prompt
agent-browser find role textbox fill "<generated_prompt>"

# Submit
agent-browser find role button click

# Wait for generation
agent-browser wait --text "Export" --timeout 120000

# Export HTML
agent-browser find text "Export" click
agent-browser wait 500
agent-browser find text "Download" click

# Save
mkdir -p ./mockups
mv ~/Downloads/aura*.html ./mockups/aura-$(date +%Y-%m-%d-%H%M%S).html
```

## Output

`mockups/aura-YYYY-MM-DD-HHMMSS.html`
