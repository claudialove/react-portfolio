This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development environment (runtime)

This project uses one documented, reproducible runtime. The same versions are
pinned in `.nvmrc`, the `engines` field of `package.json`, and the CI workflow
template (`ci/ci.github-workflow.yml`).

> **Enabling CI.** The CI configuration is provided as a template at
> `ci/ci.github-workflow.yml`. A maintainer should copy it to
> `.github/workflows/ci.yml` to activate it (the automation account that opens
> PRs cannot create files under `.github/workflows/`). It validates a clean
> `npm ci`, production build, and the test suite on both Ubuntu and Windows
> using the pinned Node/npm versions.

| Tool | Version | Source of truth |
| ---- | ------- | --------------- |
| Node | `20.18.0` (LTS) | `.nvmrc`, `package.json` `engines`, CI |
| npm  | `10.8.2` | `package.json` `engines`, CI |

Node 18 has reached end of life, so the runtime targets the maintained Node 20
LTS line. `package-lock.json` was generated with npm `10.8.2`; use that version
to keep the lockfile reproducible.

### Setup

```bash
# Select the pinned Node version (requires nvm)
nvm install
nvm use

# Pin the tested npm version
npm install -g npm@10.8.2

# Clean, reproducible install from the committed lockfile
npm ci
```

The `start`, `build`, and `test` scripts use [`cross-env`](https://www.npmjs.com/package/cross-env)
so they run identically on Windows and Linux/macOS.

> **Temporary note — OpenSSL legacy provider.** The `start`, `build`, and `test`
> scripts set `NODE_OPTIONS=--openssl-legacy-provider`. This is required only
> because the current `react-scripts` (4-era Webpack) is incompatible with the
> OpenSSL 3 provider shipped in modern Node. The flag is a temporary workaround
> and should be removed once the build tool is migrated (tracked in D1 /
> CVDEV-28). It is intentionally not applied to scripts that do not invoke the
> Webpack pipeline.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> **Known stale test.** `src/App.test.js` still asserts the default Create React
> App "renders learn react link" text, which no longer exists in this portfolio.
> This test fails by design and is a content/test issue, not an environment
> failure — CI reports it separately (non-blocking). It is tracked for
> replacement with meaningful route/navigation tests in T2 / CVDEV-33.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
