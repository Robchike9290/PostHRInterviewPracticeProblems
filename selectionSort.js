let test = [5, 66, 7, -4, -109, 88];
let test2 = [10, 0, 0, 4, -3, 8];
let test3 = [8, NaN, 'hammer', true];
let test4 = true;

const selectionSort = function (array) {
  // I - An array
  // O - A sorted array
  // C - None
  // E - The input may have only one or zero elements, and thus could be considered sorted.
  //   - The input array may contain elements that are not numbers, in which case an error should be thrown
  //   - The input not be an array, in which case an error should be thrown.

  // Address the edge cases first, strating with error handling.
  if (!Array.isArray(array)) throw "The input must be an array.";
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') throw "Some of the indexes in the array input were ont numerical"
  }
  if (array.length < 2) return array;

  // Loop through the array from beginning to end
    // Set a placeholder variable to keep track of the minimum element, set to the current element
    // Have an inner loop over the array from beginning to end
      // If the current element is less than the minimum element, reset the variable to this element
    // Swap the current element and the minimum element if they are not equal.

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
  // Return the sorted array.
  return array;
}

// selectionSort(test);
// selectionSort(test2);
// selectionSort(test3);
// selectionSort(test4);