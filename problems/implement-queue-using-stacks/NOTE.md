# 题目
使用栈实现队列的下列操作：

push(x) -- 将一个元素放入队列的尾部。
pop() -- 从队列首部移除元素。
peek() -- 返回队列首部的元素。
empty() -- 返回队列是否为空。
 

示例:
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
 

说明:
你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

# 原理
利用双栈实现，一个栈负责压入，一个栈负责推出，压入栈可以不断压入，推出时若推出栈为空，则从压入栈倒过来

# 复杂度分析
时间O(1)：压入栈O(1)，推出栈最差时单次为O(N)，但均摊为O(1)
空间O(N)：两栈相加最多为N
