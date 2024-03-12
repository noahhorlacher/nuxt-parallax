# Nuxt Parallax

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A nuxt module that installs the directive "v-parallax" for a quick and easy parallax effect.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-parallax` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-parallax

# Using yarn
yarn add --dev nuxt-parallax

# Using npm
npm install --save-dev nuxt-parallax
```

2. Add `nuxt-parallax` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-parallax'
  ]
})
```

That's it! You can now use Nuxt Parallax in your Nuxt app ✨

## Usage
_**Please note:** If you encounter an issue where elements with the parallax effect overlap other elements, you can fix this by applying `position: relative` to the overlapped elements. This adjusts the stacking context and prevents the parallax elements from overlaying other elements, that are rendered later in the markdown. Some elements have `position: static` applied to them by default, which won't work._

Add the directive to any element like this: `<div v-parallax="{ speed: 0.5 }">Hello World!</div>`
Pass in the options as an object.

## Options
Currently, the vertical speed is the only option. More may be added in the future.

Those are all of the available options, with their default values:
```js
{
  speed: 1
}
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-parallax/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-parallax

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-parallax.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
