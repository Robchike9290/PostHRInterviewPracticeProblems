const selectionSort = function (array) {

  if (!Array.isArray(array)) throw "The input must be an array.";
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') throw "Some of the indexes in the array input were ont numerical"
  }
  if (array.length < 2) return array;

  for (let i = 0; i < array.length; i++) {
    let smallestValue = array[i];
    let smallestValueIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < smallestValue) {
        smallestValue = array[j];
        smallestValueIndex = j;
      }
    }
    if (smallestValue !== array[i]) {
      let temp = array[i];
      array[i] = array[smallestValueIndex];
      array[smallestValueIndex] = temp;
    }
  }

  return array;
}

module.exports = selectionSort;