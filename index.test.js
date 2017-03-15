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
                entry: 'nlp',
                size: 3,
            },
            {
                entry: 'node',
                size: 2,
            },
            {
                entry: 'javascript',
                size: 1,
            },
        ]);
    });

    it('should get the top 3 common characters from a string', () => {
        assert.deepEqual(mostCommon(pangram, 3), [
            {
                entry: ' ',
                size: 8,
            },
            {
                entry: 'o',
                size: 4,
            },
            {
                entry: 'e',
                size: 3,
            },
        ]);
    });
});
