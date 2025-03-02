/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */

/**
 * hint 👉 array should be treated in a different way. Use Array.isArray() to check it
 * docu 👉 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

/**
 * returns if type value matches type received as argument
 * @param {*} value 
 * @param {string} type
 * @returns {boolean}
 */
const isTypeOf = function (value, type) {
    if (Array.isArray(value)) {
        return typeof value === type;
    }

    return typeof value === type;
}

export default isTypeOf;
