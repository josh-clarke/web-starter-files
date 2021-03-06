# [Web Starter Files](https://github.com/josh-clarke/web-starter-files)

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Issues](https://img.shields.io/github/issues/josh-clarke/web-starter-files.svg)


[![GitHub Forks](https://img.shields.io/github/forks/josh-clarke/web-starter-files.svg?style=social)](https://github.com/josh-clarke/web-starter-files)

These are my Gulp-based starter files for web projects. It is relatively simple and may not work for every use case. Please customize it as you require.

## Features

* Uses [Gulp](https://github.com/gulpjs/gulp) + [Bower](https://github.com/bower/bower) + [NodeJS](https://nodejs.org)
* Allows for HTML partial includes
* Automatically concatinates Bower JavaScript libraries
    * jQuery included by default
* Compressess CSS and JS files
* [SASS](https://www.npmjs.com/package/gulp-sass) (.scss) and [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) (last 2 browser versions)
    * Includes [normalize.scss](https://github.com/JohnAlbin/normalize-scss) library
* Includes [Modernizr Gulp plugin](https://www.npmjs.com/package/gulp-modernizr) to automatically generate custom Modernizr file from JS files
    * Does **not** include `html5shiv`
* No JS lint - add your own if needed
* Images optimized by default with [imagemin](https://github.com/sindresorhus/gulp-imagemin)

## Getting Started

1. Clone or download a ZIP file of the repo.
2. Run `npm install` to install the necessary build components.
3. Run `bower install` to install default project components.
    * Includes jQuery `3.1.1`
    * Components install to `./src/js/vendor/` **not** `./bower_components/`

**Note:** This assumes you have already done [`npm i -g gulp-cli`](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) and [`npm i -g bower`](https://bower.io/#install-bower).

## Default Setup

By default, the following setup is used:

* Working and Production directories
    * `./src` - Working directory
    * `./dist` - Production directory
        * This directory and its subfolders will not be created until the first `gulp` build command
* GULP build tool
    * `gulp` command for default build with LiveReload preview
    * `gulp watch` command to build/copy css, js, html, images on save
* HTML
    * HTML includes using `<!--=include partials/PARTIAL_NAME.html -->`
    * Will search for includes in `./src` and `./src/partials`
* CSS
    * Written in SASS (.scss)
    * Autoprefixr (latest 2 browser versions)
    * Concatinates to `./dist/css/main.js`
* JS
    * User scripts concatinated to `./dist/js/main.js`
    * Bower component management
        * Installs component in `./src/js/vendor`
        * Concatinates to `./dist/js/lib/libs.js`
        * JQuery already included (change in `bower.json`)
* Images
    * Runs imagemin default optmization (change in `gulpfile.js`)
* HTML Template - index.html
    * Based on HTML5Boilerplate
    * CSS points to `./dist/css/main.css`
    * JS concatinated bower components point to `./dist/js/lib/libs.js`
    * JS user scripts point to `./dist/js/main.js`


## File Layout

```
/
└ .gitignore    
└ .bowerrc      # bower component directory set to ./src/js/vendor
└ bower.json    
└ dist/         # distribution folder
    └ css/      
    └ images/   
    └ js/
        └ lib/  # bower components will be concatinated here.
└ gulpfile.js   
└ package.json
└ src/          # working folder
    └ favicon.ico
    └ humans.txt
    └ images/   # you will need to create this - 'images' is expected name
    └ index.html
    └ js/
        └ main.js   # use this for custom scripts
        └ vendor/   # bower components will be installed here
    └ robots.txt
    └ partials/     # use this for HTML includes
    └ scss/
        └ _normalize.scss   # import for normalizr library
        └ _variables.scss   # import for variables and normalizr overrides
        └ main.scss         # use this for custom styles
        └ normalize/        # normalize.scss library files
            └ _import-now.scss
            └ _normalize-mixin.scss
            └ _variables.scss
            └ _vertical-rhythm.scss
```
## Saving New Components

By default, the `.gitignore` file keeps the repo lean by ignoring your Bower library files (`./src/js/vendor`) and NodeJS modules (`./node_modules`). Use the following commands to keep your `bower.json` and `package.json` files up-to-date. When you clone the repo to a new directory or machine, just run the `npm install` and `bower install` commands.

* Save new Bower libraries with `bower install <package> --save`
    * Remove Bower libraries with `bower uninstall <package> --save`
* Save new Gulp plugins or NodeJS modules with `npm i -D <package>`
    * Remove Gulp plugins or NodeJS modules with `npm r -D <package>`

## Credits & License

Includes and based on work from the [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate) project and [normalize.scss](https://github.com/JohnAlbin/normalize-scss).

Released under an [MIT license](https://github.com/josh-clarke/web-starter-files/blob/master/LICENSE).
