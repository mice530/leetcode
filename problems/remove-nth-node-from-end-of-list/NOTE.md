# 题目
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.

说明：
给定的 n 保证是有效的。

进阶：
你能尝试使用一趟扫描实现吗？

# 原理
遍历一次实现，第一反应是递归实现，但是递归实际还是需要额外的O(N)计算和空间复杂度
空间优化：删除第n位，实际只需要记录n+1位即可（prevNode.next = nextNode），因此用n+1位数组即可存储所需节点
时间优化：递归的回溯不可中止，因此考虑直接用循环遍历，并结合n+1位数组进行计算即可
注意：此题边界情况比较多，因为链表的prev和next计算，需要重点考虑链表为空、删除后为空、删除后仅剩一位、删除最后一位的情况，考虑使用用哨兵节点和尾部判断解决边界问题

# 复杂度分析
时间O(N)：链表线性遍历
空间O(N)：k+1位数组，复杂度级别没有下降，但系数和最优情况下还是高效很多