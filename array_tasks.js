var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd) 
		return arr;
	},

	square: function (arr) {
		var newArray = arr.map(function(number) {
			return number ** 2;
		});
		return newArray;
	},

	sum: function (arr) {
		return arr.reduce( (a, b) => a + b );
	},

	findDuplicates: function (arr) {
		var duplicates = [];
		var dupsCount = {};
		for(var i = 0; i < arr.length; i++) {
			dupsCount[arr[i]] = 0;
		}
		for(var i = 0; i < arr.length; i++) {
			dupsCount[arr[i]]++;
		}
		for(var key in dupsCount) {
			if(dupsCount[key] > 1) {
				duplicates.push(Number(key));
			}
		}
		return duplicates;

	},


	removeAndClone: function (arr, valueToRemove) {
		var result = arr.filter(function(valueToRemove) {
			return arr.indexOf(valueToRemove) == arr.lastIndexOf(valueToRemove);
		})
		return result;
	},


	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
		i = -1;
		while((i= arr.indexOf(itemToFind, i+1)) != -1){
			indexes.push(i);
		}
		return indexes;
	},


	sumOfAllEvenNumbersSquared: function (arr) {
			var sum = 0;
			for(var i = 0; i < arr.length; i++) {
				if((i % 2) == 0) {
					sum += i ** 2;
				}
			}
			return sum;
	}

}

module.exports = arrayTasks;
