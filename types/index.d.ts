/**
 * @typedef {(s: string) => string} CaseHandler
 */
/** @type {CaseHandler} */
export const lower: CaseHandler
/** @type {CaseHandler} */
export const camel: CaseHandler
/** @type {CaseHandler} */
export const kebab: CaseHandler
/** @type {CaseHandler} */
export const kebabCaps: CaseHandler
/** @type {CaseHandler} */
export const pascal: CaseHandler
/** @type {CaseHandler} */
export const snake: CaseHandler
/** @type {CaseHandler} */
export const snakeCaps: CaseHandler
declare namespace _default {
  export { camel }
  export { kebab }
  export { kebabCaps }
  export { pascal }
  export { snake }
  export { snakeCaps }
}
export default _default
export type CaseHandler = (s: string) => string
