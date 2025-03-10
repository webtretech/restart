## Features (included)

- ⚡️ [React 19](https://github.com/facebook/react/), [TailwindCSS](https://github.com/tailwindlabs/tailwindcss), and [Vite](https://github.com/vitejs/vite)

- 🌍 [I18n ready](./src/i18n) — includes internationalization

- 📑 [Layout System](./src/layouts) — with multiple layout support

- 💮 [State Management via Redux](./src/redux) — with hooks and logging for development

- 🔗 Routing via [`react-router`](./src/router) — with lazy loading for improved performance

- ⛔ Error handling with [`error-boundary`](./src/components/ErrorBoundary.tsx) — can also be used for logging to third-party services

- 🎨 [DaisyUI](https://github.com/saadeghi/daisyui) and [react-daisyui](https://github.com/daisyui/react-daisyui) — the most popular Tailwind CSS component library

- 📲 [Theme System](./src/components/ThemeChanger.tsx) — with default `light`, `dark`, and `auto detect` mode

- 🗂 Absolute import — Import folders and files using the `@` prefix

- 🤖 [Transmart](./transmart.config.cjs) — translate your i18n language files with AI

- 😃 [Use icons from popular icon packs](https://github.com/react-icons/react-icons)

- 🚓 Commitlint — Lint commit messages

- 📏 ESLint — Pluggable JavaScript linter

- 💖 Prettier — Opinionated Code Formatter

- 🦾 Strongly Typed: written in [TypeScript](https://github.com/microsoft/TypeScript)

### Plugins

- [`react-swc`](https://github.com/vitejs/vite-plugin-react-swc) - speed up your dev server with SWC

- [`svgr`](https://github.com/pd4d10/vite-plugin-svgr) - transform SVGs into React components

- [`checker`](https://github.com/fi3ework/vite-plugin-checker) - provide checks of TypeScript, ESLint, Stylelint and more

- [`visualizer`](https://github.com/btd/rollup-plugin-visualizer) - visualize and analyze your bundle to see which modules are taking up space.

- [`basic-ssl`](https://github.com/vitejs/vite-plugin-basic-ssl) - basic https in dev mode using an automatically generated self-signed certificate

## Checklist

When you use this template, follow the checklist to update your info properly

- [ ] Create a `.env` file from `.env.example`
- [ ] Change the favicon in `public`
- [ ] Clean up `README.md`

## Todo

- [ ] Add unit test via [`vitest`](https://github.com/vitest-dev/vitest)

## Usage

### Installation

```bash
npm install
```

### Development

Run and visit http://localhost:5173

```bash
npm run start:dev
```

### Build

To build the App, run

```bash
npm run build
```

### Preview

To preview the App, run

```bash
npm run preview
```

### Test

```bash
npm test
```

## License

[MIT](./LICENSE) License © 2022 [Webtre Technologies](https://github.com/webtretech)
