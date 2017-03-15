'use strict';

function aggregate(array) {
    const aggregated = {};

    let len = array.length;

    while (len--) {
        const entry = array[len];

        if (!(entry in aggregated)) {
            aggregated[entry] = 1;

            continue;
        }

        aggregated[entry] = ++aggregated[entry];
    }

    return aggregated;
}

function sortByMostCommon(aggregated) {
    const sorted = [];

    for (entry in aggregated) {
        sorted.push({
            entry: entry,
            size: aggregated[entry],
        });
    }

    sorted.sort((a, b) => a.size - b.size);

    return sorted.reverse();
}

module.exports = function mostCommon(input, size) {
    const array = typeof input === 'string' ? input.split('') : input;

    if (!Array.isArray(array)) {
        throw new TypeError('Your input must me a string or an array');
    }

    const aggregated = aggregate(array);

    const common = sortByMostCommon(aggregated);

    if (size) {
        return common.slice(0, size);
    }

    return common;
};
