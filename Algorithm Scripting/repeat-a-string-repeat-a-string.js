function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  //console.log(newStr)

  if (num <= 0) {
    return "";
  } else {
    return newStr;
  }
}

repeatStringNumTimes("abc", 3);