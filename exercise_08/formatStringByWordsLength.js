/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * returns the parameter sentence in upper case if the number of sentence words if greater then 5, otherwise return lower case string 
 * @param {string} sentence 
 * @returns {string}
 */
const formatStringByWordsLength = function (sentence) {
    const totalWords = sentence.split(' ');

    if (totalWords.length > 5) {
        return sentence.toUpperCase();
    }

    return sentence.toLowerCase();
} 

export default formatStringByWordsLength;
