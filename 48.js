/**
 * Creator: zhangjun
 * Data: 2020/4/4
 * DESC:
 */
var tarp = function (height) {
    if (height.length<3){
        return 0
    }
    total = 0;
    for(let i =0;i<height.length;i++){
        if(i== 0||i == height.length -1){
            continue;
        }
        let right =Math.max.apply(null,height.slice(i+1,height.length ))
        let left = Math.max.apply(null,height.slice(0,i))
        left = left == '-Infinity'?0:left;
        let a =Math.min(left,right);
        if (a>height[i]){
            total+=a-height[i];
        }
        // console.log(left)
        // console.log("i:"+i);
        // console.log(height.slice(i+1,height.length));
        // console.log(height.slice(0,i));
        // console.log('left:'+Math.max.apply(null,height.slice(0,i-1)));
        // console.log('right:'+Math.max.apply(null,height.slice(i+1,height.length)));
        // if (add > height[i]){
        //     total+=add-height;
        // }
    }
    return total;
}
console.log(tarp([0,1,0,2,1,0,1,3,2,1,2,1]));
