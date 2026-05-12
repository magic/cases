import cases from '../src/index.js'

export default [
  {
    fn: cases.kebabCaps('camelCaseExtended'),
    expect: 'CAMEL-CASE-EXTENDED',
    info: 'kebabCaps can convert from camelCase',
  },
  {
    fn: cases.kebabCaps('snake_case_extended'),
    expect: 'SNAKE-CASE-EXTENDED',
    info: 'kebabCaps can convert from snake-case',
  },
  {
    fn: cases.kebabCaps('PascalCaseExtended'),
    expect: 'PASCAL-CASE-EXTENDED',
    info: 'kebabCaps can convert from PascalCase',
  },
  {
    fn: cases.kebabCaps('single'),
    expect: 'SINGLE',
    info: 'kebabCaps does not change single word strings',
  },
  {
    fn: cases.kebabCaps('weirdCased-String-Capped'),
    expect: 'WEIRD-CASED-STRING-CAPPED',
    info: 'kebabCaps can convert weird strings',
  },
]
