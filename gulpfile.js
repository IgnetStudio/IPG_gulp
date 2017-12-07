//
// GULP PLUGINS
//

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');
const cleanCss = require('gulp-clean-css');
const stripCssComments = require('gulp-strip-css-comments');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const posthtml = require('gulp-posthtml');
const deleteLines = require('gulp-delete-lines');

//
// GULP SETUP
//

const config = {
    rootPath: 'pl',
    subPath: 'category',
    altFill: 'alt=""',
    emptyAlt: 'alt="placeholder"',
    srcCss: 'src/css/*.css',
    srcJs: 'src/js/*.js',
    srcHtml: 'src/*.html',
    distCss: 'dist/css',
    distJs: 'dist/js',
    distHtml: 'dist/',
    outCss: 'dist/css/*.css',
    outJs: 'dist/js/*.js',
    outHtml: 'dist/*.html',
    pathCss: '../img/',
    pathJs: 'img/',
    pathHtml: 'img/',
    pathReplace: 'string to replace',
    concatCss: 'main.css',
    concatJs: 'main.js',
    srcFont: 'font to replace',
    distFont: '"Lato"' // no comma here
};

//
// GULP TASK STYLES: minify, concatenation, remove comments, replace paths & fonts
//

gulp.task("styles", function() {
    return gulp.src(config.srcCss)
      .pipe(plumber())
      .pipe(cleanCss({ keepSpecialComments: false }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(concat(config.concatCss))
      .pipe(stripCssComments({ preserve: false }))
      .pipe(replace(config.pathCss, [config.pathReplace + config.rootPath + "/" + config.subPath + "/"]))
      .pipe(replace(config.srcFont, config.distFont))
      .pipe(gulp.dest(config.distCss))
  });

//
// GULP TASK SCRIPTS: replace paths, concatenation, minify
//

gulp.task("scripts", function(){
    return gulp.src(config.srcJs)
      .pipe(plumber())
      .pipe(replace(config.pathJs, [config.pathReplace + config.rootPath + "/" + config.subPath + "/"]))    
      .pipe(concat(config.concatJs))
      .pipe(gulp.dest(config.distJs))
      .pipe(rename({suffix: ".min"}))
      .pipe(uglify())
      .pipe(gulp.dest(config.distJs));
  });

//
// GULP TASK HTML: delete redundant lines, replace paths, fill empty alts
//

//
// GULP TASK DEFAULT: watch live changes while editing code
//