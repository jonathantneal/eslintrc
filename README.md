# eslint-config-dev <a href="https://github.com/eslint/eslint"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint Logo" width="90" height="90" align="right"></a>

[![NPM Version][npm-img]][npm-url]
[![Licensing][lic-image]][lic-url]

[eslint-config-dev] is a shareable configuration package for [eslint].

## Install

Add [eslint] and [eslint-config-dev] to your project:

```shell
npm install --save-dev eslint eslint-config-dev
```

Then, add the following configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "dev"
  }
}
```

### Usage with TypeScript

After the previous install instructions, add [typescript-eslint] to your project:

```shell
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Then, add the following configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "dev/ts"
  }
}
```

### Usage with Astro

After the previous install instructions, add [eslint-plugin-astro] and [eslint-plugin-jsx-a11y] to your project:

```shell
npm install --save-dev eslint-plugin-astro eslint-plugin-jsx-a11y
```

Then, add the following configuration to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "dev/astro"
  }
}
```

[npm-url]: https://www.npmjs.com/package/eslint-config-dev
[npm-img]: https://img.shields.io/npm/v/eslint-config-dev.svg
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/eslint-config-dev.svg
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg

[eslint]: https://github.com/eslint/eslint
[eslint-config-dev]: https://github.com/jonathantneal/eslint-config-dev
[eslint-plugin-astro]: https://ota-meshi.github.io/eslint-plugin-astro/
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme
[typescript-eslint]: https://typescript-eslint.io/getting-started