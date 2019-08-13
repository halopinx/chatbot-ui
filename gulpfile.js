var src = './src';
var dist = './dist';
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    uglify = require('gulp-uglify'),
    sourceMaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
var testpage = '../beachwood/*.html';


function css() {
    return gulp.src(src+'/scss/chatbot.scss')
        .pipe(sourceMaps.init({loadMaps: true, largeFile: true}))
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat('chatbot.min.css'))
        .pipe(cleanCss())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(dist+'/css'))
}


function scripts() {
    return gulp.src([src+'/js/*.js'])
        .pipe(concat('chatbot.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist+'/js'))
}
function copyAssets() {
    return gulp.src([src+'/assets/**/*'])
        .pipe(changed(dist+'/assets'))
        .pipe(gulp.dest(dist+'/assets'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            open: 'external',
            proxy: 'http://localhost/'
        }
    });
    gulp.watch(src + '/scss/**/*.scss', css);
    gulp.watch(src + '/js/**/*.js', scripts);
    gulp.watch(src + '/assets/**/*', copyAssets);
    gulp.watch(['./*.html', dist+'/assets/**/*', dist+'/css/chatbot.min.css', dist+'/js/chatbot.min.js']).on('change', browserSync.reload);
}

exports.css = css;
exports.scripts = scripts;
exports.copyAssets = copyAssets;
exports.watch = watch;

var build = gulp.parallel([css, scripts, copyAssets, watch]);
gulp.task('default', build);