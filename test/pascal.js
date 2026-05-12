import cases from '../src/index.js'

export default [
  {
    fn: cases.pascal('camelCaseExtended'),
    expect: 'CamelCaseExtended',
    info: 'pascal can convert from camelCase',
  },
  {
    fn: cases.pascal('snake_case_extended'),
    expect: 'SnakeCaseExtended',
    info: 'pascal can convert from snake-case',
  },
  {
    fn: cases.pascal('kebab-case-extended'),
    expect: 'KebabCaseExtended',
    info: 'pascal can convert from kebab-case',
  },
  {
    fn: cases.pascal('single'),
    expect: 'Single',
    info: 'pascal uppercases single word strings',
  },
  {
    fn: cases.pascal('weirdCased-String-Extended'),
    expect: 'WeirdCasedStringExtended',
    info: 'pascal can convert weird strings',
  },
]
