import cases from '../src/index.mjs'

export default [
  { fn: cases.camel('kebab-case'), expect: 'kebabCase', info: 'camel can convert from kebab-case' },
  { fn: cases.camel('snake_case'), expect: 'snakeCase', info: 'camel can convert from snake_case' },
  {
    fn: cases.camel('PascalCase'),
    expect: 'pascalCase',
    info: 'camel can convert from PascalCase',
  },
  {
    fn: cases.camel('single'),
    expect: 'single',
    info: 'camel does not change single word strings',
  },
  {
    fn: cases.camel('weirdCased-String'),
    expect: 'weirdCasedString',
    info: 'camel can convert weird strings',
  },
]
