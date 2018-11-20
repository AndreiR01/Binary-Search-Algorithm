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
  }else if(array[midpoint] < target) {
    return binarySearch(array.slice(midpoint), target);
  }else if(array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  }else {
    return "not found";
  }
};

console.log(binarySearch([1, 2, 3, 4, 5,
                            6, 7, 8, 9, 10, 11], 10));
