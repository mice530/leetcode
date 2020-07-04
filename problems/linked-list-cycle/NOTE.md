# 题目
给定一个链表，判断链表中是否有环。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

# 原理
## 快慢指针
一快一慢两个指针，速度差为1，若为环形链则一定会有相等的情况

## 标记法
遍历并标记已遍历元素，若发现next为已标记元素则为环。标记方法可以是原有节点上进行数值标记（破坏原值）或是利用哈希表（额外空间）

# 复杂度分析
## 快慢指针
时间O(N)：2个指针分别遍历，线性复杂度
空间O(1)：只需要2个指针

## 标记法
时间O(N)：遍历一遍即可
空间O(N)：哈希表需要额外的存储空间
空间O(1)：原位标记不需要额外空间