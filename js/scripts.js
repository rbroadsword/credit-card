function creditCard(number) {
  let result = 0;
  let userInput = number.split("");  
  const toNumbers = userInput.map(function(number){ //change userInput to array of #
    return parseInt(number);
  });

  const doubleArray = [] //everyother # from right to left
  for (let i = toNumbers.length - 1; i >= 0; i-=1) { //getting everyother number r to L
    if(toNumbers[i] % 2 === 0) {
          doubledNumber = toNumbers[i]*2;
    }else if(doubledNumber > 9){
            doubledNumber = doubledNumber.toString().split("");
            doubledNumber = doubledNumber.map(Number);
            sumOfTwo = doubledNumber[0] + doubledNumber[1];
            doubleArray.push(sumOfTwo);
    } else{
      doubleArray.push(toNumbers.at(i));
    }
  }
  result = doubleArray.reduce(function summarize(sum, number, index) {
      return sum + number; 
    });
  if(result.length -1 === 0) {
    console.log("valid");
  } else {
    console.log("not valid");
  }
}

function double(number) {
  let testInput = number.split(""); 
  const toNumbers = testInput.map(function(number){ //change userInput to array of #
    return parseInt(number);
  });
  for (let i = toNumbers.length - 1; i >= 0; i-=1) { //getting everyother number r to L
    if(toNumbers[i] % 2 === 0) {
      doubledNumber = toNumbers[i]*2;
      if(doubledNumber > 9){
        doubledNumber = doubledNumber.toString().split("");
        console.log(doubledNumber);
        doubledNumber = doubledNumber.map(Number);
        console.log(doubledNumber);
        sumOfTwo = doubledNumber[0] + doubledNumber[1];
        console.log(sumOfTwo); 
        doubleArray.push(sumOfTwo);
      } else {
        console.log("nope"); 
      }
    }
  }
}


//if we ask for an index that doesn't exist in an array, the return will be undefined.




//youtube example before he refactored
function validate(n) {
  let digits = n.toString().split(" ").map(Number); 

  //if it's an even number
  if(digits.length % 2 === 0){
    digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 2 : digit); 
  } else {
    digits = digits.map((digit, idx) => idx % 2 === 0 ? digit * 1 : digit);
  }

  //fix the double digits
  digits = digits.map(digit => digit > 9 ? digit - 9 : digit)

  //sum the digits
  const sum = digits.reduce((acc, digit) => acc += digit, 0);

  return sum % 10 === 0; 
}

//Example Two
function validate(n) {
  n = n.toString().split(" ").map (Number).reverse(); 
  return n.reduce(function (sum, digit, index) {
    if (index & 1) digit <<= 1; 
    if (digit > 9) digit -= 9; 
    return sum + digit; 
  }, 0) % 10 == 0; 
}

//Example Three 

function validate(n){
  let sum = 0;

  while (n > 0) {
    let a = n % 10;
    n = Math.floor(n / 10);

    let b = (n % 10) * 2;
    n = Math.floor(n / 10);

    if (b > 9) {
      b -= 9;
    }
    sum += a + b;
  }
  return sum % 10 == 0;
}