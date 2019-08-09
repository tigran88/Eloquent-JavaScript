const range = (start, end, step = start < end ? 1 : -1) => {
  const array = [];

  for (
    let i = start;
    start < end ? i <= end : i >= end;
    start > end ? (i += step) : (i += step)
  ) {
    array.push(i);
  }

  return array;
};

const sum = array => {
  let result = 0;

  for (let item of array) {
    result += item;
  }

  return result;
};

console.log(sum(range(1, 10)));

// original solutions
/*
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
*/
