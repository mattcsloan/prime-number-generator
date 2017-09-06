export interface PrimeNumberGenerator {  
  primeList: number[];
  isPrime: boolean;
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