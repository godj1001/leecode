/**
 * Creator: zhangjun
 * Data: 2020/4/14
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var addOneRow = function (root, v, d) {
    function setValue(tree, v, deep) {
        if (deep === d) {
            let left = new TreeNode(v);
            let right = new TreeNode(v);
            left.left = tree.left;
            right.right = tree.right;
            tree.left = left;
            tree.right = right;
            return ;
        }
        deep++;

        if (tree.left) setValue(tree.left,v,deep);
        if (tree.right) setValue(tree.right,v,deep);
    }
    setValue(root,v,1);
    return root;
};
