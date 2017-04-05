# [Web Starter Files](https://github.com/josh-clarke/web-starter-files)

These are my Gulp-based starter files for web projects. It is relatively simple and may not work for every use case. Please customize it as you require. 

## Getting Started

1. Clone or download a ZIP file of the repo.
2. Run `npm install` to install the necessary build components.
3. Run `bower install` to install default project components.
    * Includes jQuery `3.1.1`
    * Components install to `./src/js/vendor/` **not** `./bower_components/`

**Note:** This assumes you have Gulp [setup and use](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) knowledge already.

## Features

* Uses [Gulp](https://github.com/gulpjs/gulp) + [Bower](https://github.com/bower/bower) + [NodeJS](https://nodejs.org)
* Automatically concatinates Bower JavaScript libraries
    * jQuery included by default 
* Compressess CSS and JS files 
* [SASS](https://www.npmjs.com/package/gulp-sass) (.scss) and [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) (last 2 browser versions)
    * Includes [normalizr.scss](https://github.com/JohnAlbin/normalize-scss) library
* Includes [Modernizr Gulp plugin](https://www.npmjs.com/package/gulp-modernizr) to automatically generate custom Modernizr file from JS files
    * Does **not** include `html5shiv`
* No JS lint - add your own if needed
* Images optimized by default with [imagemin](https://github.com/sindresorhus/gulp-imagemin)

## Default Setup

By default, the following setup is used:

* Working and Production directories
    * `./src` - Working directory
    * `./dist` - Production directory
        * This directory and its subfolders will not be created until the first `gulp` build command
* GULP build tool
    * `gulp` command for default build with LiveReload preview
    * `gulp watch` command to build/copy css, js, html, images on save
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
    └ scss/
        └ _normalize.scss   # import for normalizr library
        └ _variables.scss   # import for variables and normalizr overrides
        └ main.scss         # use this for custom styles
        └ normalize/        # normalizr library files
            └ _import-now.scss
            └ _normalize-mixin.scss
            └ _variables.scss
            └ _vertical-rhythm.scss
```

## Credits & License

Includes and based on work from the [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate) project and [normalize.scss](https://github.com/JohnAlbin/normalize-scss). 

Released under an [MIT license](https://github.com/josh-clarke/web-starter-files/blob/master/LICENSE).