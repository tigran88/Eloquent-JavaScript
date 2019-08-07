const min = (number1, number2) => {
  return number1 > number2 ? number2 : number1;
};

console.log(min(13, 8));

// original solutions
/*
function min(a, b) {
    if (a < b) return a;
    else return b;
}
*/
