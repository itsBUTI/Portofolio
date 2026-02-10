# Portfolio (Vite + React)

Single-page, scroll-based portfolio with a premium minimal UI, reusable components, and resilient contact handling.

## Quickstart

- `npm install`
- `npm run dev`

## Scripts

- `npm run build`  production build
- `npm run preview`  preview build locally
- `npm run lint`  eslint

## Content

Edit your identity and content here:

- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/services.js`

## Contact form

The contact form supports three modes (in priority order):

1) EmailJS (recommended)

- Create a `.env` file (see `.env.example`).
- Set:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

The form sends common template variables: `from_name`, `from_email`, `reply_to`, `subject`, and `message` (and also `name`/`email`).

2) Hosted endpoint (Formspree or compatible)

- Set `VITE_FORMSPREE_ENDPOINT`.

3) No-backend mode

- If neither EmailJS nor `VITE_FORMSPREE_ENDPOINT` is set, the form opens a prepared `mailto:` draft.
