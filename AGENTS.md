# Repository guidelines

When modifying code in this repository, follow these conventions:

- Use two spaces for indentation and avoid semicolons in JS/TS files.
- Always run `npm run lint` before committing changes and address any warnings or errors.
- If dependencies in `package.json` are modified, update `package-lock.json` as well.
- Keep commit messages concise and descriptive.
- Mention these guidelines in your pull request description.

## Directory overview

The repository is divided into two primary folders:

- `public/` for static assets used by the app.
- `src/` for source code including components, views and other modules.

Configuration and build files such as `package.json` are kept in the project root.
