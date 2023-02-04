function findLongestWordLength(str) {
  let words = str.split(" ");
  let word = "";

  for (let i = 0; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }

  return word.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");