function creditCard(number) {
  let userInput = number.split("");  
  const toNumbers = userInput.map(function(number){ //change userInput to array of #
    return parseInt(number);
  });

  const doubleArray = [] //everyother # from right to left
  console.log(toNumbers);
  for (let i = toNumbers.length - 1; i >= 0; i-=1) { //getting everyother number r to L
    if(toNumbers[i] % 2 === 0) {
          doubleArray.push(toNumbers[i]*2);
    } else{
      doubleArray.push(toNumbers.at(i));
    }
    console.log(doubleArray);
    console.log(toNumbers); 
  }
}


for (let i = toNumbers.length - 1; i >= 0; i-=1) { //getting everyother number r to L
  if(toNumbers[i] % 2 === 0) {
    doubledNumber = toNumbers[i]*2;
    console.log(doubledNumber);
    if(doubledNumber > 9){
      doubledNumber = doubledNumber.split(""); 
      sumOfTwo = doubledNumber.reduce(doubledNumber);
      console.log(sumOfTwo); 
      doubleArray.push(sumOfTwo);
    }
    
  } else{
    doubleArray.push(toNumbers.at(i));
  }
  console.log(doubleArray);
  console.log(toNumbers); 
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

const doubleArray = [] //everyother # from right to left
console.log(toNumbers);
for (let i = toNumbers.length - 1; i >= 0; i-=1) { //getting everyother number r to L
  if(toNumbers[i] % 2 === 0) {
    doubleArray.push(toNumbers[i]*2);
  } else{
    doubleArray.push(toNumbers.at(i));
}