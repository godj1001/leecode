/**
 * Creator: zhangjun
 * Data: 2020/4/3
 * DESC:
 */

var myAtoi = function (str) {
    let p = /\d+/;
    let reg = /([1-9][0-9]*)/;
    str = str.replace(/\s+/g, '');
    if (str.startsWith('-')||str.startsWith('+')) {
        str = str.split('');
        let a = str.splice(0, 1);
        if (!str[0] || Number.isNaN(Number(str[0]))) {
            return 0
        } else {
            str = str.join('');
            str = str.match(reg);
            if (!str){
                return 0;
            }
            console.log(str);
            str = a + str[0];
            let number = Number(str);
            if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
                return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
            }
            return number;
        }

    } else {
        str = str.split('');

        if (Number.isNaN(Number(str[0]))) {
            return 0
        }
        console.log(str);
        str = str.join('');
        str = str.match(reg);
        console.log(str);
        if (!str){
            return 0;
        }
        let number = Number(str[0]);
        if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
            return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
        }
        return number;

    }

};

console.log(myAtoi("    0000000000000   "));
