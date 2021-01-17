## @magic/cases

convert between camelCase, PascalCase, snake_case, and kebab-case.

[html-docs](https://magic.github.io/cases/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/cases.svg
[npm-url]: https://www.npmjs.com/package/@magic/cases
[travis-image]: https://api.travis-ci.org/magic/cases.svg?branch=master
[travis-url]: https://travis-ci.org/magic/cases
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/cases/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/cases/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/cases/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/cases
[greenkeeper-image]: https://badges.greenkeeper.io/magic/cases.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/cases.svg
[snyk-image]: https://snyk.io/test/github/magic/cases/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/cases

* [install](#install)
* [usage](#usage)
* [changelog](#changelog)

### <a name="install"></a>install
be in a nodejs project.
```bash
npm i --save-dev @magic/cases
```

### <a name="usage"></a>usage
```javascript
import cases from '@magic/cases'

const string = 'some-case-string'

const camelized = cases.camel('some-case-string')  // someCaseString

const snaked = cases.snake('some-case-string')  // some_case_string

const pascaled = cases.pascal('some-case-string') // SomeCaseString

const kebabed = cases.kebab('some-case-string')  // some-case-string

console.log({ camelized, snaked, pascaled, kebabed })
```

#### <a name="changelog"></a>changelog

##### 0.0.1
first commit, four case types work.

##### 0.0.2
add kebabCaps and snakeCaps for KEBAB-CAPS and SNAKE_CAPS

##### 0.0.3
bump required node version to 14.2.0

##### 0.0.4
bump required node version to 14.15.4

##### 0.0.5 - unreleased
...
