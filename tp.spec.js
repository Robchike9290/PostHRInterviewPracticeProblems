const add = require("./exampleModule").add;
const multiply = require("./exampleModule").multiply;
const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");

/*
A "describe" block can be used to group together multiple tests
which check the same nodule or function.
 */
describe("Example tests", function(){

  // Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
  it("Should add small numbers", function(){
    /* This test suite is written in Jest. There are many more methods other than "toBe"
    Go to: https://jestjs.io/docs/en/expect
    to find more options if "toBe" doesn't fit your use case.
    */
    expect(add(1,1)).toBe(2);
  });

  // In addition to expected, "happy path", behaviour as above, you should also test your edge cases
  it("Should return Infinity for numbers of type Number which are very large", function(){
    expect(add(1.6E310, 1)).toBe(Infinity);
  });
});

describe("bubbleSort", function(){
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