# Claude Plugins

A collection of plugins for Claude Code.

## Installation

Add this marketplace to Claude Code:
```bash
claude plugin marketplace add https://github.com/davidx/claude-plugins
```

Then install individual plugins:
```bash
claude plugin install <plugin-name>
```

## Available Plugins

### aura

Generate detailed Aura.build prompts from simple idea descriptions. Transform vague UI ideas into comprehensive, well-structured prompts optimized for Aura.build's AI-powered HTML generation.

**Skills:**
- `/aura:build` - Generate a prompt with default style preferences
- `/aura:style <name> <idea>` - Generate with a specific named style (linear, minimal, rich)
- `/aura:run` - Full automation: generate prompt, run on Aura.build, download HTML

```bash
claude plugin install aura
```

### proceed

Auto-continue mode for long-running tasks. Prevents Claude from stopping to ask for confirmation, keeping execution flowing until completion.

**Skills:**
- `/proceed` - Enable auto-continue mode

```bash
claude plugin install proceed
```

## Plugin Structure

Each plugin follows this structure:
```
plugin-name/
├── .claude-plugin/
│   └── plugin.json       # Plugin metadata
├── skills/
│   └── skill-name/
│       └── SKILL.md      # Skill definition
├── config/               # Optional configuration
└── README.md             # Plugin documentation
```
