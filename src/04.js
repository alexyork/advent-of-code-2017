import _ from 'lodash';

export function passphraseValidator(passphrase) {
  const passphraseWords = passphrase.split(' ');
  const uniqueWords = _.uniq(passphraseWords);
  return (uniqueWords.length === passphraseWords.length);
}

export function passphraseValidator2(passphrase) {
  const passphraseWords = passphrase.split(' ');
  const uniqueWords = _.chain(passphraseWords)
    .map(word => _.sortBy( word.split('') ).join('')).uniq().value();
  return (uniqueWords.length === passphraseWords.length);
}