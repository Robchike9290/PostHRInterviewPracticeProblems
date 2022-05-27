const mergeSort = function(input) {
  if (!Array.isArray(input)) throw "The input must be an array.";

  input.forEach(element => {
    if (typeof element !== "number") throw "All of the indexes of the input array must be numbers";
  })

  if (input.length < 2) {
    return input;
  }

  const decomposeAndSortArray = function(array) {
    if (array.length <= 1) return array;

    let midpoint = Math.floor(array.length / 2);
    let leftArray = decomposeAndSortArray(array.slice(0, midpoint));
    let rightArray = decomposeAndSortArray(array.slice(midpoint));

    return mergeArrays(leftArray, rightArray);
  }

  const mergeArrays = function(leftArray, rightArray) {
    let result = [];
    let left = 0;
    let right = 0;

    while (left < leftArray.length && right < rightArray.length) {
      if (leftArray[left] <= rightArray[right]) {
        result.push(leftArray[left]);
        left++;
      } else {
        result.push(rightArray[right]);
        right++;
      }
    }
    while (left < leftArray.length) {
      result.push(leftArray[left]);
      left++;
    }

    while (right < rightArray.length) {
      result.push(rightArray[right]);
      right++;
    }

    return result;
  }

  return decomposeAndSortArray(input);
}

module.exports = mergeSort;