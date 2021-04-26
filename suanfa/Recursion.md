### 递归

递归-循环：通过函数体来进行的循环

### 盗梦空间-递归特点

* 向下进入到不同梦境中；向上有回到原来一层
* 通过声音同步回到上一层
* 每一层的环境和周围的人都是一份拷贝（主角等几个人穿越不同层级的梦境，发生和携带变化）

### 递归的代码模版

```python
# python
def recursion(level,param1,param2,...){
  # recursion terminator （递归终结者）第一步
  if level > MAX_LEVEL:
  process_result
  return;
  
  # process logic in current level（处理当前层业务代码） 第二步
  process(level,data...)
  
  # drill down （下探到下一次） 第三步
  self.recursion(level+1,p1,...)
  
  # reverse the current level status if needed （根据需要，清理当前层）
}
```

```java
// java
public void recur(int level,int param){
  //terminator
  if(level>MAX_LEVEL){
    return;
  }
  
  // process current togic
  process(level,param);
  
  //drill down
  recur(level:level+1,new Params);
  
  // restore current status
}
```



### 思维要点

1. 不要人肉进行递归（最大误区）【画递归状态树】
2. 找到最近最简单的方法，将其拆解成可重复解决的问题（重复子问题）
3. 数学归纳法思维（比如，第一个成立，可以推到出n+1也成立）

### 练习题

https://leetcode-cn.com/problems/climbing-stairs/

https://leetcode.com/problems/generate-parentheses/