# DP解法
## 原理
强行用DP来写，f(i)表示以i位为终点的最长回文，g(j, i)表示以j为起点开始搜索i为终点的最长回文
f(i) = s[i - f(i-1).length -1] === s[i] ? f(i-1) + 2 : g(i - f(i-1).length -1, i)

## 复杂度分析
时间O(N3)：f(i)遍历O(N)，g(j, i)使用了indexOf，在循环内又用了split、reverse、join，因此O(N3)。P.S.需要改进。。。
空间O(N)：原始字符串O(N)，其余都是临时变量，因此为O(N)

# 中心扩散法
## 原理
利用回文特点，遍历时以当前位置为中心向左右两边搜索，然后确认出当前位置的最大回文长度。
需要拆分为奇数和偶数两种情况：f(i) = max(feven(i), fodd(i))

## 复杂度分析
时间O(N2)：f(i)遍历O(N)，feven/fodd遍历为O(N)，因此O(N2)
空间O(N)：原始字符串O(N)，其余都是临时变量，因此为O(N)

# Manacher 算法
TODO
