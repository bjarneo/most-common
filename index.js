function aggregate(array, options) {
    let i = -1;

    const aggregated = {};

    const len = array.length;

    while (i++ < len) {
        const token = array[i];

        if (options.excludeWhitespace && token === ' ') {
            continue;
        }

        if (!token) {
            continue;
        }

        if (!(token in aggregated)) {
            aggregated[token] = 1;

            continue;
        }

        aggregated[token] = ++aggregated[token];
    }

    return aggregated;
}

function sortByMostCommon(aggregated) {
    const sorted = [];

    for (token in aggregated) {
        sorted.push({
            token: token,
            count: aggregated[token],
        });
    }

    sorted.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        } else if (a.count < b.count) {
            return 1;
        } else {
            return 0;
        }
    });

    return sorted;
}

module.exports = function mostCommon(input, count, options = {}) {
    const array = typeof input === 'string' ? input.split('') : input;

    if (!Array.isArray(array)) {
        throw new TypeError('Your input must be a string or an array');
    }

    const common = sortByMostCommon(aggregate(array, options));

    if (count) {
        return common.slice(0, count);
    }

    return common;
};
