function findThreeLargestNumbers(array) {
  // Write your code here.
	array.sort((a, b) => a - b)

	let res = []
	res.push(array[array.length - 3])
	res.push(array[array.length - 2])
	res.push(array[array.length - 1])

	return res
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
