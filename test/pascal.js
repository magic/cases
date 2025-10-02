import cases from '../src/index.js'

export default [
  { fn: cases.pascal('camelCase'), expect: 'CamelCase', info: 'pascal can convert from camelCase' },
  {
    fn: cases.pascal('snake_case'),
    expect: 'SnakeCase',
    info: 'pascal can convert from snake-case',
  },
  {
    fn: cases.pascal('kebab-case'),
    expect: 'KebabCase',
    info: 'pascal can convert from kebab-case',
  },
  {
    fn: cases.pascal('single'),
    expect: 'Single',
    info: 'pascal uppercases single word strings',
  },
  {
    fn: cases.pascal('weirdCased-String'),
    expect: 'WeirdCasedString',
    info: 'pascal can convert weird strings',
  },
]
