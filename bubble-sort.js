Array.prototype.bubbleSort = function() {
  var switched;
  var temp;

  do {
    switched = false;

    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp;
        switched = true;
      }
    }

  } while (switched);

  return this;
}

// implementation
var array = [3, 2, 1];
console.log(array.bubbleSort());
// outputs: [1, 2, 3]
