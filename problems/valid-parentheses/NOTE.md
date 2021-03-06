# 题目
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false

示例 5:
输入: "{[]}"
输出: true

# 原理
使用栈进行缓存和比较
本题未考虑括号的优先级，可以扩展为计算器题目

# 复杂度分析
时间O(N)：字符串线性遍历，快速退出情况下可以节约时间
空间O(N)：栈的空间最差情况和平均情况下是O(N)，最优是O(1)，具体也要看数据分布情况
