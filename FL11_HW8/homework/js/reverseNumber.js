function isInteger(value) {
	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function reverseNumber(num) {
	if (isInteger(num)) {
		let reverseNum = '';
		const sign = Math.sign(num);
		const numStr = String(num * sign);
		for(let i = numStr.length - 1; i >= 0; i--) {
		reverseNum += numStr[i];
	}

	return Number(reverseNum) * sign;
	}
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);