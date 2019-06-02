function getNthFib(n) {
  // Write your code here.
	let curr = 1

	let seq = []

	seq.push(0)
	seq.push(1)

	if (n < 2) {
		return seq[n - 1]
	}

	for(let i = 2; i < n; i++) {
		let next = seq[i - 1] + seq[i - 2]
		seq.push(next)
	}

	console.log(seq)
	return seq[seq.length - 1]
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
