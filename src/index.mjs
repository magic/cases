const snakeRegex = /[-_]/gi
const upperCaseRegex = /([A-Z][a-z]+)/g

export const lower = (s, i, b) => s.toLowerCase()

export const camel = s =>
  s
    .split(snakeRegex)
    .filter(a => a)
    .map((s, i) => (i === 0 ? s[0].toLowerCase() + s.substr(1) : s[0].toUpperCase() + s.substr(1)))
    .join('')

export const kebab = s =>
  s
    .replace('_', '-')
    .split(upperCaseRegex)
    .filter(a => a)
    .map(lower)
    .join('-')
    .replace(/--+/g, '-')

export const kebabCaps = s => kebab(s).toUpperCase()

export const pascal = s =>
  s
    .split(snakeRegex)
    .map(s => `${s[0].toUpperCase()}${s.substr(1)}`)
    .join('')

export const snake = s =>
  s
    .replace('-', '_')
    .split(upperCaseRegex)
    .filter(a => a)
    .map(lower)
    .join('_')
    .replace(/__+/g, '_')

export const snakeCaps = s => snake(s).toUpperCase()

export default {
  camel,
  kebab,
  kebabCaps,
  pascal,
  snake,
  snakeCaps,
}
