function minFilter(num, minimum) {
    if (num < minimum) {
        return num;
    } else {
        return minimum;
    }
}

module.exports = minFilter