/**
 * Creator: zhangjun
 * Data: 2020/3/16
 * DESC:
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    arr = [];
    function deep(root) {
        if (!root){
            return ;
        }
        if (root.left) deep(root.left);
        if (root) arr.push(root.val);
        if (root.right) deep(root.right);
    }
    deep(root);
    for (let i = 0;i< arr.length -1; i++) {
        if (arr[i] >= arr[i+1]) return false
    }
    return true;
};
