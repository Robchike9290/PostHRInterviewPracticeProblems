const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const selectionSort = require("./selectionSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");
const {radixSort, getDigits, getComparisonDigit, getMaxNumberOfDigits} = require("./radixSort");

describe("bubbleSort", function(){
  it("Should return arrays with zero or one elements in an unmodified state", function(){
    expect(bubbleSort([])).toStrictEqual([]);
    expect(bubbleSort([6])).toStrictEqual([6]);
  });

  it("Should sort an array of random whole numbers correctly.", function(){
    expect(bubbleSort([1, 2, 0, 44, -98, 7])).toStrictEqual([-98, 0, 1, 2, 7, 44]);
    expect(bubbleSort([55, 63, 1034216, -1, 0, 8])).toStrictEqual([-1, 0, 8, 55, 63, 1034216]);
  });

  it("Should sort an array of random non-whole numbers correctly.", function(){
    expect(bubbleSort([-2.4, 8, 0, 1, 99.9, 7])).toStrictEqual([-2.4, 0, 1, 7, 8, 99.9]);
    expect(bubbleSort([-5, -8.2, 6, -100, 0, 9, 9])).toStrictEqual([-100, -8.2, -5, 0, 6, 9, 9]);
  })

  it("Should throw an error if a non-numerical index is in the input array.", function(){
    expect(() => bubbleSort([5, 'taco', 4])).toThrow('Not all of the indexes of the array were the expected number type.');
  })

  it("Should throw an error if a non-array input is tried.", function(){
    expect(() => bubbleSort('i am stupid')).toThrow('An array is expected as an input.');
  })
});

describe("insertionSort", function(){
  it("Should return arrays with zero or one elements in an unmodified state", function(){
    expect(insertionSort([])).toStrictEqual([]);
    expect(insertionSort([6])).toStrictEqual([6]);
  });

  it("Should sort an array of random whole numbers correctly.", function(){
    expect(insertionSort([1, 22, -3, 7, 6, 51])).toStrictEqual([-3, 1, 6, 7, 22, 51]);
    expect(insertionSort([4, -8, -100, 70, 400])).toStrictEqual([-100, -8, 4, 70, 400]);
  });

  it("Should sort an array of random non-whole numbers correctly.", function(){
    expect(insertionSort([-2.4, -57, 8.2, 40, 7, 7.7])).toStrictEqual([-57, -2.4, 7, 7.7, 8.2, 40]);
    expect(insertionSort([-8, 7.4, 3, 9, -50.3])).toStrictEqual([-50.3, -8, 3, 7.4, 9]);
  })

  it("Should throw an error if a non-numerical index is in the input array.", function(){
    expect(() => insertionSort([76, true, NaN, 'taco', 4])).toThrow('Not all elements are numbers');
  })

  it("Should throw an error if a non-array input is tried.", function(){
    expect(() => insertionSort('Array, what\'s that???')).toThrow('The input was not an array.');
  })
})

describe("selectionSort", function(){
  it("Should return arrays with zero or one elements in an unmodified state", function(){
    expect(selectionSort([])).toStrictEqual([]);
    expect(selectionSort([6])).toStrictEqual([6]);
  });

  it("Should sort an array of random whole numbers correctly.", function(){
    expect(selectionSort([5, 66, 7, -4, -109, 88])).toStrictEqual([-109, -4, 5, 7, 66, 88]);
    expect(selectionSort([10, 0, 0, 4, -3, 8])).toStrictEqual([-3, 0, 0, 4, 8, 10]);
  });

  it("Should sort an array of random non-whole numbers correctly.", function(){
    expect(selectionSort([-2.4, -578, 8.2, 408, 7, 7.7])).toStrictEqual([-578, -2.4, 7, 7.7, 8.2, 408]);
    expect(selectionSort([-8, 7.48, 38, 9, -50.38])).toStrictEqual([-50.38, -8, 7.48, 9, 38]);
  })

  it("Should throw an error if a non-numerical index is in the input array.", function(){
    expect(() => selectionSort([8, NaN, 'hammer', true])).toThrow('Some of the indexes in the array input were ont numerical');
  })

  it("Should throw an error if a non-array input is tried.", function(){
    expect(() => selectionSort(true)).toThrow('The input must be an array.');
  })

  // Need to finish these tests for TDD for this function.
  describe("mergeSort", function(){
    let bigBackwardsArray = new Array(100000);
    for (let i = 0; i < 100000; i++) {
      bigBackwardsArray[i] = i + 1;
    }
    bigBackwardsArray.reverse();

    it("Should return arrays with zero or one elements in an unmodified state", function(){
      expect(mergeSort([])).toStrictEqual([]);
      expect(mergeSort([6])).toStrictEqual([6]);
    });

    it("Should sort an array of random whole numbers correctly.", function(){
      expect(mergeSort([5, 66, 7, -4, -109, 88])).toStrictEqual([-109, -4, 5, 7, 66, 88]);
      expect(mergeSort([10, 0, 0, 4, -3, 8])).toStrictEqual([-3, 0, 0, 4, 8, 10]);
    });

    it("Should sort an array of random non-whole numbers correctly.", function(){
      expect(mergeSort([-2.4, -578, 8.2, 408, 7, 7.7])).toStrictEqual([-578, -2.4, 7, 7.7, 8.2, 408]);
      expect(mergeSort([-8, 7.48, 38, 9, -50.38])).toStrictEqual([-50.38, -8, 7.48, 9, 38]);
    })

    it("Should sort a big array of numbers correctly.", function(){
      expect(mergeSort(bigBackwardsArray)).toStrictEqual(bigBackwardsArray.reverse());
    })

    it("Should throw an error if a non-numerical index is in the input array.", function(){
      expect(() => mergeSort([8, NaN, 'hammer', true])).toThrow('All of the indexes of the input array must be numbers');
    })

    it("Should throw an error if a non-array input is tried.", function(){
      expect(() => mergeSort(false)).toThrow('The input must be an array.');
    })
  })

  describe("quickSort", function(){
    let bigBackwardsArray = new Array(100000);
    for (let i = 0; i < 100000; i++) {
      bigBackwardsArray[i] = i + 1;
    }
    bigBackwardsArray.reverse();

    it("Should return arrays with zero or one elements in an unmodified state", function() {
      expect(quickSort([])).toStrictEqual([]);
      expect(quickSort([4])).toStrictEqual([4]);
    })

    it("Should throw an error when an input of the wrong type is passed in", function() {
      expect(() => quickSort("cheese")).toThrow("The input was expected to be an array");
    })

    it("Should throw an error when an input array contains non-numercial indexes", function() {
      expect(() => quickSort([1, 2, 3, 4, "Texas"])).toThrow("Some of the elements in the array not of a \"number\" type");
    })

    it("Should sort an array of random whole numbers correctly.", function(){
      expect(quickSort([5, 66, 7, -4, -109, 88])).toStrictEqual([-109, -4, 5, 7, 66, 88]);
      expect(quickSort([10, 0, 0, 4, -3, 8])).toStrictEqual([-3, 0, 0, 4, 8, 10]);
    });

    it("Should sort an array of random non-whole numbers correctly.", function(){
      expect(quickSort([-2.4, -578, 8.2, 408, 7, 7.7])).toStrictEqual([-578, -2.4, 7, 7.7, 8.2, 408]);
      expect(quickSort([-8, 7.48, 38, 9, -50.38])).toStrictEqual([-50.38, -8, 7.48, 9, 38]);
    })

    it("Should sort a big array of numbers correctly.", function(){
      expect(quickSort(bigBackwardsArray)).toStrictEqual(bigBackwardsArray.reverse());
    })
  })

  describe("radixSort - getDigits", function(){
    it("Should get the number of digits in an input number", function(){
      expect(getDigits(88)).toEqual(2);
      expect(getDigits(3246)).toEqual(4);
    })
  })

  describe("radixSort - getComparisonDigit", function(){
    it("Should get the digit at the requested number of places to the left of the ones place", function(){
      expect(getComparisonDigit(12346, 4)).toEqual(1);
      expect(getComparisonDigit(5, 0)).toEqual(5);
      expect(getComparisonDigit(-24356, 2)).toEqual(3);
    })
  })

  describe("radixSort - getMaxNumberOfDigits", function(){
    it("Should get the number of digits in the longest number in an array", function(){
      expect(getMaxNumberOfDigits([46235, 45, 77523, 34, 54, 222])).toEqual(5);
    })
  })

  describe("radixSort - radixSort", function(){
    it("should throw an error if the input is not an array", function(){
      expect(() => radixSort("burger")).toThrow("The input to this function must be an array");
    })
    it("should throw an error if any index of the input array is not a number", function(){
      expect(() => radixSort([1, 2, 3, 4, "five"])).toThrow("All the indexes in the input array must be whole integers");
    })
    it("should throw an error if any index of the input array is a not a whole number", function(){
      expect(() => radixSort([1, 2, 3, 4, 5.1])).toThrow("All the indexes in the input array must be whole integers");
    })
    it("should return arrays with zero or one index in an unmodified state", function(){
      expect(radixSort([])).toStrictEqual([]);
      expect(radixSort([1])).toStrictEqual([1]);
    })
    it("should sort an array of random positive whole numbers correctly", function(){
      expect(radixSort([4, 6, 32, 14, 900, 4591, 32457, 50])).toStrictEqual([4, 6, 14, 32, 50, 900, 4591, 32457]);
    })
    it("should sort an array of random negative whole numbers correctly", function(){
      expect(radixSort([-500, -5, -50, -5000, -50000])).toStrictEqual([-50000, -5000, -500, -50, -5]);
    })
    it("should sort an array of mixed random positive and nugative numbers correctly", function(){
      expect(radixSort([-500, -865, -34, 45, 906, 50293, 78757, 0, 1, -2])).toStrictEqual([-865, -500, -34, -2, 0, 1, 45, 906, 50293, 78757]);
    })
  })
})