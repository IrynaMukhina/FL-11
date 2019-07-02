
const a = parseFloat(prompt('Please enter triangle side A'));
const b = parseFloat(prompt('Please enter triangle side B'));
const c = parseFloat(prompt('Please enter triangle side C'));

let result;

if (a + b > c && a + c > b && b + c > a ) {
	if ( a === b && a === c) {
		result = `Eequivalent triangle`;
	} else if ( a === b && a !== c || a === c && a !== b || b === c && b !== a) {
		result = `Isosceles triangle`;
	} else {
		result = `Normal triangle`;
	}
} else {
	result = `Triangle doesn’t exist`;
}

alert(result);