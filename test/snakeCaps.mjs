import cases from '../src/index.mjs'

export default [
  {
    fn: cases.snakeCaps('kebab-case'),
    expect: 'KEBAB_CASE',
    info: 'snakeCaps can convert from kebab-case',
  },
  { fn: cases.snakeCaps('camelCase'), expect: 'CAMEL_CASE', info: 'snakeCaps can convert from camelCase' },
  {
    fn: cases.snakeCaps('PascalCase'),
    expect: 'PASCAL_CASE',
    info: 'snakeCAps can convert from PascalCase',
  },
  {
    fn: cases.snakeCaps('single'),
    expect: 'SINGLE',
    info: 'snakeCaps does not change single word strings',
  },
  {
    fn: cases.snakeCaps('weirdCased-String'),
    expect: 'WEIRD_CASED_STRING',
    info: 'snakeCaps can convert weird strings',
  },
]
