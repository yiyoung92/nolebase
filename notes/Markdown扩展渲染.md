# Markdown扩展渲染
## 目录
输入`[[toc]]`
[[toc]]
## emoji
- 直接复制图形 😈
- 输入对应代码` :tada:` :tada:

## 自定义容器（标注）
方法1：用三个冒号组成
::: danger STOP 
危险区域，请勿继续
:::

方法2：obsidian中的标注
以下成功显示色块的说明可以被vitepress渲染

> [!warning] 警告
> warning标注

> [!info] 信息
> info标注

> [!tip] 提示
> tip标注

> [!question] 问题
> question标注

> [!NOTE] 笔记
> note标注

> [!example] 示例
>example标注

> [!quote] 引用
> quote标注

> [!success] 完成
> success标注

## 代码块
直接使用obsidian的代码块即可，可以显示hl高亮。
可通过增加注释 `[!code focus]` 实现代码块的聚焦渲染，或者使用` [!code focus:<lines>]`渲染聚焦的代码行。
```python hl=6
import os
print("hello world")

a=d  # [!code focus]

flag=True
```

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus:<4-5>]
    }
  }
}
```

## 公式

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$