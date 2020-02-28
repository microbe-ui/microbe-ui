// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const sortMQ = require('postcss-sort-media-queries');
const mobileFirst = require('sort-css-media-queries');
const browserSync = require('browser-sync');

// -----------------------------------------------------------------------------
// Sass
// -----------------------------------------------------------------------------

sass.compiler = require('node-sass');
const renderSass = () => {
	return gulp.src('./src/bundle.scss')
		.pipe(sass({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1
		}).on('error', notify.onError('Error: <%= error.message %>')))
		.pipe(postcss([
			sortMQ({
				sort: mobileFirst
			})
		]))
		.pipe(gulp.dest('./dist'))
};

// -----------------------------------------------------------------------------
// Watch
// -----------------------------------------------------------------------------

const renderSassIncremental = () => {
	const bs = browserSync.create();
	bs.init({
		server: {
			baseDir: 'dist'
		}
	});
	return gulp.watch('./src/**', renderSass).on('change', bs.reload);
};

// -----------------------------------------------------------------------------
// Export tasks
// -----------------------------------------------------------------------------

exports.sass = renderSass;
exports.watch = renderSassIncremental;
