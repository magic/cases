import cases from '../src/index.mjs'

export default [
  {
    fn: cases.snake('kebab-case'),
    expect: 'kebab_case',
    info: 'snake can convert from kebab-case',
  },
  { fn: cases.snake('camelCase'), expect: 'camel_case', info: 'snake can convert from camelCase' },
  {
    fn: cases.snake('PascalCase'),
    expect: 'pascal_case',
    info: 'snake can convert from PascalCase',
  },
  {
    fn: cases.snake('single'),
    expect: 'single',
    info: 'snake does not change single word strings',
  },
  {
    fn: cases.snake('weirdCased-String'),
    expect: 'weird_cased_string',
    info: 'snake can convert weird strings',
  },
]
