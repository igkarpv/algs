function bubbleSort(array) {
  // Write your code here.
	let swapped = true
	while(swapped) {

		swapped = false
		for(let i = 0; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				let tmp = array[i]
				array[i] = array[i - 1]
				array[i - 1] = tmp
				swapped = true
			}
		}
	}

	return array
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
