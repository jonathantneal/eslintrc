import { ESLint } from 'eslint'

async function test(...tests) {
	const results = { unexpectedErrors: 0 }

	for (const { options, valid = [], invalid = [] } of tests) {
		const eslint = new ESLint(options)

		for (const { code, file = '' } of valid) {
			const [ results ] = await eslint.lintText(code, { filePath: file })

			const unexpectedErrors = results.errorCount
			const matchesErrorCount = unexpectedErrors === 0

			if (!matchesErrorCount) {
				results.unexpectedErrors += unexpectedErrors

				console.log(`Expected 0 errors, received ${results.errorCount}`)

				const formatter = await eslint.loadFormatter('stylish')
				const reporting = formatter.format([ results ])

				console.log(reporting)
			}
		}

		for (const { code, errorCount = 1, file = '' } of invalid) {
			const [ results ] = await eslint.lintText(code, { filePath: file })

			const unexpectedErrors = results.errorCount - errorCount
			const matchesErrorCount = unexpectedErrors === 0

			if (!matchesErrorCount) {
				results.unexpectedErrors += unexpectedErrors

				console.log(`Expected ${errorCount} errors, received ${results.errorCount}`)

				const formatter = await eslint.loadFormatter('stylish')
				const reporting = formatter.format([ results ])

				console.log(reporting)
			}
		}
	}

	if (results.unexpectedErrors.length > 0) {
		const plural = results.unexpectedErrors.length === 1 ? '' : 's'

		console.log(`Some tests failed, with ${results.length} unexpected error${plural}.`)

		process.exit(1)
	} else {
		console.log(`All tests passed!`)

		process.exit(0)
	}
}

test(
	/* JavaScript */
	{
		options: {
			useEslintrc: false,
			overrideConfigFile: './config/js.json',
		},
		valid: [
			{
				file: 'test.js',
				code: 'export const lol = true\n',
			},
			{
				file: 'test.js',
				code: 'export const lol = true;\n',
			},
		],
	},

	/* JavaScript (strict) */
	{
		options: {
			useEslintrc: false,
			overrideConfigFile: './config/js-strict.json',
		},
		valid: [
			{
				file: 'test.js',
				code: 'export const lol = true\n',
			},
		],
		invalid: [
			{
				file: 'test.js',
				code: 'export const lol = true;\n',
				errorCount: 1,
			},
		],
	},

	/* TypeScript */
	{
		options: {
			useEslintrc: false,
			overrideConfigFile: './config/ts.json',
		},
		valid: [
			{
				file: 'test.ts',
				code: 'export const lol = true\n',
			},
			{
				file: 'test.ts',
				code: 'export const lol = true;\n',
			},
		],
	},

	/* TypeScript (strict) */
	{
		options: {
			useEslintrc: false,
			overrideConfigFile: './config/ts-strict.json',
		},
		valid: [
			{
				file: 'test.ts',
				code: 'export const lol = true\n',
			},
		],
		invalid: [
			{
				file: 'test.ts',
				code: 'export const lol = true;\n',
			},
		],
	},

	/* Astro */
	{
		options: {
			useEslintrc: false,
			overrideConfigFile: './config/astro.json',
		},
		valid: [
			{
				file: 'test.astro',
				code: [
					`---`,
					`const title = 'Hello'`,
					`---`,
					`<html lang="en-US">`,
						`<body>`,
							`<h1>\${title}</h1>`,
						`</body>`,
					`</html>`,
				].join('\n'),
			},
			{
				file: 'test.astro',
				code: [
					`---`,
					`const title = 'Hello';`,
					`---`,
					`<html lang="en-US">`,
						`<body>`,
							`<h1>\${title}</h1>`,
						`</body>`,
					`</html>`,
				].join('\n'),
				errorCount: 1,
			},
		],
	},

	/* Astro (strict) */
	{
		options: {
			useEslintrc: false,
			overrideConfigFile: './config/astro-strict.json',
		},
		valid: [
			{
				file: 'test.astro',
				code: [
					`---`,
					`const title = 'Hello'`,
					`---`,
					`<html lang="en-US">`,
						`<body>`,
							`<h1>\${title}</h1>`,
						`</body>`,
					`</html>`,
				].join('\n'),
			},
		],
		invalid: [
			{
				file: 'test.astro',
				code: [
					`---`,
					`const title = 'Hello';`,
					`---`,
					`<html lang="en-US">`,
						`<body>`,
							`<h1>\${title}</h1>`,
						`</body>`,
					`</html>`,
				].join('\n'),
				errorCount: 1,
			},
		],
	}
)
