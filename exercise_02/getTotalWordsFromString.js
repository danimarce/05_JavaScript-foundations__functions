/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * return the total number of words contained in one string
 * @param {string} sentence 
 * @returns {number}
 */
const getTotalWordsFromString = function (sentence) {
    const sentenceSplited = sentence.split(' ');
    const numberWords = sentenceSplited.length;

    return numberWords;
}

export default getTotalWordsFromString;
