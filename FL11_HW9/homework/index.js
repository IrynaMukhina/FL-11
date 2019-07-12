//0
function getNumbers(str) {
	return str.split('')
						.filter(el => /[0-9]/.test(el))
						.map(el => Number(el));
}

// getNumbers('string');
// getNumbers('n1um3ber95');
//1
function findTypes() {
	const arg = [...arguments];
	let obj = {};
	arg.forEach(el => {
		const key = typeof el;
		if (!obj.hasOwnProperty(key)) {
			obj[key] = 1;
		} else {
			obj[key] += 1;
		}
	});

	return obj;
}

// findTypes('number');
// findTypes(null, 5, 'hello');
//2
function executeforEach(arr, func) {
	for(let i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

// executeforEach([1,2,3], function(el) { console.log(el) });
//3
function mapArray(arr, func) {
	let newArr = [];
	executeforEach(arr, function(el) {
		newArr.push(func(el));
	});

	return newArr;
}

// mapArray([2, 5, 8], function(el) { return el + 3 });
//4
function filterArray(arr, func) {
	let filterArr = [];
	executeforEach(arr, function(el) {
		if(func(el)) {
			filterArr.push(el);
		}
	});

	return filterArr;
}

// filterArray([2, 5, 8], function(el) { return el > 3 });
