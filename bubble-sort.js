function bubbleSort(arr) {
  var switched;
  var temp;

  do {
    switched = false;

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        switched = true;
      }
    }

  } while (switched);

  return arr;
}

// implementation
console.log(bubbleSort([3, 2, 1]));
// outputs: [1, 2, 3]
