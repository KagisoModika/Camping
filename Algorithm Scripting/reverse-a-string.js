function reverseString(str) {
  let letters = str.split("");
  let tempStr = "";
  for (let i = letters.length - 1; i >= 0 ; i--) {
    tempStr += letters[i];
  }
  str = tempStr.toString();
  return str;
}

reverseString("hello");