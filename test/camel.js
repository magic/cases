import cases from '../src/index.js'

export default [
  {
    fn: cases.camel('kebab-case-extended'),
    expect: 'kebabCaseExtended',
    info: 'camel can convert from kebab-case',
  },
  {
    fn: cases.camel('snake_case_extended'),
    expect: 'snakeCaseExtended',
    info: 'camel can convert from snake_case',
  },
  {
    fn: cases.camel('PascalCaseExtended'),
    expect: 'pascalCaseExtended',
    info: 'camel can convert from PascalCase',
  },
  {
    fn: cases.camel('single'),
    expect: 'single',
    info: 'camel does not change single word strings',
  },
  {
    fn: cases.camel('weirdCased-String_Extended'),
    expect: 'weirdCasedStringExtended',
    info: 'camel can convert weird strings',
  },
]
