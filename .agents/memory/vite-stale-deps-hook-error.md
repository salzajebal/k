---
name: Stale Vite dep-optimization cache causes false "Invalid hook call" errors
description: A component that crashes with "Cannot read properties of null (reading 'useState')" / Invalid hook call, isolated to one component, on an otherwise-correct React+Vite setup — check the Vite dep cache before assuming a real code bug.
---

Symptom: browser console shows "Invalid hook call... Cannot read properties of null (reading 'useState')" pointing at one specific component (e.g. a component added/edited recently), while the rest of the app works fine and only one React version exists in the dependency tree.

Root cause: Vite's `node_modules/.vite` dependency-optimization cache can go stale after adding/restructuring components or after a full rewrite of App.tsx, causing two different pre-bundled React chunks to be referenced in the same page load.

**Why:** This looks identical to the classic "duplicate React copies" bug, which wastes time investigating package.json/pnpm dedupe — but here there's genuinely only one React version installed.

**How to apply:** Before deep-diving into hook-call errors, delete `artifacts/<slug>/node_modules/.vite` and restart the artifact's workflow. Re-check console logs and re-run e2e tests. Only investigate duplicate-React-version or actual hook-rule violations if the error persists after this cache clear.
