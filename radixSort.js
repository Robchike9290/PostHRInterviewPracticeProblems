const getDigits = function(number) {
  number = Math.abs(number);
  let numDigits = 1;
  while (number / 10 >= 1) {
    number = (number - (number % 10)) / 10;
    numDigits++;
  }
  return numDigits;
}

const getComparisonDigit = function(number, place) {
  let absoluteNumber = Math.abs(number);
  let digit = Math.floor(Math.abs(absoluteNumber) / Math.pow(10, place)) % 10;
  return digit;
}

const getMaxNumberOfDigits = function(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = Math.abs(array[i]);
    let currentNumDigits = Math.floor(Math.log10(currentNum)) + 1;
    max = Math.max(max, currentNumDigits);
  }
  return max;
}

const radixSort = function(input) {
  if (!Array.isArray(input)) throw "The input to this function must be an array";

  for (let element of input) {
    if (typeof element !== "number" || element % 1 !== 0) {
      throw "All the indexes in the input array must be whole integers"
    }
  }

  if (input.length < 2) return input;

  let negativeNumberArray = [];
  let positiveNumberArray = [];

  input.forEach(number => {
    if (number >= 0) {
      positiveNumberArray.push(number);
    } else {
      negativeNumberArray.push(number);
    }
  })

  const sort = function(array) {
    let maxDigits = getMaxNumberOfDigits(array);
    for (let i = 0; i < maxDigits; i++) {
      let digitBuckets = Array.from({length: 10}, () => []);
      for (let j = 0; j < array.length; j++) {
        let comparisonDigit = getComparisonDigit(array[j], i);
        digitBuckets[comparisonDigit].push(array[j]);
      }
      array = [].concat(...digitBuckets);
    }
    return array;
  }

  positiveNumberArray = sort(positiveNumberArray);
  negativeNumberArray = sort(negativeNumberArray).reverse();
  for (let number in negativeNumberArray) {
    number *= -1;
  }

  return negativeNumberArray.concat(positiveNumberArray);
}

module.exports = {
  getDigits: getDigits,
  getComparisonDigit: getComparisonDigit,
  getMaxNumberOfDigits: getMaxNumberOfDigits,
  radixSort: radixSort
}