import fs from "fs";
import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import del from "del";
import chalk from "chalk";
import { Logger } from "@yunyoujun/logger";
const logger = new Logger();

const sass = gulpSass(dartSass);

/**
 * 构建目录
 */
export const distFolder = "./dist";
/**
 * 缓存目录
 */
export const cacheFolder = `.ink-cache`;
/**
 * 默认 chalk 主题所在目录
 */
export const themeChalkFolder =
  "./node_modules/element-plus/packages/theme-chalk";
/**
 * ink 主题源文件目录
 */
export const themeInkFolder = "./src";

/**
 * 编译 scss
 */
export function compile() {
  return gulp
    .src(`${cacheFolder}/*.scss`)
    .pipe(
      sass.sync({ includePaths: ["node_modules"] }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({}, (details) => {
        logger.info(
          `${chalk.cyan(details.name)}: [${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB] -> [${chalk.green(details.stats.minifiedSize / 1000)} KB]`
        );
      })
    )
    .pipe(gulp.dest(distFolder));
}

/**
 * 拷贝字体
 */
export function copyFont() {
  return gulp
    .src(`${themeChalkFolder}/src/fonts/**`)
    .pipe(gulp.dest(`${distFolder}/fonts`));
}

/**
 * 清除本地缓存
 * @returns
 */
export function cleanCache() {
  return del([cacheFolder, distFolder]);
}

/**
 * 拷贝 theme-chalk
 */
export function copyThemeChalk() {
  return gulp
    .src(`${themeChalkFolder}/src/**`)
    .pipe(gulp.dest(`${cacheFolder}`));
}

/**
 * 拷贝 theme-ink
 * @returns
 */
export async function copyThemeInk() {
  /**
   * 删掉目标文件夹中的文件，将已存在文件与目标文件建立链接
   * @param existFolder
   * @param targetFolder
   */
  async function delAndlinkScssFile(existFolder: string, targetFolder: string) {
    return Promise.all(
      fs.readdirSync(existFolder).map(async (item) => {
        const existFile = `${existFolder}/${item}`;
        const targetFile = `${targetFolder}/${item}`;
        if (item.endsWith(".scss")) {
          await del(targetFile);
          // fs.linkSync(existFile, targetFile);
          fs.linkSync(existFile, targetFile);
          logger.info(
            `Link '${chalk.cyan(existFile)}' to '${chalk.cyan(targetFile)}'`
          );
        } else {
          await delAndlinkScssFile(existFile, targetFile);
        }
      })
    );
  }

  await delAndlinkScssFile(themeInkFolder, cacheFolder);
  // return gulp.src(`./src/**`).pipe(gulp.dest(`${cacheFolder}`));
}

/**
 * 组合主题
 */
export const combine = gulp.series(cleanCache, copyThemeChalk, copyThemeInk);
export const build = gulp.series(combine, gulp.parallel(compile, copyFont));

export default build;
