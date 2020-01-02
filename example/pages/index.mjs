export const View = state => [
  h1(state.title),
  p(state.description),

  GitBadges('magic/cases'),

  h3({ id: 'install' }, 'install'),
  p('be in a nodejs project'),
  Pre('npm i --save-dev @magic/cases'),

  h3({ id: 'import' }, 'import'),

  Pre(`
import cases from '@magic/cases'
  `),

  h3({ id: 'usage' }, 'usage'),

  p('@magic/cases supports 4 case types: snake_case, kebab-case, camelCase, and PascalCase'),

  h4({ id: 'usage-camel' }, 'camelCase'),
  Pre(`
import cases from '@magic/cases'

const camelCased = cases.camel('some-casedString')

// camelCased === 'someCasedString'
  `),

  h4({ id: 'usage-kebab' }, 'kebab-case'),
  Pre(`
import cases from '@magic/cases'

const kebabCased = cases.kebab('some-casedString')

// kebabCased === 'some-cased-string'
  `),

  h4({ id: 'usage-pascal' }, 'PascalCase'),
  Pre(`
import cases from '@magic/cases'

const pascalCased = cases.pascal('some-casedString')

// pascalCased === 'SomeCasedString'
  `),

  h4({ id: 'usage-snake' }, 'snake_case'),
  Pre(`
import cases from '@magic/cases'

const snakeCased = cases.snake('some-casedString')

// snakeCased === 'some_cased_string'
  `),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic/cases/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
