var addBinary = function(a, b) {

    let result = '';

    let carry = 0;

    let i = a.length - 1
    let k = b.length - 1;

    while (i >= 0 || k >= 0 || carry == 1) {

        let sum = 0;
        sum += ((i >= 0 ? parseInt(a[i]) : 0));
        sum += ((k >= 0 ? parseInt(b[k]) : 0));

        sum += carry;

        if (sum > 1) {
          carry = 1;
          result = '0' + result;
        } else if (sum == 1){
          carry = 0;
          result = '1' + result;
        } else {
          carry = 0;
          result = '0' + result;
        }

        i--;
        k--

        //console.log(result)

    }
    return result
};

console.log(addBinary('1010', '1011'));
