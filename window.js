var name = 'Kuddus'; //global variable

function add (num1, num2) {
    var result = num1 + num2;
    console.log('name inside', name);
    // console.log('name inside', result);
    return result;
}

console.log('name outside', name);
// console.log('name inside', result);

var sum = add (13, 21);
console.log(sum);