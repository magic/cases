import cases from '../src/index.mjs'

export default [
  { fn: cases.kebab('camelCase'), expect: 'camel-case', info: 'kebab can convert from camelCase' },
  {
    fn: cases.kebab('snake_case'),
    expect: 'snake-case',
    info: 'kebab can convert from snake-case',
  },
  {
    fn: cases.kebab('PascalCase'),
    expect: 'pascal-case',
    info: 'kebab can convert from PascalCase',
  },
  {
    fn: cases.kebab('single'),
    expect: 'single',
    info: 'kebab does not change single word strings',
  },
  {
    fn: cases.kebab('weirdCased-String'),
    expect: 'weird-cased-string',
    info: 'kebab can convert weird strings',
  },
  {
    fn: cases.kebab('overflowX'),
    expect: 'overflow-x',
    info: 'kebab can convert camelCase strings that end with an upper case character',
  },
  {
    fn: cases.kebab('overflow_x'),
    expect: 'overflow-x',
    info: 'kebab can convert snake_case strings that end with an upper case character',
  },
  {
    fn: cases.kebab('OverflowX'),
    expect: 'overflow-x',
    info: 'kebab can convert PascalCase strings that end with an upper case character',
  },
]
