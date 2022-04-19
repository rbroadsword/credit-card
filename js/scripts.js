function creditCard(number) {
  let userInput = number.split("");  
  const toNumbers = userInput.map(function(number){ //change userInput to array of #
    return parseInt(number);
  });
  const doubleArray = [] //everyother # from right to left
  console.log(toNumbers);
  for (let i = toNumbers.length - 1; i >= 0; i-=2) { //getting everyother number r to L
    doubleArray.push(toNumbers[i]*2);
    console.log(toNumbers[i]);
  } 
  console.log(doubleArray);
  let transformed = toNumbers.map(function(number) {
    if(toNumbers.indexOf(number) === number % 2 == 0) {
      return number * 2; 
    }
  })
  console.log(transformed);
}

