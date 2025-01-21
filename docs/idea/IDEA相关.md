# 快捷键
| 说明 | 快捷键 | 补充说明 |
| --- | --- | --- |
| 批量修改变量/类名/方法名 | shift + F6 |  |
| 抽取代码作为一个方法 | ctrl + alt + M |  |
| 抽取代码作为一个静态类常量 | ctrl + alt + C |  |
| 抽取代码作为一个局部变量 | ctrl + alt + V |  |
| 重写父类方法 | ctrl + O |  |
| 实现接口方法 | ctrl + I |  |
| 选中部分切换大小写 | ctrl + shift + U |  |
| 批量导包/去除无用的包引用 | ctrl + alt + O |  |
| 显示方法参数提示信息 | ctrl + P |  |
| 格式化代码 | ctrl + alt + L |  |
| 显示try-catch等包围代码的选项 | ctrl + alt + T |  |
| 反向撤销 | ctrl + shift + Z |  |
| 剪贴板 | ctrl + shift + V |  |
| 复制并粘贴当前行 | ctrl + D |  |
| 删除光标所在行 | ctrl + Y |  |
| 将当前行在方法/类中往上移动 | ctrl + shift + ↑ |  |
| 将当前行在方法/类中往下移动 | ctrl + shift + ↓ |  |
| 查看上级类或上级方法 | ctrl + U |  |
| 查看方法调用链 | ctrl + alt + H |  |
| 查看方法继承链 | ctrl + shift + H |  |
| 查看类继承链 | ctrl + H |  |
| 标签页横跳 | alt + ←→ |  |
| 各种搜索 | shift + shift | tab 向右切换，shift + tab 向左切换 |
| 打开最近使用的文件 | ctrl + E |  |
| 查看选中的在哪些地方有被使用 | alt + F7 |  |
| 全局搜索 | ctrl + shift + F |  |
| 全局替换 | ctrl + shift + R |  |
| 多行编辑 | alt + shift + 鼠标点击 | 适用于光标位置竖向不对齐的情况 |
| 多行编辑 | shift + 鼠标下拉 | 适用于光标位置竖向对齐的情况 |
| 找到上一步编辑的位置 | ctrl + alt + ← | 回退 |
| 找到上一步编辑的位置 | ctrl + alt + → | 前进 |
| 快速定位到错误行 | F2 |  |
| 快速定位到项目窗口（Project） | alt + 1 | 左侧 Project 栏，重复快捷键关闭 |
| 快速定位到类目录（Structure） | alt + 7 | 左侧 Structure 栏，重复快捷键关闭 |
| 回到编辑器区域，关闭任何上层窗口 | Esc |  |
| 定位到类中上个方法 | alt + ↑ |  |
| 定位到类中下个方法 | alt + ↓ |  |
| 选取代码块 | ctrl + W |  |
| 减少选取代码块 | ctrl + shift + W |  |
| 代码补全 | ctrl + shift + enter | 类似给代码结尾加‘；’，if花括号补全等 |


上面这些是比较常用的一些快捷键，如果没有找到自己想用的快捷键可以在 IDEA 中按下`ctrl + shift + A`，输入 keyboard 点击下图标记的菜单，可以看到有一个 IDEA 提供的 pdf 格式的快捷键大全

![](./images/IDEA相关/1722928541348-4c9e77da-b6b2-4f90-b5ec-b6e926624d7f.png)

![](./images/IDEA相关/1722928633374-72a97f46-d916-4fa1-a80f-ea19ec1db864.png)

# 好用插件
| 名称 | 说明 | |
| --- | --- | --- |
| GsonFormatPlus | 格式化json、根据json生成相应属性 快捷键：alt+s | |
| Alibaba Java Coding Guidelines | 阿里的代码规约检查 | |
| Key Promoter X | 日常开发熟悉快捷键的工具，如果一个操作可以使用快捷键使用但没有使用会有提示 | |
| LeetCode Editor | 力扣刷题插件 | |
| Rainbow Brackets | 通过不同颜色区分{}，（） | |
| RestfulTool | 根据接口快速定位controller位置的工具 | |
| Translation | 翻译工具，需要配合有道的applicationId使用 | |
| Material Theme UI | UI主题框架，可以替换idea的ui | |
| SequenceDiagram | 查看时序图，分析业务和源码时很好用 | |
| Presentation Assistant | 使用IDEA的快捷键时，下方会显示出使用的快捷键。录屏时好用 | |
| String Manipulation | 各种字符串操作（大小写，蛇形转驼峰，编码解码等），选中字符串后 alt + M | |
| <font style="color:rgb(24, 25, 28);">mind map</font> | 思维导图 | |
| mybatis x | Mapper 和 xml 双向跳转 | |
| maven helper | 用于解决maven依赖冲突的工具，在pom.xml文件中，文件下方点击 Denpendency Analyzer 栏使用 | |
| ApiPost Helper | ApiPost插件，可以将项目中的接口上传至ApiPost中，超级好用。 | |
| maven search | 查询常用的maven/gradle依赖直接复制 | |


# 便捷操作
## 历史版本
有时候我们修改了一个文件，然后清空后又重新写了一些东西，这时候想着恢复到清空前，就可以使用这个便捷操作啦。使用方法也非常简单，直接在文件中点击右键选中`show history...`，如下图所示：

![](./images/IDEA相关/1722931437234-873eafc4-6d89-45ef-a61c-1134aa3d4f61.png)

## 比对
### 项目内文件比对
有时候我们需要知道项目中两个文件到底哪块不一样，这时候就可以在左侧 Project 栏中使用`ctrl + a`同时选中这两个文件，然后点击右键选择`compare files`，如下图所示：

![](./images/IDEA相关/1722932186885-06bb2235-641f-4e5a-b0d9-ec385f3fa406.png)

![](./images/IDEA相关/1722932256234-436508b4-5f9e-4d43-ae17-d90cd9078b7e.png)

我们也可以点击上面的箭头来选择覆盖哪个文件中不一样的地方。

### 项目间文件比对
有时候这两个文件不在同一个项目中，那也非常简单，只需要选中一个点击右键，选择`compare with`，然后在文件中指定另一个文件的位置即可，具体如下图所示：

![](./images/IDEA相关/1722932579027-d7e00dcf-e5df-4400-af00-1bc34831eea5.png)

![](./images/IDEA相关/1722932608379-c8dd2b00-4ff2-4064-88d9-11b371a79974.png)

### 剪贴板比对
有时候我们只想和我们复制的内容做比对，这种也很简单。比如我们要比对一串字符串是否一致，先复制字符串A，然后在 IDEA 中选中字符串B，然后右键`compare with clipboard`即可。

![](./images/IDEA相关/1722932975997-558e278d-62d3-4f2e-9457-ae9677a2f4d0.png)

像这种我们只知道这两字符串确实不一样，但是我想知道哪个字符不一样，该怎么办呢？

其实也很简单，我就直接上图了。

![](./images/IDEA相关/1722933091851-45adedfe-f798-42bf-a872-0949a2f58f96.png)

![](./images/IDEA相关/1722933132373-877dfb4d-d3a5-42c7-977e-7772ccf0a019.png)

# 多个Spring应用控制台侧列展示
正常我们启动多个Spring应用时，控制台展示如下：

![](./images/IDEA相关/1728869342155-15d45167-ee1b-4f7f-9804-aa1690d30536.png)

这样切换多个应用比较麻烦，且不知道端口号。

可以点击 Services 中设置，Services位置如下：

![](./images/IDEA相关/1728869524287-5deaef6a-9cb7-4492-b353-6e88eeb39425.png)

点击 `Tool Windows`，选择右侧展开列中的`Services`（由于截图问题，这里截图不完整）。

![](./images/IDEA相关/1728869720433-dd46ba32-920e-46bf-a19a-905c92c856fa.png)

找到`SpringBoot`列添加即可。

![](./images/IDEA相关/1728869763637-0dafc3be-042f-47dd-a231-293df7fa2e40.png)

最终效果如下：

![](./images/IDEA相关/1728869831625-b205f6ca-d9e7-480f-810a-8e0013ee795d.png)

# 使用Material-ui卸载后，git状态颜色无法恢复。
![](./images/IDEA相关/1730964126517-5bdecd5c-7cad-47e7-968e-f3ef9eda2f87.png)

一个一个Restore。

