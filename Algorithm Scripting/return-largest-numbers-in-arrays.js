function largestOfFour(arr) {
  let large = 0;
  let largestArr = [];

  for (let i = 0; i < arr.length; i++) {
    large = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (large < arr[i][j]) {
        large = arr[i][j];
      }
    }
    largestArr.push(large);
  }

  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);