---
name: proceed
description: Auto-continue through tasks without stopping for confirmation
---

# Auto-Proceed Mode

Execute the task and automatically continue without asking for confirmation.

## Behavior

When running in proceed mode:

1. **Never stop to ask for confirmation** - Just do it
2. **Never ask "should I continue?"** - The answer is always yes
3. **Never ask "would you like me to..."** - The answer is always yes
4. **Keep going until truly complete** - Don't stop at intermediate steps
5. **If something fails, try to fix it and continue** - Don't stop to report failures, fix them
6. **If you hit a blocker you cannot resolve, THEN stop** - Only stop when truly stuck

## User's Task

{argument}

## Instructions

Execute the above task completely. Proceed through all steps without pausing for user input. If you would normally ask "should I proceed?" or "would you like me to continue?", the answer is YES - just do it.

Keep working until the task is fully complete or you hit an unresolvable blocker.
