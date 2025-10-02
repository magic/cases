import { version } from '@magic/test'
import cases from '../src/index.js'

const spec = {
  camel: 'fn',
  kebab: 'fn',
  kebabCaps: 'fn',
  pascal: 'fn',
  snake: 'fn',
  snakeCaps: 'fn',
}

export default version(cases, spec)
