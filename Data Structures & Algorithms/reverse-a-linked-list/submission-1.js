class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let curr = head;
        // console.log('head', head)
        let prev = null;
        let i = 0;
        while(curr){
            
            let temp = curr.next;
            // console.log('temp', temp)
            // console.log(temp.next, temp.data)
            // console.log('curr', curr)
            curr.next = prev;
            prev = curr;
            curr = temp;
            i++;
        }
        return prev;
    }
}

// class ListNode {
//     constructor(val = 0, next = null){
//         this.val = val;
//         this.next = next;
//     }
// }
// let head = new ListNode(0);
// head.next = new ListNode(1);
// head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(3);

// let sol = new Solution();
// let reversed = sol.reverseList(head);

// // Print result
// let curr = reversed;
// while (curr) {
//     console.log(curr.val);
//     curr = curr.next;
// }