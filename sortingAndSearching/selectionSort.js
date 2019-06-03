function selectionSort(array) {
  // Write your code here.

	for(let i = 0; i < array.length - 1; i++) {

		let jMin = i
		for(let j = i + 1; j < array.length; j++ ) {

			if (array[j] < array[jMin]) {
				jMin = j
			}

		}

		if (jMin != i) {
			let tmp = array[i]
			array[i] = array[jMin]
			array[jMin] = tmp
		}
	}
	return array
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
