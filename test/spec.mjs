import { is } from '@magic/test'
import cases from '../src/index.mjs'

export default [
  { fn: () => cases, expect: is.object, info: 'cases is an object' },
  { fn: () => cases.camel, expect: is.fn, info: 'cases.camel is a function' },
  { fn: () => cases.kebab, expect: is.fn, info: 'cases.kebab is a function' },
  { fn: () => cases.kebabCaps, expect: is.fn, info: 'cases.kebabCaps is a function' },
  { fn: () => cases.pascal, expect: is.fn, info: 'cases.pascal is a function' },
  { fn: () => cases.snake, expect: is.fn, info: 'cases.snake is a function' },
  { fn: () => cases.snakeCaps, expect: is.fn, info: 'cases.snakeCaps is a function' },
]
