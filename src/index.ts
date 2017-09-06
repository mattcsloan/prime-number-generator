import * as program from 'commander';
import primeRange from './primeNumberGenerator';

const examineNum = num => {
  const number = parseInt(num);
  if (number < 0) {
    throw new Error('Prime numbers should be positive.');
  }
  return number;
}

program
  .version('0.0.1')
  .option(
    '-s, --startingPoint [quantity]',
    'Choose starting point of range to generate numbers from',
    examineNum
  )
  .option(
    '-e, --endPoint [quantity]',
    'Choose endpoint of range to generate numbers from',
    examineNum
  )
  .parse(process.argv);

console.log(
  primeRange(
    program.startingPoint,
    program.endPoint
  )
);