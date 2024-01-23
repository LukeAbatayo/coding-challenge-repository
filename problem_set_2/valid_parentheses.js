const isValid = (s) => {
  const sequence = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (
      currentBracket === "(" ||
      currentBracket === "{" ||
      currentBracket === "["
    ) {
      sequence.push(currentBracket);
    } else {
      if (sequence.length === 0) {
        return false;
      }

      const lastOpenBracket = sequence.pop();

      if (
        (currentBracket === ")" && lastOpenBracket !== "(") ||
        (currentBracket === "}" && lastOpenBracket !== "{") ||
        (currentBracket === "]" && lastOpenBracket !== "[")
      ) {
        return false;
      }
    }
  }

  return sequence.length === 0;
};

const inputString = "()[]{}";
console.log(isValid(inputString));
