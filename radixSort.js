const radixSort = function(input) {
  // Reject non-array inputs
  if (!Array.isArray(input)) throw "The input to this function must be an array";
  // Reject arrays with non-numerical and non-integer inputs
  for (let element of input) {
    if (typeof element !== "number" || element % 1 !== 0) {
      throw "All the indexes in the input array must be whole integers"
    }
  }
  // Return arrays with zero or single indexes without running them through the sort algorithm
  if (input.length < 2) return input;

  // Sort all the other possibilites

  // Sorting case for negative integers
  // Sorting case of postive integers and zero

  // Return the sorted input
}

module.exports = radixSort;