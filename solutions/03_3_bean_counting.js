const countBs = string => {
  let match = 0;
  for (let letter of string) {
    if (letter === "B") {
      match++;
    }
  }

  return match;
};

console.log(countBs("BBC"));

const countChar = (string, character) => {
  let match = 0;
  for (let letter of string) {
    if (letter === character) {
      match++;
    }
  }

  return match;
};

console.log(countChar("kakkerlak", "k"));

// original solutions
/*
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
  */
