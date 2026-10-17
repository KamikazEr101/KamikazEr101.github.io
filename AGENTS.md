# Repository Guidelines

## Project Structure & Module Organization

This repository contains a VuePress 2 blog. Markdown content lives under `src/`: `src/posts/` holds published articles (including grouped paths such as `src/posts/apple/`), `src/demo/` contains feature examples, and `src/intro.md` is the blog introduction. VuePress configuration is in `src/.vuepress/`: TypeScript files define the site, theme, navbar, and sidebar; `styles/` contains SCSS overrides; and `public/` stores copied assets such as logos, icons, and cover images. The GitHub Pages deployment is defined in `.github/workflows/deploy-pages.yml`. Generated output in `src/.vuepress/dist/` and VuePress cache/temp directories should not be edited or committed.

## Build, Test, and Development Commands

Use pnpm 12 (the version declared in `package.json`) and keep `pnpm-lock.yaml` updated.

- `pnpm install` installs the locked dependencies.
- `pnpm run docs:dev` starts the VuePress development server with hot reload.
- `pnpm run docs:clean-dev` clears the VuePress cache before starting development.
- `pnpm run docs:build` creates the production site in `src/.vuepress/dist/`; run this before opening a PR.
- `pnpm run docs:update-package` updates VuePress-related packages interactively.

There is no separate automated test suite or lint script. Treat a successful production build and a manual check of changed pages as the current test gate.

## Coding Style & Naming Conventions

Follow the existing TypeScript style: two-space indentation, semicolons, double-quoted imports/strings, and ES module syntax. Keep VuePress configuration modular by placing navbar, sidebar, and theme changes in their existing files. Use SCSS variables and overrides in `src/.vuepress/styles/`. Name content directories and Markdown files with lowercase, descriptive paths; add YAML frontmatter with an ISO date (`YYYY-MM-DD`), categories, and tags where applicable.

## Commit & Pull Request Guidelines

Use concise Conventional Commit subjects, such as `feat: add article`, `fix: correct sidebar link`, or `refactor: update theme config`. Keep commits focused. Pull requests should explain the user-visible change, identify the affected paths, include the validation command (`pnpm run docs:build`), and attach screenshots for layout or styling changes. Changes merged to `master` trigger the GitHub Pages deployment workflow.
