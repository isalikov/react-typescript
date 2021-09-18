# react-typescript

### Usage

-   `yarn` for install dependencies
-   `yarn start` will serve development build at :8000 port
-   `NODE_ENV=production yarn dist` will make production build at `./dist` folder
-   `docker build -f .docker/Dockerfile -t react-typescript .` will make application docker image (after building `./dist` folder)

### Features

-   React 17 (react-intl, react-redux, react-router-dom)
-   SCSS with CSS Modules
-   ESLint (Airbnb) / prettier / husky
-   Webpack setup (dev server, hmr, aliases, code splitting)
