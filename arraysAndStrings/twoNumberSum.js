/*

*/

function twoNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a, b) => a - b)

	let lo = 0
	let hi = array.length - 1

	// [3,5,-4,8,11,1,-1,6]
	// [-4,-1,1,3,5,6,8,11]
	// target 10
	// -4, number 14

	while (lo < hi) {
		let numberLo = array[lo]
		let numberHi = array[hi]
		let targetNumber2 = targetSum - numberLo

		if (targetNumber2 > numberHi) {
			lo++
		} else if (targetNumber2 == numberHi) {
			return [numberLo, numberHi]
		} else {
			hi--
		}

	}

	return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
