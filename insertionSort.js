// let test = [1,22,-3,7,6,51]
// let otherTest = [4,-8,-100,70,400]

let insertionSort = function(array) {
  // I - array of numbers
  // O - sorted array of numbers
  // C - none
  // E - Zero or one number may be in the array, which would already be sorted.
  //   - A non-numercial index may exist, which would not match the intent of the sort
  //   - The input might not be of the array type.

  // test if the input is an array.  Throw an error if it is not.
  if (!Array.isArray(array)) throw ("The input was ont an array.");

  // loop through the values in the array.  If a non-numerical value is found, throw an error
  for (let el of array) {
    if (Number.isNan(el)) throw ("Not all elements are numbers");
  }

  // test the length of the array. If it is zero or one, return the array as-is
  if (array.length === 0 || array.length === 1) {
    return array;
  // If is greater in length, perform the sort
  } else {
    // Loop forward through the elements, starting at the first and comparing this element to its successor.
    // If the successor is less than the current element, swap them.
    // After swapping, compare the now earlier element in the array
    // If the earlier element is now larger than the element before it, swap this element and its predecessor
    // Continue to do this until the beginning of the array has been reached, and the move to the next index for testing or swapping if necessary.
    // Repeat this process until the end of the array has been reached.
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        let counter = j;
        if (array[j] < array[i]) {
          while (counter > 0 && array[counter] < array[counter-1]) {
            let temp = array[counter];
            array[counter] = array[counter+1];
            array[counter+1] = temp;
          }
        }
      }
    }
    return array;
  }
}