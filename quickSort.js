const quickSort = function(input) {
  if (!Array.isArray(input)) throw "The input was expected to be an array";

  for (let index of input) {
    if (typeof index !== "number") throw "Some of the elements in the array not of a \"number\" type";
  }

  if (input.length < 2) return input;

  const createAndSort = function(array) {
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let leftArray = [];
    let leftArraySorted = [];
    let rightArray = [];
    let rightArraySorted = [];

    for (let i = 0; i < array.length; i++) {
      if (i !== pivotIndex) {
        if (array[i] <= pivot) leftArray.push(array[i]);
        else if  (array[i] > pivot) rightArray.push(array[i]);
      }
    }

    if (leftArray.length > 1) {
      leftArraySorted = createAndSort(leftArray);
    } else  {
      leftArraySorted = leftArray;
    }

    if (rightArray.length > 1) {
      rightArraySorted = createAndSort(rightArray);
    } else {
      rightArraySorted = rightArray;
    }

    return leftArraySorted.concat(pivot).concat(rightArraySorted);
  }

  return createAndSort(input);
}

module.exports = quickSort;