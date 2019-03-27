const drawTriangle = (size, symbol = '#') => {

    let content = '';
    let result = '';

    for (let i = 0; i < size; i++) {
        content += symbol;
        result += `${content} \n`;
    }

    return result;

};

const triangle = drawTriangle(8, '*');

console.log(triangle);

// original solutions
/*
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
*/