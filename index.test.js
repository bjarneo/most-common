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
                count: 3,
            },
            {
                entry: 'node',
                count: 2,
            },
            {
                entry: 'javascript',
                count: 1,
            },
        ]);
    });

    it('should get the top 3 common characters from a string', () => {
        assert.deepEqual(mostCommon(pangram, 3), [
            {
                entry: ' ',
                count: 8,
            },
            {
                entry: 'o',
                count: 4,
            },
            {
                entry: 'e',
                count: 3,
            },
        ]);
    });
});
