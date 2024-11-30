/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

/**
 * transforms collection into string, if array has elements, then return array as string, joined by '|', otherwise, return an empty string
 * @param {Array} collection 
 * @returns {string}
 */
const transformCollectionToString = function (collection) {
    let finalString = '';
    const collectionLength = collection.length;

    for (let indexCollection = 0; indexCollection < collectionLength; indexCollection++) {
        finalString += collection[indexCollection];

        if (indexCollection < collectionLength - 1) {
            finalString += ' | ';
        }
    }

    return finalString;
}

export default transformCollectionToString;
