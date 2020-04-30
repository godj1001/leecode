/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.content = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(this.capacity == 0) return -1;
    for(let item of this.content){
        if(item.key === key){
            item.weight++;
            console.log(item.value)
            return item.value;
        }
    }
    console.log(-1);
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity == 0) return ;
    let a = null;
    for(let i =0;i<this.content.length;i++){
        if(this.content[i].key == key){
            a = this.content[i];
            this.content.splice(i,1);
            break;
        }
    }
    if(a){
        this.content.push({key:key,value:value,weight:a.weight});
    }else {
        if(this.content.length<this.capacity){
            this.content.push({key:key,value:value,weight:1});
            return ;
        }
        let min = this.content[0].weight;
        let index = 0;
        for(let i =0;i< this.content.length;i++){
            if(this.content[i].weight<min){
                index = i;
                min = this.content[i].weight;
            }
        }
        this.content.splice(index,1);
        this.content.push({key:key,value:value,weight:1});
        console.log(this.content)
    }

};

let cache = new LFUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回 1
cache.put(3, 3);    // 去除 key 2
cache.get(2);       // 返回 -1 (未找到key 2)
cache.get(3);       // 返回 3
cache.put(4, 4);    // 去除 key 1
cache.get(1);       // 返回 -1 (未找到 key 1)
cache.get(3);       // 返回 3
cache.get(4);       // 返回 4

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
