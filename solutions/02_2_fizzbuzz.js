const fizzBuzz = (size = 100, option = {first: 'Fizz', second: 'Buzz'}) => {

    let result = '';

    for (let i = 1; size >= i; i++) {

        let output = i;

        if (i % 3 === 0 && i % 5 === 0) {
            output = option.first + option.second;
        } else if (i % 3 === 0) {
            output = option.first;
        } else if (i % 5 === 0) {
            output = option.second;
        }

        result += `${output} \n`;

    }

    return result;

};

console.log(fizzBuzz(15, {first: 'FIZZ', second: 'BUZZ'}));

// original solutions
/*
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
*/