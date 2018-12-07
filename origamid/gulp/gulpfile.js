const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");


// sass function
function compilaSass() {
  return gulp
    .src('assets/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// sass task
gulp.task('sass', compilaSass);


// JS function
function gulpJS() {
  return gulp
    .src('assets/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

// JS task
gulp.task('mainjs', gulpJS);




// Browsersync function
function browser() {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
}

// Browsersync task
gulp.task('browser-sync', browser);

function watch() {
  gulp.watch('assets/scss/**/*.scss', compilaSass);
  gulp.watch('./assets/js/**/*.js', gulpJS);
  gulp.watch(['*.html', '*.php']).on('change', browserSync.reload);
}

gulp.task('watch', watch);

gulp.task('default', gulp.parallel('watch', 'browser-sync','sass','mainjs'));
