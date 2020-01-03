import cases from '../src/index.mjs'

export default [
  {
    fn: cases.kebabCaps('camelCase'),
    expect: 'CAMEL-CASE',
    info: 'kebabCaps can convert from camelCase',
  },
  {
    fn: cases.kebabCaps('snake_case'),
    expect: 'SNAKE-CASE',
    info: 'kebabCaps can convert from snake-case',
  },
  {
    fn: cases.kebabCaps('PascalCase'),
    expect: 'PASCAL-CASE',
    info: 'kebabCaps can convert from PascalCase',
  },
  {
    fn: cases.kebabCaps('single'),
    expect: 'SINGLE',
    info: 'kebabCaps does not change single word strings',
  },
  {
    fn: cases.kebabCaps('weirdCased-String'),
    expect: 'WEIRD-CASED-STRING',
    info: 'kebabCaps can convert weird strings',
  },
]
