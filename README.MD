# Web Starter Files

These are my Gulp-based starter files for web projects. It is relatively simple and may not work for every use case. Please customize it as you require. 

## Getting Started

1. Clone or download a ZIP file of the repo.
2. Run `npm install` to install the necessary build components.
3. Run `bower install` to install default project components.
    * By default, includes jQuery

## Default Setup

By default, the following setup is used:

* Working and Production directories
    * `./src` - Working directory
    * `./dist` - Production directory
        * This directory and its subfolders will not be created until the first `gulp` build command
* Build Tool
    * Gulp
* CSS 
    * Written in SASS (.scss)
    * Autoprefixr (latest 2 browser versions)
    * Concatinates to `./dist/css/main.js`
* JS
    * User scripts concatinated to `./dist/js/main.js`
    * Bower component management
        * Installs component in `./src/js/vendor`
        * Concatinates to `./dist/js/lib/libs.js`
        * JQuery already included
* Images 
    * Runs imagemin default compression on copy
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
    └ images/
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
