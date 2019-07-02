const a1 = parseFloat(prompt('Please enter x-coordinate for A point'));
const a2 = parseFloat(prompt('Please enter y-coordinate for A point'));
const b1 = parseFloat(prompt('Please enter x-coordinate for B point'));
const b2 = parseFloat(prompt('Please enter y-coordinate for B point'));
const c1 = parseFloat(prompt('Please enter x-coordinate for C point'));
const c2 = parseFloat(prompt('Please enter y-coordinate for C point'));

let result;
const TWO = 2;

if ((a1 + b1) / TWO === c1 && (a2 + b2) / TWO === c2) {
    result = true;
} else {
    result = false;
}

console.log(result);