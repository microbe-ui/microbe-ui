// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const fs = require('fs');
const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const sortMQ = require('postcss-sort-media-queries');
const mobileFirst = require('sort-css-media-queries');

// -----------------------------------------------------------------------------
// Sass
// -----------------------------------------------------------------------------

sass.compiler = require('node-sass');
const renderSass = () => {
	return gulp
		.src('./src/bundle.scss')
		.pipe(
			sass({
				outputStyle: 'expanded',
				indentType: 'tab',
				indentWidth: 1
			}).on('error', notify.onError('Error: <%= error.message %>'))
		)
		.pipe(
			postcss([
				sortMQ({
					sort: mobileFirst
				})
			])
		)
		.pipe(gulp.dest('./dist'));
};

// -----------------------------------------------------------------------------
// Watch
// -----------------------------------------------------------------------------

const renderSassIncremental = () => {
	const bs = require('browser-sync').create();
	bs.init({
		server: true,
		files: [
			{
				match: ['./index.html', './src/docs/assets/style.css'],
				fn: () => void bs.reload()
			}
		]
	});
	return gulp.watch('./src/**', renderSass).on('change', bs.reload);
};

// -----------------------------------------------------------------------------
// Docs
// -----------------------------------------------------------------------------

const generateSassDocs = () => {
	const sassDoc = require('sassdoc');
	const cacheFolder = './.cache';
	const cacheJSON = './.cache/sass-doc.json';

	const transform = (data) => {
		const newData = {};
		data.forEach((doc) => {
			const { group = [] } = doc;
			const name = group[0];
			if (name !== undefined && name.length) {
				newData[name] = doc;
			}
		});
		return newData;
	};

	return sassDoc.parse('./src', { verbose: true }).then((data) => {
		if (!fs.existsSync(cacheFolder)) {
			fs.mkdirSync(cacheFolder);
		}
		const json = transform(data);
		fs.writeFileSync(cacheJSON, JSON.stringify(json, undefined, '\t'));
	});
};

const generateMarkdownDocs = () => {
	const sassDocData = require('./.cache/sass-doc');

	const mdCode = (code) => `\`${code}\``;
	const mdPre = (code, lang) => `\`\`\`${lang}\n${code}\n\`\`\``;
	const mdTD = (row) => `| ${row.map((r) => r.replace(/\|/g, '/')).join(' | ')} |`;
	const mdTH = (row) => [mdTD(row), mdTD(row.map(() => '---'))].join('\n');
	const generateTable = (head, ...rows) => [mdTH(head), ...rows.map(mdTD)].join('\n');

	const insertMixinFn = /`insertMixinFn=(.+)`/g;
	const replacerMixinFn = (sample, group) => {
		const doc = sassDocData[group];
		if (doc === undefined) {
			return '';
		}
		const info = [doc.description];

		const parameters = doc.parameter;
		if (Array.isArray(parameters) && parameters.length) {
			const v = doc.context.type === 'mixin' ? '$' : '';
			info.push(
				'##### Parameters',
				generateTable(
					['Name', 'Description', 'Type', 'Default value'],
					...parameters.map(({ type, name, description, default: def }) => {
						return [
							mdCode(v + name),
							description || '---',
							mdCode(type),
							def !== undefined ? mdCode(def) : '---'
						];
					})
				)
			);
		}

		if (doc.return !== undefined) {
			const _return = doc.return;
			info.push(
				'##### Returns',
				`${mdCode(_return.type)}${
					_return.description ? ' - ' + _return.description : ''
				}`
			);
		}

		const examples = doc.example;
		if (Array.isArray(examples) && examples.length) {
			info.push(
				'##### Examples',
				...examples.map(({ type, code }) => mdPre(code, type || 'scss'))
			);
		}

		return info.join('\n\n');
	};

	const insertVariablesTable = /`insertVariablesTable`/g;
	const replacerVariablesTable = (sample) => {
		return mdTH(['Name', 'Description', 'Value', 'Scope']);
	};

	const insertVariableRow = /`insertVariableRow=(.+)`/g;
	const replacerVariableRow = (sample, group) => {
		const doc = sassDocData[group];
		if (doc === undefined) {
			return '';
		}
		const description = doc.description
			.replace(/\r?\n/g, ' ')
			.replace(/^\s+|\s+$/g, '');
		const { name, value, scope } = doc.context;
		return mdTD([mdCode('$' + name), description, mdCode(value), scope]);
	};

	const insertVariableDescription = /`insertVariableDescription=(.+)`/g;
	const replacerVariableDescription = (sample, group) => {
		return sassDocData[group] ? sassDocData[group].description : '';
	};

	const insertVariableValue = /`insertVariableValue=(.+)`/g;
	const replacerVariableValue = (sample, group) => {
		return sassDocData[group] ? mdCode(sassDocData[group].context.value) : '---';
	};

	return gulp
		.src('./src/docs/**/*.md')
		.on('data', (file) => {
			const content = file._contents.toString();
			file._contents = Buffer.from(
				content
					.replace(insertVariablesTable, replacerVariablesTable)
					.replace(insertVariableRow, replacerVariableRow)
					.replace(insertVariableDescription, replacerVariableDescription)
					.replace(insertVariableValue, replacerVariableValue)
					.replace(insertMixinFn, replacerMixinFn)
			);
		})
		.pipe(gulp.dest('./docs'));
};

// -----------------------------------------------------------------------------
// Export tasks
// -----------------------------------------------------------------------------

exports.sass = renderSass;
exports.watch = renderSassIncremental;
exports['sass-doc'] = generateSassDocs;
exports['md-doc'] = generateMarkdownDocs;
