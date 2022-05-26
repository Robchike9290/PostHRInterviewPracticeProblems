let insertionSort = function(array) {

  if (!Array.isArray(array)) throw ("The input was not an array.");

  for (let el of array) {
    if (typeof el !== "number") throw ("Not all elements are numbers");
  }

  if (array.length === 0 || array.length === 1) {
    return array;
  } else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        let counter = j;
        if (array[j] < array[i]) {
          while (counter >= 0 && array[counter] < array[counter-1]) {
            let temp = array[counter];
            array[counter] = array[counter-1];
            array[counter-1] = temp;
            counter--;
          }
        }
      }
    }
    return array;
  }
}

module.exports = insertionSort;