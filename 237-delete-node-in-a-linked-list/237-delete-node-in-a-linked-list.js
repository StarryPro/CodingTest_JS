/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 현재 노드(5)의 값이 현재 노드의 next 값(1)으로 변경한다. 
    // 현재 노드(5)의 next 값(1)은 현재 노드의 next값의 next값(9)으로 변경한다.
    
    node.val = node.next.val
    node.next = node.next.next
        
};