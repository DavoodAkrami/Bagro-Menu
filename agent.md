# Agent instructions

- Use current, modern coding practices supported by this project's installed versions. Check the installed documentation before relying on remembered APIs.
- Prefer the latest coding model available in the environment when selecting a model; use a model suited to the task when a newer model is unavailable.
- Write functions and React components as arrow functions.
- Do not add comments to source code. Keep explanations in documentation or the change summary.
- Use the `@/*` alias for project imports instead of relative paths that traverse directories.
- Follow the Next.js App Router conventions under `src/app` and use the framework's built-in routing and navigation.
- Keep server components as the default. Add client boundaries only when browser state or event handling requires them.
- Before changing Next.js code, read the relevant version-matched documentation in `node_modules/next/dist/docs/`.
- Keep changes focused, accessible, typed, and easy to validate. Run the relevant lint, typecheck, and build commands after implementation when verification is requested or appropriate.
