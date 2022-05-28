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

  // SORT ALL THE OTHER POSSIBILITES

  // HELPER FUNCTIONS
  // Get number of digits in each number
  const getDigits = function(number) {
    number = Math.abs(number);
    let numDigits = 1;
    while (number / 10 >= 1) {
      number = (number - (number % 10)) / 10;
      numDigits++;
    }
    return numDigits;
  }
  // Place numbers into subarray buckets sorted by increasing order of starting digit, 0-9
  // Pull numbers out of subarray buckets by increasing order of starting digit, 0-9

  // Sorting case for negative integers
  // Sorting case of postive integers and zero

  // Return the sorted input
}

module.exports = radixSort;