export interface PrimeNumberGenerator {  
  primeList: number[];
  isPrime: boolean;
}

const primeRange = (startingValue: number, endingValue: number) => {
  var primeList = [];

  // starting value should be less than ending value
  if(startingValue > endingValue) {
    const newEnd = startingValue;
    startingValue = endingValue;
    endingValue = newEnd;
  }

  for (var i = startingValue; i != endingValue; ++i) {
    isPrime(i) && primeList.push(i);
  }
  return primeList;
}

export const isPrime = (currentNumber: number) => {
  if(currentNumber === 2) {
    return true;
  } else if(currentNumber % 2 === 0 || currentNumber < 2) {
    return false;
  } else {
    for (var n = 2; n <= Math.sqrt(currentNumber); n++) {
      if (currentNumber % n === 0) return false;
    }
  }
  return true;
};

export default primeRange;
