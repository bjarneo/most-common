function aggregate(array) {
    let i = -1;

    const aggregated = {};

    const len = array.length;

    while (i++ < len) {
        const token = array[i];

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

    sorted.sort((a, b) => b.count - a.count);

    return sorted;
}

module.exports = function mostCommon(input, count) {
    const array = typeof input === 'string' ? input.split('') : input;

    if (!Array.isArray(array)) {
        throw new TypeError('Your input must be a string or an array');
    }

    const aggregated = aggregate(array);

    const common = sortByMostCommon(aggregated);

    if (count) {
        return common.slice(0, count);
    }

    return common;
};
