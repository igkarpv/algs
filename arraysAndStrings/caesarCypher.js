function caesarCipherEncryptor(string, key) {
  // Write your code here.
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	let res = ''
	for(let i = 0; i < string.length; i++) {
		let index = alphabet.indexOf(string[i])

		let newIndex = index + key

		while (newIndex >= alphabet.length) {
			newIndex = 0 + newIndex - alphabet.length
		}

		res += alphabet[newIndex]
	}

	return res

}



// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
