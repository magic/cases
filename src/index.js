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
    .map((s, i) =>
      i === 0 ? s[0].toLowerCase() + s.substring(1) : s[0].toUpperCase() + s.substring(1),
    )
    .join('')

/** @type {CaseHandler} */
export const kebab = s =>
  s
    .replace(/_/gim, '-')
    .split(upperCaseRegex)
    .filter(a => a)
    .map(lower)
    .join('-')
    .replace(/--+/gim, '-')

/** @type {CaseHandler} */
export const kebabCaps = s => kebab(s).toUpperCase()

/** @type {CaseHandler} */
export const pascal = s =>
  s
    .split(snakeRegex)
    .map(s => `${s[0].toUpperCase()}${s.substring(1)}`)
    .join('')

/** @type {CaseHandler} */
export const snake = s =>
  s
    .replace(/-/gim, '_')
    .split(upperCaseRegex)
    .filter(a => a)
    .map(lower)
    .join('_')
    .replace(/__+/gim, '_')

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
