function aggregate(array) {
    const aggregated = {};

    let len = array.length;

    while (len--) {
        const token = array[len];

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

    sorted.sort((a, b) => a.count - b.count);

    return sorted.reverse();
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
