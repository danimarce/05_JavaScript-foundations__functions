/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * returns a rounded random number depending on a limit
 * @param {number} numberLimit 
 * @returns {number}
 */
const generateRandomNumberInRange = function (numberLimit) {
    const randomNumber = Math.floor(Math.random() * (numberLimit + 1));

    return randomNumber;
}

export default generateRandomNumberInRange;
