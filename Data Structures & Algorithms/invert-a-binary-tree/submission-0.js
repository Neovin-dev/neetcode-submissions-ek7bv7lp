/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        function reverse(node){
            if(!node) return;
            let temp = node.right;
            node.right = node.left;
            node.left = temp;
            reverse(node.left);
            reverse(node.right);
        }
        reverse(root);
        return root;
    }
}
