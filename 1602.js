/**
 * Creator: zhangjun
 * Data: 2020/4/11
 * DESC:
 */

var WordsFrequency = function (book) {
    this.list = new Map();
    for (let item of Object.keys(book)) {
        if (this.list[book[item]]) {
            this.list[book[item]]++;
        } else {
            this.list[book[item]] = 1;
        }
    }
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
    console.log(this.list);
    return this.list[word] ? this.list[word] : 0;
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */

