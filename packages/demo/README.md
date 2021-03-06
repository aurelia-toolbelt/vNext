# demo

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app in production mode

    npm run build

It builds all files to dist folder. To deploy to production server, copy all the `dist/*` files to production root folder.

For example
```
dist/index.html
dist/foo.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/foo.12345.js
```

## Unit Tests

    npm run test

Run unit tests in watch mode.

    npm run test:watch

Unit tests run in browser through [browser-do](https://github.com/3cp/browser-do). Please check scripts in `package.json` for more details.

By default, browser-do shuts down browser after tests. To keep browser window open for inspection, pass additional argument `-k` or `--keep-open`.

    npm run build:test && browser-do -k --mocha --browser chrome < dist/entry.bundle.js

Unit tests in watch mode is executed through stand webpack watch mode and the help of [webpack-shell-plugin-next](https://github.com/s00d/webpack-shell-plugin-next).

## Analyze webpack bundle

    npm run analyze

## Cypress e2e test

All e2e tests are in `cypress/integration/`.

Run e2e tests with:

    npm run test:e2e

Note the `test:e2e` script uses start-server-and-test to boot up dev server on port 9000 first, then run cypress test, it will automatically shutdown the dev server after test was finished.

To run Cypress interactively, do

```bash
# Start the dev server in one terminal
npm start
# Start Cypress in another terminal
npx cypress open
```

For more information, visit https://www.cypress.io
