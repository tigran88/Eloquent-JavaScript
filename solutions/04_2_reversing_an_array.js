const reverseArray = array => {
  const newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
};

const reverseArrayInPlace = array => {
  const tempArray = [...array];

  let key = 0;
  for (let i = tempArray.length - 1; 0 <= i; i--) {
    array[key] = tempArray[i];
    key++;
  }
};

console.log(reverseArray(["A", "B", "C"]));

const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// original solutions
/*
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
*/
