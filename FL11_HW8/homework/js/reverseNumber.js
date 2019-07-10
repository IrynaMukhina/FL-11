function isInteger(value) {
	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function reverseNumber(num) {
	let reverseNum;
	if (isInteger(num)) {
		if (num >= 0) {
			reverseNum = Number(String(num).split('').reverse('').join(''));
		} else {
			reverseNum = Number(String(num).split('').splice(1).reverse('').join('')) * -1;
		}
	}

	return reverseNum;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);