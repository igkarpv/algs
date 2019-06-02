function binarySearch(array, target) {
  // Write your code here.

	let lo = 0
	let hi = array.length - 1

	while (lo <= hi) {
		let mid = Math.trunc((lo + hi) / 2)

		if (array[mid] > target) {
			hi--
		} else if (array[mid] < target) {
			lo++
		} else {
			return mid
		}

	}

	return -1
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
