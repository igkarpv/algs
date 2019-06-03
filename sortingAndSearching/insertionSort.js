function insertionSort(array) {
  // Write your code here.

	let i = 1
	while (i < array.length) {
		let j = i
		while (j > 0 && array[j - 1] > array[j]) {
			let tmp = array[j]
			array[j] = array[j - 1]
			array[j - 1] = tmp
			j--
		}
		i++
	}

	return array
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
