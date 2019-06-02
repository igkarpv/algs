function isPalindrome(string) {
  // Write your code here.

	let lo = 0
	let hi = string.length - 1

	while (lo < hi) {
		if(string[lo] != string[hi])
			return false
		lo++
		hi--
	}

	return true
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
