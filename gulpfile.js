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
    font_01_text: 'font to replace',
    fontReplaceBold: '"Lato"' // no comma here
};

//
// GULP TASKS
//