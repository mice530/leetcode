# 题目
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 

示例:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 

提示：
pop、top 和 getMin 操作总是在 非空栈 上调用。

# 原理
## 排序法
在栈的基础上，额外维护一个排序好的数组，排序的算法采用插入排序，可以用二分查找插入加速

## 最小值辅助栈
在栈的基础上，额外维护一个最小值的辅助栈，记录每一位原数据推入时，栈的最小值状态，由于栈是先进后出，因此状态是可以叠加计算和保持的，f(n) = min(f(n-1), x)。另外，因为pop/getMin/top都保证只在非空情况下调用，因此可以用Infinity作为辅助栈哨兵，方便边界情况处理。

# 复杂度分析
## 排序法
时间O(log N)：插入排序的复杂度是O(N)，使用二分查找优化后为logN
空间O(N)：栈和排序数组，线性空间消耗

## 最小值辅助栈
时间O(1)：栈的操作都是常量级别操作
空间O(N)：栈和辅助栈，线性空间消耗
