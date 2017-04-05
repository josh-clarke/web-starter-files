var gulp = require("gulp");

// Include plugins
// Removes gulp- and gulp. prefixes
var p = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Path Variables
var src = "src/";   // working files
var dest = "dist/"; // production files

// Copy unmodified files
gulp.task('copy', function(){
  gulp.src([
      src + '*', 
      "!" + src + '*.{html,png,ico,txt}', 
      src + '*.{html,png,ico,txt}'],
      {
        dot: true
    }).pipe(gulp.dest(dest));
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src(src + 'images/**/*')
    .pipe(p.cache(p.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe(p.size({title: 'images'}));
});

// CSS SASS Preprocessing 
// + Autoprefixer Postprocessing
gulp.task('sass', function() {
  gulp.src(src + 'scss/main.scss')
    .pipe(p.sass({outputStyle: 'expanded'}))
    .pipe(p.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(dest + 'css'))
    .pipe(p.connect.reload())

});

// JavaScript
gulp.task('scripts', function() {

  // Bower Vendor Libraries
  var jsFiles = ['dist/*.js'];
  gulp.src(p.mainBowerFiles(jsFiles))
  	.pipe(p.filter('*.js'))
    .pipe(p.order([
  			'jquery.min.js',  // JQuery First
  			'*'
  		]))
    .pipe(p.uglify())
    .pipe(p.concat('libs.js'))
  	.pipe(gulp.dest(dest + 'js/lib'));

  // Custom JS
  gulp.src(src + 'js/*.js')
    .pipe(p.uglify())
    .pipe(p.concat('main.js'))
    .pipe(gulp.dest(dest + 'js'))
    .pipe(p.connect.reload())

});

// Add needed Modernizr features
gulp.task('modernizr', function() {
  gulp.src([
      dest + 'js/*.js', 
      dest + 'js/lib/*.js'
    ]).pipe(p.modernizr())
    .pipe(gulp.dest(dest + 'js/lib'))
});

// Live Server
gulp.task('connect', function() {
  p.connect.server({
    root: dest,
    livereload: true
  })
});

// Run Tasks

gulp.task('default', ['copy','images','sass','scripts','modernizr','connect']);

gulp.task('watch', function(){
  gulp.watch(src + 'sass/**/*.scss', ['sass']);
  gulp.watch(src + '**/*.html', ['copy']);
  gulp.watch(src + 'images/**/*', ['images']);
  gulp.watch(src + 'js/**/*.js', ['scripts']);
})
