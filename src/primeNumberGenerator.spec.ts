import 'mocha';
import { expect } from 'chai';

import primeRange, { isPrime } from './primeNumberGenerator';

describe('Prime Number Generator', () => {
  it('determines if a number is prime', () => {
    expect(isPrime(0)).to.equal(false);
    expect(isPrime(1)).to.equal(false);
    expect(isPrime(2)).to.equal(true);
    expect(isPrime(3)).to.equal(true);
    expect(isPrime(4)).to.equal(false);
    expect(isPrime(9)).to.equal(false);
  });

  it('creates the proper range of primes based on input', () => {
    const expectedOutput = [7901, 7907, 7919];
    expect(primeRange(7900,7920)).to.eql(expectedOutput);
  });
});