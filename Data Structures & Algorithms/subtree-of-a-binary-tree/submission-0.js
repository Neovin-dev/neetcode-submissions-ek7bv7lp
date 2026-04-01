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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false;

        return this.compareTree(root, subRoot) ||
        this.isSubtree(root.left, subRoot) ||
        this.isSubtree(root.right, subRoot);
    }

    compareTree(node, subRoot){
        
        if(!node && !subRoot) return true;
        if(!node || !subRoot) return false;

        if(node.val !== subRoot.val) return false;
        return this.compareTree(node.left, subRoot.left) &&
        this.compareTree(node.right, subRoot.right);
    }
}
