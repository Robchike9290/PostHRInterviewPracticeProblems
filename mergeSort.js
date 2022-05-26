const mergeSort = function(input) {
  if (!Array.isArray(input)) throw "The input must be an array.";

  input.forEach(element => {
    if (typeof element !== "number") throw "All of the indexes of the input array must be numbers";
  })

  if (input.length < 2) {
    return input;
  }

  // write impelementation of mergeSort below...
}

module.exports = mergeSort;