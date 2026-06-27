# Project Notes for Agents

This is a TanStack Start portfolio site deployed on Netlify.

## Architecture

- `src/routes/` contains file-based TanStack Router routes.
- `src/routes/index.tsx` is the portfolio landing page.
- `src/routes/projects.tsx`, `src/routes/resume.tsx`, and blog routes render markdown-backed content from Content Collections.
- `content/` stores projects, jobs, education entries, and blog posts.
- `content-collections.ts` defines the content schemas consumed by the app.
- `public/contact.html` is the static Netlify Forms registration file. Keep its fields synchronized with the React contact form.
- `src/styles.css` contains the Tailwind import, design tokens, and project-specific utility classes.

## Conventions

- Prefer editing markdown files in `content/` for portfolio copy changes instead of hardcoding content in routes.
- Keep route components focused on presentation and use Content Collections for structured content.
- Preserve the AJAX form submission in `src/routes/contact.tsx`; posts should target `/contact.html` so Netlify Forms can process submissions.
- Avoid running build or dev commands during automated agent work unless explicitly requested by the user.

## Non-Obvious Decisions

The home page intentionally uses a distinct editorial portfolio direction rather than a generic blog index. Blog posts remain available through their generated routes and are surfaced as supporting material on the landing page.
