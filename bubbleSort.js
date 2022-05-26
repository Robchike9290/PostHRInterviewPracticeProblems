const bubbleSort = function(array) {

  if (!Array.isArray(array)) throw "An array is expected as an input.";

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') throw "Not all of the indexes of the array were the expected number type."
  }

  if (array.length < 2) return array;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }

  return array;
}

module.exports = bubbleSort;