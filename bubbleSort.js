let test = [6, 3, 4, -11, 15, 4];
let otherTest = [55, 63, 1034216, -1, 0, 8];
let thirdTest = ['taco', 4, 5];
let fourthTest = 'hamburger';

const bubbleSort = function(array) {
  // I - An array
  // O - A sorted array
  // C - None
  // E - An array may already be sorted, i.e. it only has one or zero indexes.
  //   - An array may contain a non-numeric index, in which case a error should be thrown.
  //   - An insert may not be an array at all, which should cause an error.

  if (!Array.isArray(array)) throw "An array is expected as an input.";

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') throw "Not all of the indexes of the array were the expected number type."
  }

  if (array.length < 2) return array;

  // Loop through the array from beginning to end, starting from the first index.
  // Compare the current index with the next index
  // If the next index is smaller, swap the indexes
  // Continue this process until the end of the array is reached.
  // Then start again with the loop from the secdod index.
  // Continue this process until the second to last index is reached.
  // Return the sorted array.

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }

  return array;
}

bubbleSort(test);
bubbleSort(otherTest);
bubbleSort(thirdTest);
bubbleSort(fourthTest);