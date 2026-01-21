---
name: run
description: Generate prompt, run on Aura.build, download HTML
---

# Aura Run

Generate prompt → run on Aura.build → download HTML to `./mockups/`

## Usage

```
/aura:run <your idea>
```

## Implementation

1. Generate the Aura.build prompt using gen skill (read config/default-style.md)
2. Run the script:

```bash
node /path/to/plugin/bin/run-aura.js "<generated_prompt>"
```

The script:
- Launches Brave with user's profile if needed
- Connects via CDP
- Fills form, submits, waits for generation
- Exports HTML to `./mockups/`

## Output

`./mockups/aura-YYYY-MM-DD-HHMMSS.html`
