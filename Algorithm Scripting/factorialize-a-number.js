function factorialize(num) {
  let factor = 1;

  for (let i = num; i > 0; i--) {
    factor *= i;
  }
  
  return factor;
}

factorialize(5);