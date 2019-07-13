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

//5
function showFormattedDate(date) {
	const month = date.getMonth();
	const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const day = date.getDate();
	const year = date.getFullYear();

	return `Date: ${monthArray[month]} ${day} ${year}`;
}
//showFormattedDate(new Date('2019-01-27T01:10:00'));

//6
function canConvertToDate(date) {
	return !isNaN(new Date(date).getTime());
}
//canConvertToDate(‘2016-13-18T00:00:00’) // false
//canConvertToDate('2016-03-18T00:00:00’) // true

//7
function daysBetween(date1, date2) {
	const oneDayInSecond = 86400000;
	const differenceInDay = Math.round((date1.getTime() - date2.getTime()) / oneDayInSecond);

	return differenceInDay > 0 ? differenceInDay : differenceInDay * Math.sign(differenceInDay);
}
//daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

//8
function getAmountOfAdultPeople(data) {
	const oneYearInDays = 6570;
	let arr = filterArray(data, function(el) {
		return daysBetween(new Date(), new Date(el[' birthday '])) >= oneYearInDays;
	});
	
	return arr.length;
}
/*[
	{
		"_id": "5b5e3168c6bf40f2c1235cd6",
		"index": 0,
		" birthday ": '2016-03-18T00:00:00',
		"eyeColor": "green",
		"name": "Stein",
		"favoriteFruit": "apple"
	  },
	  {
		"_id": "5b5e3168e328c0d72e4f27d8",
		"index": 1,
		" birthday ": '1991-02-11T00:00:00',
		"eyeColor": "blue",
		"name": "Cortez",
		"favoriteFruit": "strawberry"
	  },
	  {
		"_id": "5b5e3168cc79132b631c666a",
		"index": 2,
		" birthday ": '1984-04-17T00:00:00',
		"eyeColor": "blue",
		"name": "Suzette",
		"favoriteFruit": "apple"
	  },
	  {
		"_id": "5b5e31682093adcc6cd0dde5",
		"index": 3,
		" birthday ": '1994-04-17T00:00:00',
		"eyeColor": "green",
		"name": "George",
		"favoriteFruit": "banana"
	  }
	]
*/

//9
function keys(obj) {
	let arr = [];
	for(let key in obj) {
		arr.push(key);
	}

	return arr;
}
//keys({keyOne: 1, keyTwo: 2, keyThree: 3});

//10
function values(obj) {
	let arr = [];
	for(let key in obj) {
		arr.push(obj[key])
	}

	return arr;
}
//values({keyOne: 1, keyTwo: 2, keyThree: 3});