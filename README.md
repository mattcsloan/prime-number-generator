# prime-number-generator
Back-end coding challenge

## Instructions

### Build

Compile Typescript files to js and build application.

```
  npm run build
```

### Get Prime Numbers in Specified Range

After compiling with `tsc`, get list of prime numbers in any given range by using the script below in your command line.

```
  npm run range -- -s [startingNumber] -e [endingNumber]
```

#### Example:
```
  npm run range -- -s 7900 -e 7920
```

### Get Help/See Options

If you're having trouble passing parameters in and getting an array of prime numbers returned, take a look at the options using:

```
  npm run help
```

### Testing

Testing has been added using Mocha, Chai, and Istanbul. To run tests and view code coverage reports, run:

```
  npm test
```

## Credits

Not having experience creating a back-end application that is run via command line (other than curling API routes), I did some researching to find a solution for this. I came across `commander` which was used in [another node-based prime number generator repo](https://github.com/Cinderella-Man/nodejs-primes-generator) that I found.
