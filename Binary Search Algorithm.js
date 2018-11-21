// How to Implement BSA
// 1. Store the midpoint of the array
// 2. Compare the midpoint to the target value
//    a. return the item
// 3. If the midpoint is less than the target value then search continues in the upper half of the array.
// 4. If the point is grater than the target value then the search continues in the lower half of the array.

function binarySearch(array, target) {

  let midpoint = Math.floor(array.length /2);

  if (array[midpoint] === target) {

    return array[midpoint];
  }else if(array[midpoint] < target && array.length > 1) { // The array.length here and below
                                                            //has been used in order to avoid the call stack size error
    return binarySearch(array.slice(midpoint), target);
  }else if(array[midpoint] > target && array.length > 1) {

    return binarySearch(array.slice(0, midpoint), target);
  }else {
    return "not found";
  }
};

console.log(binarySearch([10, 20, 31, 35, 40, 50, 51, 52], 60));
