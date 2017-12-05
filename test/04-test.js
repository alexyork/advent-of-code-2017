import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { passphraseValidator, passphraseValidator2 } from '../src/04.js';

function counter(fn, passphrases) {
  return passphrases.filter(fn).length;
}

/*
--- Day 4: High-Entropy Passphrases ---

A new system policy has been put in place that requires all accounts to use a passphrase instead of simply a password. A passphrase consists of a series of words (lowercase letters) separated by spaces.

To ensure security, a valid passphrase must contain no duplicate words.

For example:

 * aa bb cc dd ee is valid.
 * aa bb cc dd aa is not valid - the word aa appears more than once.
 * aa bb cc dd aaa is valid - aa and aaa count as different words.

 The system's full passphrase list is available as your puzzle input. How many passphrases are valid?
*/

describe('AoC 04-01 - Passphrase validator', () => {

  it('should evaluate "aa bb cc dd ee" as valid', () => {
    const passphrase = 'aa bb cc dd ee';
    const result = passphraseValidator(passphrase);
    expect(result).to.be.true;
  });

  it('should evaluate "aa bb cc dd aa" as not valid', () => {
    const passphrase = 'aa bb cc dd aa';
    const result = passphraseValidator(passphrase);
    expect(result).to.be.false;
  });

  it('should evaluate "aa bb cc dd aaa" as valid', () => {
    const passphrase = 'aa bb cc dd aaa';
    const result = passphraseValidator(passphrase);
    expect(result).to.be.true;
  });

  it('should count valid phrases, when given my custom input', () => {
    const inputPath = path.resolve(__dirname, '04-test-input.txt');
    const fileContents = fs.readFileSync(inputPath, 'utf8');

    const passphrases = fileContents.split('\n');
    const result = counter(passphraseValidator, passphrases);
    console.log(`${result} of ${passphrases.length} were valid`);
    expect(result).to.equal(383);
  });

});

/*
--- Part Two ---

For added security, yet another system policy has been put in place. Now, a valid passphrase must contain no two words that are anagrams of each other - that is, a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

For example:

 * abcde fghij is a valid passphrase.
 * abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
 * a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
 * iiii oiii ooii oooi oooo is valid.
 * oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.

 Under this new system policy, how many passphrases are valid?
*/

describe('AoC 04-02 - Passphrase validator 2', () => {

  it('should validate all example passphrases correctly', () => {
    const exampleInputs = [
      { passphrase: 'abcde fghij', valid: true },
      { passphrase: 'abcde xyz ecdab', valid: false },
      { passphrase: 'a ab abc abd abf abj', valid: true },
      { passphrase: 'iiii oiii ooii oooi oooo', valid: true },
      { passphrase: 'oiii ioii iioi iiio', valid: false }
    ];

    exampleInputs.forEach(input => {
      const result = passphraseValidator2(input.passphrase);
      expect(result).to.equal(input.valid, input.passphrase);
    });
  });

  it('should count valid phrases, when given my custom input', () => {
    const inputPath = path.resolve(__dirname, '04-test-input.txt');
    const fileContents = fs.readFileSync(inputPath, 'utf8');

    const passphrases = fileContents.split('\n');
    const result = counter(passphraseValidator2, passphrases);
    console.log(`${result} of ${passphrases.length} were valid`);
    expect(result).to.equal(265);
  });

});