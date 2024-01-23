const isPalindrome = (s) => {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const palindromePairs = (words) => {
  const palindromePairList = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && isPalindrome(words[i] + words[j])) {
        palindromePairList.push([
          words.indexOf(words[i]),
          words.indexOf(words[j]),
        ]);
      }
    }
  }

  return palindromePairList;
};

console.log(palindromePairs(["bat", "tab", "cat"]));
