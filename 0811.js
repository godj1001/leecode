/**
 * Creator: zhangjun
 * Data: 2020/4/23
 * DESC:
 */
/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    const coins = [25, 10, 5, 1];
    const mod = 1000000007;
    let arr = new Array(n+1).fill(0, 0, n + 1);
    arr[0] = 1;
    console.log(arr);

    for (let i = 0; i < 4; i++) {
        const coin = coins[i];
        for (let j = coin; j <= n; j++) {
            arr[j] = (arr[j] + arr[j - coin]) % mod;
        }
    }
    console.log(arr);
    return arr[n]
};
console.log(waysToChange(25));
console.log(waysToChange(5));
console.log(waysToChange(10));
