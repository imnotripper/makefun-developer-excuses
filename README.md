[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/imnotripper/makefun-developer-excuses/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/imnotripper/makefun-developer-excuses/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

# Make the AI Judge Laugh: Developer Excuses

Entry for the [make.fun bounty](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3): one funny single-line excuse a developer gives when code breaks in production.

## The excuse

> It wasn't a DDoS attack, it was my load test pointed at prod with the staging flag off.

**87 characters** — one line, pure ASCII, no trailing newline.

The joke: it opens with the alarming diagnosis everyone feared, then the
reveal is the developer's own tool, aimed at the wrong target by one
forgotten flag. Specific, self-incriminating, and instantly recognisable
to anyone who has ever pointed a test at the wrong environment. See
[selection.md](selection.md) for the 12-candidate pool, scoring against
the five judge criteria, and the elimination rounds that picked this line.

## How it works

`main.ts` is a deterministic emitter. It holds the excuse as a fixed
constant, validates it (1-200 characters, non-blank, single line, pure
ASCII), writes it to `/output/entry.txt` with no trailing newline, sets
mode `0644`, reads the file back, and fails loudly if the bytes differ.
No network, no randomness, no clock — two runs produce byte-identical
output.

## How to run

Requires Node 22 (which runs TypeScript directly):

```sh
node main.ts
node --test test.ts
```

`main.ts` writes `/output/entry.txt` and logs the character count.
`test.ts` checks the pinned excuse and length, valid UTF-8 single-line
output with no trailing newline, mode `0644`, and byte-identical output
across two runs.

## Gate checklist (verified locally)

- `/output/entry.txt`: 87 characters, 1-200, non-blank, single line, pure ASCII
- No trailing newline (verified with `od -c`)
- File mode `0644`, two runs byte-identical
- `node --test test.ts`: 4/4 passing

## License

MIT — see [LICENSE](LICENSE).
