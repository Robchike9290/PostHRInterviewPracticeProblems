const quickSort = function(input) {
  // I - An array
  // O - A sorted array
  // C - None
  // E - The input may be of the wrong type
  //   - The input array may contain elements that are not numercial
  //   - The input array may only have zero or one elements, and therefore already be sorted.

  // Edge cases first
  if (!Array.isArray(input)) throw "The input was expected to be an array";

  for (let index of input) {
    if (typeof index !== "number") throw "Some of the elements in the array not of a \"number\" type";
  }

  if (input.length < 2) return input;

  // Quicksort alogrithm second
}

module.exports = quickSort;