"use strict";

const distFolder = "dist";

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");

sass.compiler = require("sass");

/**
 * 编译 scss
 */
function compile() {
  return gulp
    .src("./src/*.scss")
    .pipe(sass.sync({ includePaths: ["node_modules"] }))
    .pipe(autoprefixer())
    .pipe(
      cleanCSS(null, (details) => {
        console.log(`Before: ${details.name}: ${details.stats.originalSize} B`);
        console.log(`After: ${details.name}: ${details.stats.minifiedSize} B`);
      })
    )
    .pipe(gulp.dest(distFolder));
}

const themeChalkFolder = "./node_modules/element-plus/packages/theme-chalk";

/**
 * 拷贝字体
 */
function copyFont() {
  return gulp
    .src(`${themeChalkFolder}/src/fonts/**`)
    .pipe(gulp.dest(`${distFolder}/fonts`))
    .pipe(gulp.dest(`src/fonts`));
}

const build = gulp.parallel(compile, copyFont);

exports.compile = compile;
exports.copyFont = copyFont;
exports.build = build;
