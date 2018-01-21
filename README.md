## Description

Simple yet powerful gulp.js configuration, improving Front End Developer's workflow.

***

## Installation

1. Install [node.js](https://nodejs.org/en/) & [git](https://git-scm.com/)

2. Clone repository

`git clone https://github.com/IgnetStudio/IPG_gulp.git`

3. Install gulp globally

`npm install -g gulp`

4. Install npm modules:

`npm install`

5. Open **gulpfile.js**

6. Modify config paths & strings (if necessary)

7. Run tasks*

8. Enjoy

***

## *Tasks

- `gulp styles` (minify, concatenation, remove comments, replace paths & fonts)

- `gulp scripts` (replace paths, concatenation, minify)

- `gulp html` (delete redundant lines, replace paths, fill empty alts)

- `gulp img` (compress images)

- `gulp` (watch live changes while editing code)

***

## Help

info@ignet.com.pl

***

## Dependencies

- [gulp](https://www.npmjs.com/package/gulp) (automates tasks in development workflow)
- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) (prevents the pipe from breaking)
- [gulp-replace](https://www.npmjs.com/package/gulp-replace) (replaces strings)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) (combines & minifies CSS files)
- [gulp-strip-css-comments](https://www.npmjs.com/package/gulp-strip-css-comments) (strips comments from CSS)
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) (minifies JS files)
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) (combines multiple files into one JS file)
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) (renames files)
- [gulp-posthtml](https://www.npmjs.com/package/gulp-posthtml) (transforms HTML)
- [gulp-delete-lines](https://www.npmjs.com/package/gulp-delete-lines) (deletes all lines based on regex filters)
- [gulp-smushit](https://www.npmjs.com/package/gulp-smushit) (optimizes pictures size)