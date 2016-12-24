# portfolio

Used my own yeoman generator [nyssa-fe](https://www.npmjs.com/package/generator-nyssa-fe) to create the project.

It was initially created by using the [create-react-app](https://github.com/facebookincubator/create-react-app) tool, ejecting and changing to use technologies I wanted to use.

## Table of Contents

- [Significant Changes](#significant-changes)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Running Tests](#running-tests)
  - [Command Line Interface](#command-line-interface)

## Significant Changes

* Removed [Jest](https://facebook.github.io/jest/) and added [Tape](https://github.com/substack/tape) + [Karma](https://karma-runner.github.io)
* Removed [ESLint](http://eslint.org/) and added [StandardJS](http://standardjs.com/)
* Added [SASS](http://sass-lang.com/) compiling to packaging
* Changed folder Structure
* Moved [Babel](https://babeljs.io/) configuration to its own file

## Folder Structure

```
my-portfolio/
  .babelrc
  .gitignore
  package.json
  README.md
  node_modules/
  config/
    env.js
    paths.js
    polyfills.js
    webpack.config.dev.js
    webpack.config.prod.js
    webpack.config.test.js
  public/
    index.html
    favicon.ico
  scripts/
    build.js
    start.js
    test.js
    testLoad.js
  src/
    _vars.sass
    index.js
    index.sass
    assets/
      logo.svg
    components/
      app/
        App.js
        App.sass
        App.test.js
      ...
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.  
You need to **put any JS and CSS/SASS/SCSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.  
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.  
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](#running-tests) for more information.

Use `npm test ci` to launch a single run.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Running Tests

The app uses [Tape](https://github.com/substack/tape) as the test runner. The tests can be run in a Node environment, but also through [PhantomJS] or a real browser using [Karma](https://karma-runner.github.io/1.0/index.html).

### Command Line Interface

When you run `npm test`, Tape will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs.
