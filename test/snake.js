import cases from '../src/index.js'

export default [
  {
    fn: cases.snake('kebab-case-extended'),
    expect: 'kebab_case_extended',
    info: 'snake can convert from kebab-case',
  },
  {
    fn: cases.snake('camelCaseExtended'),
    expect: 'camel_case_extended',
    info: 'snake can convert from camelCase',
  },
  {
    fn: cases.snake('PascalCaseExtended'),
    expect: 'pascal_case_extended',
    info: 'snake can convert from PascalCase',
  },
  {
    fn: cases.snake('single'),
    expect: 'single',
    info: 'snake does not change single word strings',
  },
  {
    fn: cases.snake('weirdCased-String_Extended'),
    expect: 'weird_cased_string_extended',
    info: 'snake can convert weird strings',
  },
]
