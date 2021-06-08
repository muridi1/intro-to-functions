// function:
// =========
// name: isEqual
// parameter a: number
// parameter b: number
// return: boolean

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

// test cases:
// ===========
console.log(isEqual(4, 4), "should be True");
console.log(isEqual(0, 0), "should be True");
console.log(isEqual(-4, -4), "should be True");
console.log(isEqual(4, -4), "should be False");
console.log(isEqual(0, 1), "should be False");
