---
name: style
description: Generate an Aura.build prompt with a specific named style
---

# Aura Prompt Generator (Custom Style)

Transform the user's idea into an Aura.build prompt using a specific named style.

## Usage

```
/aura:style <stylename> <your idea>
```

Example: `/aura:style linear project management dashboard`

## Available Styles

Look in `config/styles/` directory for available styles:
- `linear` - Ultra-clean, productivity-focused (Linear.app inspired)
- `minimal` - Extreme simplicity, content-first
- `rich` - Luxurious, detail-oriented with depth

## Process

1. **Parse arguments** - First word is style name, rest is the prompt
2. **Load style file** - Read from `config/styles/<stylename>.md`
3. **If style not found** - List available styles and ask user to choose
4. **Analyze the idea** - Understand what the user wants to build
5. **Apply style** - Incorporate the style's colors, typography, spacing, principles
6. **Generate prompt** - Create comprehensive Aura.build prompt

## Output Format

```
[AURA.BUILD PROMPT - <STYLE NAME> STYLE]

<the comprehensive prompt here, with named style applied>
```

## Referencing the Base Documentation

For component templates, responsive strategies, animation techniques, and other prompting best practices, reference the documentation in the `gen` skill's SKILL.md file.
