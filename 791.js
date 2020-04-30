/**
 * Creator: zhangjun
 * Data: 2020/3/18
 * DESC:
 */
// var customSortString = function(S, T) {
//     if (S === '') return T;
//     let Sarr = S.split('');
//     let Tarr = T.split('');
//     let res = [];
//     for(let i = 0 ; i < Sarr.length ;) {
//         let a =  Tarr.indexOf(Sarr[i]);
//         if(a == -1){
//             i++;
//         }else {
//             res.push(Tarr[a]);
//             Tarr.splice(a,1);
//         }
//     }
//     return res.concat(Tarr).join();
// };
var customSortString = function(S, T) {
    let a = {};
    let Sarr = S.split('');
    let Tarr = T.split('');
    for (let i =0;i<Tarr.length;i++) {
       if (a[Tarr[i]]){

       }
    }
}
console.log(customSortString('cba','abcd'));
