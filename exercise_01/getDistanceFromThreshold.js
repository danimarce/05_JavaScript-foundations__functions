/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * returns how much a number exceeds or is left to reach one value
 * @param {number} valueNumber 
 * @param {number} thresholdNumber 
 * @returns {number}
 */
const getDistanceFromThreshold = function (valueNumber, thresholdNumber) {
    return valueNumber - thresholdNumber;
}

export default getDistanceFromThreshold;
