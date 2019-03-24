most-common
--
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JDQMB6MRJXQE&source=url)
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
    token: 'nlp',
    count: 3
}, {
    token: 'node',
    count: 2
}, {
    token: 'javascript',
    count: 1
}]
*/

const pangram = 'The quick brown fox jumps over the lazy dog';

console.log(mostCommon(pangram, 3));
/*
[{
    token: ' ',
    count: 8
}, {
    token: 'o',
    count: 4
}, {
    token: 'e',
    count: 3
}]
*/


// Exclude whitespace
console.log(mostCommon(pangram, 3, { excludeWhitespace: true }));
/*
[{
    token: 'o',
    count: 4
}, {
    token: 'e',
    count: 3
}, {
    token: 'u',
    count: 2
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

Donation
--
If this project has been helpful in any way, and you want to treat me a cup of coffee, please donate :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4JDQMB6MRJXQE&source=url)
