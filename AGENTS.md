# Lichtblick Documentation — Agents & Automation

For project-wide conventions, coding standards, and formatting rules, see
[`copilot-instructions.md`](.github/copilot-instructions.md).

This file describes the AI agent architecture for this repository.

## Agent Catalog

See [`.github/CATALOG.md`](.github/CATALOG.md) for the full reference:
agents, skills, automation stack, and typical workflows.

## Agents

| Agent | Purpose |
|-------|---------|
| [`lb-docs-writer`](.github/agents/lb-docs-writer.agent.md) | Creates new documentation pages end-to-end |
| [`lb-docs-reviewer`](.github/agents/lb-docs-reviewer.agent.md) | Reviews pages against project standards |
| [`lb-visual-regression`](.github/agents/lb-visual-regression.agent.md) | Detects screenshot drift after app updates |
| [`lb-docs-search`](.github/agents/lb-docs-search.agent.md) | Audits search discoverability and metadata |

## Skills

Skills are reusable instruction sets invoked by agents — not standalone.

| Skill | Purpose |
|-------|---------|
| [`docusaurus-conventions`](.github/skills/docusaurus-conventions/SKILL.md) | Page structure, frontmatter, formatting |
| [`screenshot-workflow`](.github/skills/screenshot-workflow/SKILL.md) | Playwright MCP screenshot capture process |
| [`app-setup`](.github/skills/app-setup/SKILL.md) | Loading layouts and extensions before screenshots |

## Design Principles

- **Human-in-the-loop** — Agents pause at defined checkpoints for human
  review before proceeding. No agent commits, pushes, or opens PRs autonomously.
- **Source of truth** — Agents with write responsibilities (writer) must
  investigate the Lichtblick source code for technical accuracy, not rely
  solely on existing documentation.
- **Separation of concerns** — Writing and reviewing are separate agents.
  The reviewer does not fix issues; the writer does not self-review.
- **Shared conventions** — All agents follow the standards in
  [`copilot-instructions.md`](.github/copilot-instructions.md). Agent files
  define behavior and workflow, not formatting rules.
