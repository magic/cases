const snakeRegex = /[-_]/gi
const upperCaseRegex = /([A-Z]?[^A-Z]*)/g

/**
 * @typedef {(s: string) => string} CaseHandler
 */

/** @type {CaseHandler} */
export const lower = s => s.toLowerCase()

/** @type {CaseHandler} */
export const camel = s =>
  s
    .split(snakeRegex)
    .filter(a => a)
    .map((s, i) => (i === 0 ? s[0].toLowerCase() + s.substr(1) : s[0].toUpperCase() + s.substr(1)))
    .join('')

/** @type {CaseHandler} */
export const kebab = s =>
  s
    .replace('_', '-')
    .split(upperCaseRegex)
    .filter(a => a)
    .map(lower)
    .join('-')
    .replace(/--+/g, '-')

/** @type {CaseHandler} */
export const kebabCaps = s => kebab(s).toUpperCase()

/** @type {CaseHandler} */
export const pascal = s =>
  s
    .split(snakeRegex)
    .map(s => `${s[0].toUpperCase()}${s.substr(1)}`)
    .join('')

/** @type {CaseHandler} */
export const snake = s =>
  s
    .replace('-', '_')
    .split(upperCaseRegex)
    .filter(a => a)
    .map(lower)
    .join('_')
    .replace(/__+/g, '_')

/** @type {CaseHandler} */
export const snakeCaps = s => snake(s).toUpperCase()

export default {
  camel,
  kebab,
  kebabCaps,
  pascal,
  snake,
  snakeCaps,
}
