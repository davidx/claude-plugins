# Aura Prompt Generator

Generate detailed Aura.build prompts from simple idea descriptions.

## Install

Add the plugin marketplace and install:
```bash
claude plugin marketplace add https://github.com/davidx/claude-plugins
claude plugin install aura
```

Then restart Claude Code.

## Usage

### Generate a prompt with default style
```
/aura:build landing page for a fitness app
```

### Generate with a specific named style
```
/aura:style linear project management dashboard
/aura:style minimal blog homepage
/aura:style rich luxury product showcase
```

### Full automation (generate, run on Aura.build, download HTML)
```
/aura:run landing page for a fitness app
```

## Available Styles

- `linear` - Ultra-clean, productivity-focused (Linear.app inspired)
- `minimal` - Extreme simplicity, content-first
- `rich` - Luxurious, detail-oriented with depth

## Customizing Styles

Edit `config/default-style.md` to change your default aesthetic preferences.

Add new styles by creating files in `config/styles/` directory.
