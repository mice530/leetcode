# 题目
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

# 原理
顺序遍历比较，产生新链表
优化点是其中一个链表结束后，另一个的尾部可以直接接入合并链表尾部

# 复杂度分析
时间O(N)：链表线性遍历
空间O(N)：拷贝链表
