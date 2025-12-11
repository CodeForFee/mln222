---
name: sonnet-4-5-upgrade
description: Standardize prompts, code, and API usage on Sonnet 4.5. Use this skill when the project must stay on Sonnet (no Opus) but is still referencing Sonnet 4.0/Opus 4.1 strings or older prompt guidance.
---

# Sonnet 4.5 Upgrade Guide

One-shot upgrade from Sonnet 4.0 or Opus 4.1 references to Sonnet 4.5 while keeping the workflow fully compatible with Cursor.

## Upgrade Workflow

1. Search the codebase for model strings, SDK helpers, and API calls.
2. Replace any Sonnet 4.0 / Opus 4.1 identifiers with Sonnet 4.5 strings (see table below).
3. Remove unsupported beta headers (context-1m) and document the limitation.
4. Keep the effort/response configuration consistent (Sonnet 4.5 performs best with `effort: "medium"` or the default when unset).
5. Re-run the relevant tests or prompt dry runs.
6. Summarize the edits for teammates and note that you're capped at Sonnet 4.5.

## Model String Updates

Identify which platform the repository uses, then apply the appropriate target string.

### Unsupported Beta Headers

Remove `context-1m-2025-08-07` if it appears. Leave a short comment so future contributors know why the header is missing.

```python
# 1M context beta (context-1m-2025-08-07) is unavailable on Sonnet 4.5 today.
```

### Target Model Strings (Sonnet 4.5)

| Platform | Sonnet 4.5 model string |
| --- | --- |
| Anthropic 1P API | `claude-sonnet-4-5-20250929` |
| AWS Bedrock | `anthropic.claude-sonnet-4-5-20250929-v1:0` |
| Google Vertex AI | `claude-sonnet-4-5@20250929` |
| Azure AI Foundry | `claude-sonnet-4-5-20250929` |

### Common Source Strings to Replace

| Current string | Replace with |
| --- | --- |
| `claude-sonnet-4-20250514` | `claude-sonnet-4-5-20250929` |
| `anthropic.claude-sonnet-4-20250514-v1:0` | `anthropic.claude-sonnet-4-5-20250929-v1:0` |
| `claude-opus-4-1-20250422` | `claude-sonnet-4-5-20250929` (or platform equivalent) |
| `claude-opus-4-1@20250422` | `claude-sonnet-4-5@20250929` |

**Do not touch** Haiku or other lightweight models; this skill is scoped purely to Sonnet.

## Prompt Adjustments for Sonnet 4.5

Sonnet 4.5 is calmer than Opus but still more literal than 4.0. Only apply the following fixes if the user explicitly reports the corresponding issue—by default, updating the model string is sufficient.

### 1. Tool Overtriggering

Sonnet 4.5 respects system prompts closely. Aggressive wording can cause unnecessary tool calls.

- Replace `CRITICAL:`/`ALWAYS`/`NEVER` with softer equivalents.
- Ensure tool usage guidance is scoped to the actual task (don’t threaten failure for harmless cases).

### 2. Over-Engineering Prevention

Users sometimes see Sonnet 4.5 add abstractions or helper files they didn’t request.

- Drop in a short reminder snippet: “Prefer minimal viable edits. Only introduce new files when the task explicitly requires them.”
- Place the snippet near build/architecture instructions, not arbitrarily at the end.

### 3. Code Exploration Encouragement

If the model suggests fixes without opening files, add a reminder to inspect relevant paths before proposing changes. Keep the wording neutral (“Review the affected files before implementing edits.”).

### 4. Frontend Direction

If UI output looks generic, reference your local frontend skill (e.g., `frontend-design.md`) instead of cloning generic prompts. Mention the intended aesthetic or link to the Cursor rule that enforces it.

### 5. Thinking Sensitivity

When the API request does not set `thinking`, avoid repeating “think/thinker” language. Swap to “consider,” “reason about,” or “double-check” to prevent the model from entering repetitive meta commentary.

## References

- Prompt snippets: keep reusable guidance in your Cursor snippets directory and link to it locally.
- Effort parameter: document the chosen value (or default) in the README so teammates know Sonnet 4.5 is the ceiling.
