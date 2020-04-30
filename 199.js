/**
 * Creator: zhangjun
 * Data: 2020/4/22
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [];
    if (root === null) {
        return [];
    }

    function get(root, deep) {
        if (deep <= res.length) {
            res[deep - 1] = root.val;
        } else {
            res.push(root.val);
        }
        if (root.left) {
            get(root.left, deep + 1);
        }
        if (root.right) {
            get(root.right, deep + 1);
        }
    }

    get(root, 1);
    return res;
};
