/**
 * Creator: zhangjun
 * Data: 2020/4/14
 * DESC:
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    let l1Stack = [];
    let l2Stack = [];
    while (l1) {
        l1Stack.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        l2Stack.push(l2.val);
        l2 = l2.next;
    }
    let long = l1Stack.length > l2Stack.length ? l1Stack : l2Stack;
    let short = l1Stack.length <= l2Stack.length ? l1Stack : l2Stack;
    long.reverse();
    short.reverse();
    for (let i = short.length -1; i <long.length-1 ; i++) {
        short.push(0);
    }
    console.log(long, short);

    let yushu = 0;
    for (let i = 0; i < long.length; i++) {
        let sum = long[i] + short[i] + yushu;
        long[i] = sum >= 10 ? sum - 10 : sum;
        yushu = sum >= 10 ? 1 : 0;
        console.log(sum);
        console.log(long[i]);
        if (i === long.length - 1 && yushu === 1) {

            long.push(1);
            break;
        }
    }
    console.log(long, short);

    long.reverse();
    let res = new ListNode();
    let head = res;
    for (let item of long) {
        let node = new ListNode(item);
        head.next = node;
        head = head.next;
    }
    return res.next;

};
console.log(addTwoNumbers({val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: {val: 9, next: null}}}}}, {
    val: 1,
    next: null
}));
