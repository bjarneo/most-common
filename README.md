most-common
--
![Travis](https://travis-ci.org/bjarneo/most-common.svg?branch=master)

Get the _n_ most common elements and their counts from the most common to the least.

Usage
--

```bash
$ npm i --save most-common
```

```js
const mostCommon = require('most-common');

const words = [
    'javascript',
    'php',
    'node',
    'python',
    'node',
    'mocha',
    'nlp',
    'chai',
    'nlp',
    'most-common',
    'array',
    'string',
    'nlp'
];

console.log(mostCommon(words, 3));
/*
[{
    entry: 'nlp',
    count: 3
}, {
    entry: 'node',
    count: 2
}, {
    entry: 'javascript',
    count: 1
}]
*/

const pangram = 'The quick brown fox jumps over the lazy dog';

console.log(mostCommon(pangram, 3));
/*
[{
    entry: ' ',
    count: 8
}, {
    entry: 'o',
    count: 4
}, {
    entry: 'e',
    count: 3
}]
*/
```

Tests
--
```bash
$ npm test
```

Contribution
--
Contributions are appreciated.

License
--
MIT-licensed. See LICENSE.
