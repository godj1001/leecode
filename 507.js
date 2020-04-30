/**
 * Creator: zhangjun
 * Data: 2020/4/14
 * DESC:
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let total = 1;
    if (num>5){
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num%i === 0){
                total+=i+num/i;
                console.log(total)
            }
        }
        return num === total;
    }else {
        return false
    }
};

console.log(checkPerfectNumber(28))
