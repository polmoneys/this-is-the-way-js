import isEmpty from "lodash.isempty";
import isNil from "lodash.isnil";
import omit from "lodash.omit";
import pick from "lodash.pick";

/** toXS
 *
 * Make an array out of a value.
 * @param {initial}
 * @example <caption>If value is a string</caption>
 * toXS('Barcelona')
 * // returns ['Barcelona']
 *
 * @example <caption>If value is an array</caption>
 * toXS([{},{}])
 * // returns [{},{}]
 */

export const toXS = (initial) => {
  if (Array.isArray(initial)) {
    return initial;
  }
  return [initial];
};

/** fromXS
 *
 * Pick from value
 * @param {initial}
 * @example <caption>If value is a string</caption>
 * fromXS('Barcelona')
 * // returns 'Barcelona'
 *
 * @example <caption>If value is an array</caption>
 * fromXS(['Barcelona'])
 * // returns 'Barcelona'
 *
 */
 
export const fromXS = (initial) =>
  Array.isArray(initial) ? initial[0] : initial;

/** xsToObjbyId
 *
 * Chunk XS by ID
 * @param {array}
 * @returns {object}
 * xsToObjbyId([([{id:1, name:'Ava', months: 4},{id:2, name:'Mia', months: 8},{id:3, name:'Kurt', months: 34}])
 * // returns { 1: {name:'Ava', months: 4},2: {name:'Mia', months: 8},3: {name:'Kurt', months: 34}}
 * @version 1.0.0
 *
 */

export const xsToObjbyId = (xs) =>
  xs.reduce((hash, { id, ...rest }) => {
    hash[id] = { ...rest };
    return hash;
  }, {});

/** xsSplit
  * 
  * 
 * @param {array} 
 * @param {function} 
 * @returns {array} xs that matches condition
 * @returns {array} xs that don't

  * @example <caption>Find kittens</caption>
  * xsSplit([{name:'Ava', months: 4},{name:'Mia', months: 8},{name:'Ava', months: 34}])
  * // returns [ [{name:'Ava', months: 4},{name:'Mia', months: 8}], [{name:'Ava', months: 34}]]
 * @todo Return summary match.length dispose.length 
 * @version 1.0.0
*
  */

export const xsSplit = (xs, fn) => {
  let match = [];
  let dispose = [];
  for (const el of xs) {
    if (fn(el) === true) {
      match.push(el);
    } else {
      dispose.push(el);
    }
  }
  return [match, dispose];
};

/** isUpdater
 *
 * @param {prop}
 * @returns {boolean}
 *
 */

export const isUpdater = (prop) => typeof prop === "function";

/** noop
 *
 * @returns {object}
 *
 */

export const noop = () => ({});

/** noopStr
 *
 * @returns {nothing}
 *
 */
export const noopStr = () => "";

/** cbOrNoop
 *
 * @param {function}
 * @returns {function}
 * @returns {object}
 *
 */

export const cbOrNoop = (fn) => {
  return typeof fn === "function" ? fn : noop;
};

/** cbIf
 *
 * @param {condition}
 * @param {function}
 * @param {function}
 * @returns {function}
 *
 */
export const cbIf = (condition, yup, nope) => (condition ? yup() : nope());
