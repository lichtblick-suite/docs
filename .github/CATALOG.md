# AI Agent Catalog — Lichtblick Documentation

Reference document for the team. Lists all agents, skills, and automation in this
repository, when to use each, and how they relate to each other.

> For project-wide conventions, see [`AGENTS.md`](../AGENTS.md).
> For contribution guidelines, see [`README.md`](../README.md).

---

## Agents

### `lb-docs-writer` — Documentation Writer

| | |
|---|---|
| **File** | `.github/agents/lb-docs-writer.agent.md` |
| **Purpose** | Creates a new documentation page end-to-end: pre-flight setup, outline, screenshots, writing, and validation |
| **Input** | Panel, feature, or topic name |
| **Output** | One `.md` page + PNG screenshots, passing lint and build |
| **HITL checkpoints** | Pre-flight questions → outline approval → page review |
| **Use when** | Documenting a new panel or feature from scratch |
| **Do not use for** | Updating existing pages (use manually or ask the reviewer to flag what needs changing) |

---

### `lb-docs-reviewer` — Documentation Reviewer

| | |
|---|---|
| **File** | `.github/agents/lb-docs-reviewer.agent.md` |
| **Purpose** | Reviews one or more pages against all project standards and produces a structured findings report |
| **Input** | File path, directory, or `"changed"` |
| **Output** | Findings table (Error / Warning / Info) + lint output + merge verdict |
| **HITL checkpoints** | Report delivery — human decides to fix, override, or approve |
| **Use when** | Pre-merge review, auditing an existing section, or checking AI-generated output |
| **Do not use for** | Fixing the issues it finds — that is the writer's or a human's job |

---

### `lb-visual-regression` — Visual Regression

| | |
|---|---|
| **File** | `.github/agents/lb-visual-regression.agent.md` |
| **Purpose** | Re-captures documentation screenshots and compares them visually with committed baselines to detect UI drift |
| **Input** | Panel name, image path, or `"all"` |
| **Output** | Visual regression report: changed / unchanged / unverifiable per screenshot + recommended actions |
| **HITL checkpoints** | Scope confirmation → report delivery (agent never overwrites baselines without instruction) |
| **Use when** | After a Lichtblick app release, or when screenshots look outdated |
| **Do not use for** | First-time screenshot capture — use the writer for that |

---

### `lb-docs-search` — Search & Discoverability

| | |
|---|---|
| **File** | `.github/agents/lb-docs-search.agent.md` |
| **Purpose** | Audits metadata quality, cross-reference completeness, and content gaps to ensure pages are discoverable via Algolia search and navigation |
| **Input** | Directory, file path, or `"all"` |
| **Output** | Discoverability audit: metadata scores, missing cross-references, content gaps, and recommendations |
| **HITL checkpoints** | Report delivery — agent produces recommendations only, no edits |
| **Use when** | Periodic SEO/discoverability review, after adding a new section, or before a major release |
| **Do not use for** | Fixing the gaps it identifies — act on recommendations manually or via the writer |

---

## Skills

Skills are reusable instruction sets invoked by agents. They are not standalone
agents — they have no frontmatter `tools` list and cannot be invoked directly.

| Skill | File | Purpose |
|-------|------|---------|
| `docusaurus-conventions` | `.github/skills/docusaurus-conventions/SKILL.md` | Frontmatter requirements, page templates, formatting rules, markdownlint reference |
| `screenshot-workflow` | `.github/skills/screenshot-workflow/SKILL.md` | Full Playwright MCP process: browser mode, viewport, data loading, element-scoped capture |
| `app-setup` | `.github/skills/app-setup/SKILL.md` | Loading layout JSON files and installing `.foxe` extensions via Playwright before screenshots |

---

## Automation Stack

| Layer | Trigger | What runs | Catches |
|-------|---------|-----------|---------|
| Claude Code hook | AI writes a `.md` file | `yarn lint:md` | Lint errors, immediately |
| Husky `pre-commit` | `git commit` | `yarn lint:md` | Lint errors |
| Husky `pre-push` | `git push` | `yarn build` | Broken links, missing images |
| GitHub Actions CI | Pull request / push | Full build + lint | Everything, as final backstop |

---

## Typical Workflows

### Writing a new panel page

```
1. Open lb-docs-writer → answer pre-flight → approve outline → review page
2. Open lb-docs-reviewer "changed" → review findings → fix any errors
3. git commit  (Husky runs lint)
4. git push    (Husky runs build)
5. Open PR
```

### Updating screenshots after an app release

```
1. Open lb-visual-regression "all" → confirm scope → review report
2. Instruct agent to update flagged screenshots
3. Open lb-docs-reviewer "changed" → verify no regressions introduced
4. git commit + git push + PR
```

### Periodic discoverability audit

```
1. Open lb-docs-search "all" → review report
2. Prioritise content gaps and weak metadata with the team
3. Use lb-docs-writer to fill identified gaps
```
