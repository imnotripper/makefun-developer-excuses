# Excuse selection

makefun anchor a1559c97a201210cb62d28e65ba4077a49ff1a27 round 34237102

Competition: Make the AI Judge Laugh: Developer Excuses
(u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

Angle: one SPECIFIC, concrete incident reveal — a config, a typo, a deploy,
a cache, a merge — where the twist reframes what happened. Punchline last.
Pure ASCII, one line, 1-200 chars. The field is assumed full of
"it worked on my machine" retreads and generic blame ("must be the cache",
"probably DNS"), so none of those appear below.

Scored 1-5 against the judge criteria in order:
1. Funny single-line excuse a developer gives when code breaks in production.
2. Twist a developer recognises, revealing what really happened.
3. Sounds like something a developer would actually say, jargon used right.
4. Lands fast, every word earning its place, nothing to trim.
5. Feels fresh — avoids worn excuses or turns one in a new way.

All character counts below were computed with Node (`String.length`),
not hand-counted, and the winner's count is pinned by a test in test.ts.

## Candidate pool (all written in this session)

| # | Excuse | Chars | C1 | C2 | C3 | C4 | C5 | Total |
|---|--------|------:|---:|---:|---:|---:|---:|------:|
| 1 | It wasn't a DDoS attack, it was my load test pointed at prod with the staging flag off. | 87 | 5 | 5 | 5 | 5 | 4 | 24 |
| 2 | The database didn't crash: I ran the migration on prod because my terminal tab said localhost and I believed it. | 112 | 5 | 5 | 5 | 3 | 4 | 22 |
| 3 | The 500s weren't random: my cron job was deleting the sessions table every hour, on the hour, since Tuesday. | 108 | 5 | 5 | 5 | 4 | 4 | 23 |
| 4 | I told the team the deploy was safe because all tests passed, then remembered I ran them against the wrong branch. | 114 | 5 | 4 | 5 | 3 | 3 | 20 |
| 5 | The cache wasn't stale: I deployed the fix to staging and spent an hour wondering why prod ignored it. | 102 | 5 | 4 | 5 | 4 | 3 | 21 |
| 6 | Turns out the memory leak was my debug logging writing the entire users table to disk on every request. | 103 | 5 | 4 | 5 | 4 | 4 | 22 |
| 7 | The outage wasn't the cloud provider: I typo'd one letter in the config and pointed prod at localhost for an hour. | 114 | 5 | 4 | 5 | 3 | 3 | 20 |
| 8 | I blamed the CDN for an hour before realising I'd shipped the feature flag on and the kill switch off in the same commit. | 121 | 5 | 5 | 5 | 3 | 4 | 22 |
| 9 | The bug wasn't in the code: I'd been testing against prod credentials since Tuesday because my .env lied to me. | 111 | 5 | 4 | 4 | 4 | 3 | 20 |
| 10 | It wasn't a hack, it was me force-pushing to main at peak traffic because the branch name looked lonely. | 104 | 5 | 4 | 4 | 4 | 4 | 21 |
| 11 | The deploy didn't fail, it succeeded: I shipped Friday at 4:59 and told everyone the rollback plan was vibes. | 109 | 5 | 3 | 5 | 4 | 2 | 19 |
| 12 | Turns out the 'random' 500s were my own health check hammering the login endpoint ten times a second. | 101 | 5 | 5 | 5 | 4 | 4 | 23 |

## Elimination rounds

Round 1 — worn tropes out: #11 cut (Friday deploy is the most worn excuse
in the field and has no real reveal, C2 3 / C5 2). #4, #7, #9 cut
(wrong-branch tests, one-letter typo, .env mixup are all familiar shapes
with no new turn, C5 3).

Round 2 — length and voice: #2 cut (112 chars, the "believed the tab"
tail is charming but the line sags in the middle, C4 3). #8 cut (121
chars, longest in the pool; the double reveal is strong but "in the same
commit" is the only thing holding it together, C4 3). #5 cut (staging-vs-
prod mixup is a classic shape, C5 3). #10 cut ("branch name looked
lonely" is cute but not how a developer actually talks, C3 4).

Round 3 — finalists: #1 (24), #3 (23), #12 (23), #6 (22).
#6 cut: the reveal lands but "debug logging writing the users table"
needs a beat too many to parse. #3 vs #12: both are "the attacker was
our own tool" twists, but #3 spends words on "every hour, on the hour"
that restate each other. #12's health-check twist is as strong and
tighter, but #1 beats both: it is the shortest finalist (87 chars),
the twist inverts the scariest word in the room (DDoS) into a self-own,
"staging flag off" is exactly the kind of one-toggle mistake every
developer recognises, and there is nothing left to trim.

## Winner

> It wasn't a DDoS attack, it was my load test pointed at prod with the staging flag off.

- Characters: **87** (1-200, gate passes)
- Single line, pure ASCII, no trailing newline in /output/entry.txt
- Scores: C1 5, C2 5, C3 5, C4 5, C5 4 — total 24/25
- Why it wins: opens with the alarming diagnosis everyone feared, then
  the reveal is the developer's own tool, aimed at the wrong target by
  one forgotten flag. Specific, self-incriminating, and instantly
  recognisable to anyone who has ever pointed a test at the wrong
  environment.
