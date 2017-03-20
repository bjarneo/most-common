'use strict';

const assert = require('assert');

const mostCommon = require('./');

const pangram = 'The quick brown fox jumps over the lazy dog';

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
    'nlp',
];

describe('#mostCommon', () => {
    it('should get the top 3 common words from an array', () => {
        assert.deepEqual(mostCommon(words, 3), [
            {
                token: 'nlp',
                count: 3,
            },
            {
                token: 'node',
                count: 2,
            },
            {
                token: 'javascript',
                count: 1,
            },
        ]);
    });

    it('should get the top 3 common characters from a string', () => {
        assert.deepEqual(mostCommon(pangram, 3), [
            {
                token: ' ',
                count: 8,
            },
            {
                token: 'o',
                count: 4,
            },
            {
                token: 'e',
                count: 3,
            },
        ]);
    });
});
