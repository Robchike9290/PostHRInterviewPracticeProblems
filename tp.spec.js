const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const selectionSort = require("./selectionSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");
const {radixSort, getDigits, getComparisonDigit, getMaxNumberOfDigits} = require("./radixSort");
const {Node, SinglyLinkedList} = require("./SinglyLinkedList");

describe("bubbleSort", function(){
  it("Should return arrays with zero or one elements in an unmodified state", function(){
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([6])).toEqual([6]);
  });

  it("Should sort an array of random whole numbers correctly.", function(){
    expect(bubbleSort([1, 2, 0, 44, -98, 7])).toEqual([-98, 0, 1, 2, 7, 44]);
    expect(bubbleSort([55, 63, 1034216, -1, 0, 8])).toEqual([-1, 0, 8, 55, 63, 1034216]);
  });

  it("Should sort an array of random non-whole numbers correctly.", function(){
    expect(bubbleSort([-2.4, 8, 0, 1, 99.9, 7])).toEqual([-2.4, 0, 1, 7, 8, 99.9]);
    expect(bubbleSort([-5, -8.2, 6, -100, 0, 9, 9])).toEqual([-100, -8.2, -5, 0, 6, 9, 9]);
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
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([6])).toEqual([6]);
  });

  it("Should sort an array of random whole numbers correctly.", function(){
    expect(insertionSort([1, 22, -3, 7, 6, 51])).toEqual([-3, 1, 6, 7, 22, 51]);
    expect(insertionSort([4, -8, -100, 70, 400])).toEqual([-100, -8, 4, 70, 400]);
  });

  it("Should sort an array of random non-whole numbers correctly.", function(){
    expect(insertionSort([-2.4, -57, 8.2, 40, 7, 7.7])).toEqual([-57, -2.4, 7, 7.7, 8.2, 40]);
    expect(insertionSort([-8, 7.4, 3, 9, -50.3])).toEqual([-50.3, -8, 3, 7.4, 9]);
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
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([6])).toEqual([6]);
  });

  it("Should sort an array of random whole numbers correctly.", function(){
    expect(selectionSort([5, 66, 7, -4, -109, 88])).toEqual([-109, -4, 5, 7, 66, 88]);
    expect(selectionSort([10, 0, 0, 4, -3, 8])).toEqual([-3, 0, 0, 4, 8, 10]);
  });

  it("Should sort an array of random non-whole numbers correctly.", function(){
    expect(selectionSort([-2.4, -578, 8.2, 408, 7, 7.7])).toEqual([-578, -2.4, 7, 7.7, 8.2, 408]);
    expect(selectionSort([-8, 7.48, 38, 9, -50.38])).toEqual([-50.38, -8, 7.48, 9, 38]);
  })

  it("Should throw an error if a non-numerical index is in the input array.", function(){
    expect(() => selectionSort([8, NaN, 'hammer', true])).toThrow('Some of the indexes in the array input were ont numerical');
  })

  it("Should throw an error if a non-array input is tried.", function(){
    expect(() => selectionSort(true)).toThrow('The input must be an array.');
  })

  describe("mergeSort", function(){
    let bigBackwardsArray = new Array(100000);
    for (let i = 0; i < 100000; i++) {
      bigBackwardsArray[i] = i + 1;
    }
    bigBackwardsArray.reverse();

    it("Should return arrays with zero or one elements in an unmodified state", function(){
      expect(mergeSort([])).toEqual([]);
      expect(mergeSort([6])).toEqual([6]);
    });

    it("Should sort an array of random whole numbers correctly.", function(){
      expect(mergeSort([5, 66, 7, -4, -109, 88])).toEqual([-109, -4, 5, 7, 66, 88]);
      expect(mergeSort([10, 0, 0, 4, -3, 8])).toEqual([-3, 0, 0, 4, 8, 10]);
    });

    it("Should sort an array of random non-whole numbers correctly.", function(){
      expect(mergeSort([-2.4, -578, 8.2, 408, 7, 7.7])).toEqual([-578, -2.4, 7, 7.7, 8.2, 408]);
      expect(mergeSort([-8, 7.48, 38, 9, -50.38])).toEqual([-50.38, -8, 7.48, 9, 38]);
    })

    it("Should sort a big array of numbers correctly.", function(){
      expect(mergeSort(bigBackwardsArray)).toEqual(bigBackwardsArray.reverse());
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
      expect(quickSort([])).toEqual([]);
      expect(quickSort([4])).toEqual([4]);
    })

    it("Should throw an error when an input of the wrong type is passed in", function() {
      expect(() => quickSort("cheese")).toThrow("The input was expected to be an array");
    })

    it("Should throw an error when an input array contains non-numercial indexes", function() {
      expect(() => quickSort([1, 2, 3, 4, "Texas"])).toThrow("Some of the elements in the array not of a \"number\" type");
    })

    it("Should sort an array of random whole numbers correctly.", function(){
      expect(quickSort([5, 66, 7, -4, -109, 88])).toEqual([-109, -4, 5, 7, 66, 88]);
      expect(quickSort([10, 0, 0, 4, -3, 8])).toEqual([-3, 0, 0, 4, 8, 10]);
    });

    it("Should sort an array of random non-whole numbers correctly.", function(){
      expect(quickSort([-2.4, -578, 8.2, 408, 7, 7.7])).toEqual([-578, -2.4, 7, 7.7, 8.2, 408]);
      expect(quickSort([-8, 7.48, 38, 9, -50.38])).toEqual([-50.38, -8, 7.48, 9, 38]);
    })

    it("Should sort a big array of numbers correctly.", function(){
      expect(quickSort(bigBackwardsArray)).toEqual(bigBackwardsArray.reverse());
    })
  })

  describe("radixSort - getDigits", function(){
    it("Should get the number of digits in an input number", function(){
      expect(getDigits(88)).toBe(2);
      expect(getDigits(3246)).toBe(4);
    })
  })

  describe("radixSort - getComparisonDigit", function(){
    it("Should get the digit at the requested number of places to the left of the ones place", function(){
      expect(getComparisonDigit(12346, 4)).toBe(1);
      expect(getComparisonDigit(5, 0)).toBe(5);
      expect(getComparisonDigit(-24356, 2)).toBe(3);
    })
  })

  describe("radixSort - getMaxNumberOfDigits", function(){
    it("Should get the number of digits in the longest number in an array", function(){
      expect(getMaxNumberOfDigits([46235, 45, 77523, 34, 54, 222])).toBe(5);
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
      expect(radixSort([])).toEqual([]);
      expect(radixSort([1])).toEqual([1]);
    })
    it("should sort an array of random positive whole numbers correctly", function(){
      expect(radixSort([4, 6, 32, 14, 900, 4591, 32457, 50])).toEqual([4, 6, 14, 32, 50, 900, 4591, 32457]);
    })
    it("should sort an array of random negative whole numbers correctly", function(){
      expect(radixSort([-500, -5, -50, -5000, -50000])).toEqual([-50000, -5000, -500, -50, -5]);
    })
    it("should sort an array of mixed random positive and nugative numbers correctly", function(){
      expect(radixSort([-500, -865, -34, 45, 906, 50293, 78757, 0, 1, -2])).toEqual([-865, -500, -34, -2, 0, 1, 45, 906, 50293, 78757]);
    })
  })

  describe("SinglyLinkedList - Node.constructor", function(){
    let testNode = new Node(88);
    it("should create a node with the input value as the value property and a null next node", function(){
      expect(testNode.value).toBe(88);
      expect(testNode.next).toBe(null);
    })
  })

  describe("SinglyLinkedList - SinglyLinkedList.constructor", function(){
    let emptySinglyLinkedList = new SinglyLinkedList();
    it("should be able to create an linked list with no length, nodes, head, or tail initially", function(){
      expect(emptySinglyLinkedList.head).toBe(null);
      expect(emptySinglyLinkedList.length).toBe(0);
      expect(emptySinglyLinkedList.tail).toBe(null);
    })
  })

  describe("SinglyLinkedList - SinglyLinkedList.push", function(){
    it("should be able to create a new node on an empty instance with the head and tail assigned to that node", function(){
      let firstNode = new Node(104);
      let singleNodeLinkedList = new SinglyLinkedList();
      singleNodeLinkedList.push(firstNode);
      expect(singleNodeLinkedList.length).toBe(1);
      expect(singleNodeLinkedList.head.next).toBe(null);
      expect(singleNodeLinkedList.head).toEqual(firstNode);
      expect(singleNodeLinkedList.tail).toEqual(firstNode);
    })
    it("should be able to add a new node to a single-node linked list and move the tail to the newest mode accordingly", function(){
      let firstNode = new Node(187);
      let secondNode = new Node(313);
      let twoNodeLinkedList = new SinglyLinkedList();
      twoNodeLinkedList.push(firstNode);
      twoNodeLinkedList.push(secondNode);
      expect(twoNodeLinkedList.tail).toEqual(secondNode);
      expect(twoNodeLinkedList.head.next).toEqual(twoNodeLinkedList.tail);
    })
    it("should be able to keep track of the length of the linked list each time a node is added", function(){
      let firstNode = new Node(512);
      let secondNode = new Node(210);
      let twoNodeLinkedList = new SinglyLinkedList();
      twoNodeLinkedList.push(firstNode);
      twoNodeLinkedList.push(secondNode);
      expect(twoNodeLinkedList.length).toBe(2);
    })
    it("should throw an error if no input is passed in to the function", function(){
      let popTestLinkedList = new SinglyLinkedList();
      expect(() => popTestLinkedList.push()).toThrow("Please input a node to add to the singly linked list");
    })
  })

  describe("SinglyLinkedList - SinglyLinkedList.pop", function(){
    it("should be able to remove a node from the end of a singly linked list", function(){
      let firstNode = new Node(586);
      let secondNode = new Node(810);
      let thirdNode = new Node(313);
      let popTestLinkedList = new SinglyLinkedList();
      popTestLinkedList.push(firstNode);
      popTestLinkedList.push(secondNode);
      popTestLinkedList.push(thirdNode);
      popTestLinkedList.pop();
      expect(popTestLinkedList.tail).toEqual(secondNode);
    })
    it("should be able to keep track of the length of the linked list each time a node is removed", function(){
      let firstNode = new Node(586);
      let secondNode = new Node(810);
      let thirdNode = new Node(313);
      let popTestLinkedList = new SinglyLinkedList();
      popTestLinkedList.push(firstNode);
      popTestLinkedList.push(secondNode);
      popTestLinkedList.push(thirdNode);
      popTestLinkedList.pop();
      expect(popTestLinkedList.tail).toEqual(secondNode);
      expect(popTestLinkedList.length).toBe(2);
    })
    it("should be able to return the node popped from its most recent invocation", function(){
      let firstNode = new Node(586);
      let popTestLinkedList = new SinglyLinkedList();
      popTestLinkedList.push(firstNode);
      expect(popTestLinkedList.pop()).toEqual(firstNode);
    })
    it("should return null if pop is executed on a linked list with no nodes", function(){
      let popTestLinkedList = new SinglyLinkedList();
      expect(popTestLinkedList.pop()).toEqual(null);
    })
  })

  describe("SinglyLinkedList - SinglyLinkedList.shift", function(){
    let emptyShiftTestLinkedList = new SinglyLinkedList();
    it("should return null if there are no nodes in the linked list", function(){
      expect(emptyShiftTestLinkedList.shift()).toBe(null);
    })
    let firstNode = new Node(586);
    let secondNode = new Node(810);
    let thirdNode = new Node(248);
    let nonemptyShiftTestLinkedList = new SinglyLinkedList();
    nonemptyShiftTestLinkedList.push(firstNode);
    nonemptyShiftTestLinkedList.push(secondNode);
    nonemptyShiftTestLinkedList.push(thirdNode);
    nonemptyShiftTestLinkedList.shift();
    it("should move the head to the second node in the linked list", function(){
      expect(nonemptyShiftTestLinkedList.head).toEqual(secondNode);
    })
    it("should properly report the length of a linked list once it has been shifted", function(){
      expect(nonemptyShiftTestLinkedList.length).toEqual(2);
    })
    it("should return the popped node at completion of the function\'s execution", function(){
      expect(nonemptyShiftTestLinkedList.shift()).toEqual(secondNode);
    })
    it("should set the tail to be null if the length of the linked list is zero after a shift is complete", function(){
      let shiftTestLinkedList = new SinglyLinkedList();
      let firstNode = new Node(89);
      shiftTestLinkedList.push(firstNode);
      shiftTestLinkedList.shift();
      expect(shiftTestLinkedList.tail).toBe(null);
    })
  })
})