# trust-gate-demo

A tiny vitest-based TypeScript project that exists to exercise
[trust-gate](https://github.com/lzvxck/trust-gate)'s reusable GitHub Actions
regression check (`.github/workflows/pr-check.yml`) end-to-end against a real
GitHub Actions run and a real pull request.

It has nothing to do with trust-gate's own build -- trust-gate's own test suite
runs on `bun test`, but the impact/coverage engine it ships is built to gate
`vitest`-based target repos, so this repo is that target.

Testing webhook + Checks API integration.

Re-triggered webhook: 2026-07-09T19:46:23Z
