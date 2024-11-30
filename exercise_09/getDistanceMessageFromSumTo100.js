/** 
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */

/**
 * generates a random number between 0-100 and it sum to given number, if the sum exceeds 100 returns "Sum with value N exceeds in N from number 100", otherwise returns "Sum with value N is left in N from number 100"
 * @param {number} inputNumber 
 * @returns {string}
 */
const getDistanceMessageFromSumTo100 = function (inputNumber) {
    const randomNumber = Math.floor(Math.random() * (100 + 1));
    const totalSum = randomNumber + inputNumber;
    
    if (totalSum > 100) {
        const totalExceed = totalSum - 100;

        return 'Sum with value ' + totalSum +' exceeds in ' + totalExceed +' from number 100'
    }

    const differenceToHundred = 100 - totalSum;

    return 'Sum with value '+ totalSum +' is left in ' + differenceToHundred + ' from number 100';

}

export default getDistanceMessageFromSumTo100;
