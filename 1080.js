/**
 * Creator: zhangjun
 * Data: 2020/4/11
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
 * @param {number} limit
 * @return {TreeNode}
 */

var sufficientSubset = function (root, limit) {
    function add(total, tree) {
        total += tree.val;
        if (tree.left) {
            add(total, tree.left);
        } else {
            if (total < limit) {
                tree = null;
                return;
            } else {
                return;
            }
        }
        if (tree.right) {
            add(total, tree.right);
        } else {
            if (total < limit) {
                tree = null;
                return;
            } else {
                return;
            }
        }
    }

    add(0, root)
    return root;
};
