# mip-point-method

mip-point-method 组件说明

标题|内容
----|----
类型|通用
支持布局|responsive,fixed-height,fill,container,fixed
所需脚本|https://c.mipcdn.com/static/v1/mip-point-method/mip-point-method.js

## 示例
点击显示与隐藏，parameter参数1是获取的id，参数2是具体哪一个，值必须是number
<mip-point-method data-code="replyclick" data-parameter="div,2">点击</mip-point-method>
<div id="div">1</div>
<div id="div2">2</div>
<div id="div3">3</div>
点赞功能，parameter参数1是入口文件，参数2是id值，参数3是控制器，参数4是方法，参数5是id名称
示例：/index.php?m=ask&a=comment&id=2
<mip-point-method data-code="dingcomment" data-parameter="index,2,ask,comment,div">点赞</mip-point-method>
<div id="div2"></div>
验证码刷新，参数1 输入验证码的input框，参数2 验证码更新的src地址，参数3 验证码的id
<mip-point-method data-code="reloadImgCode" data-parameter="img,/xxx.php?xx=,IMGid">回复</mip-point-method>
验证码刷新，参数1 输入验证码的input框，参数2 验证码更新的src地址，参数3 区分验证码避免冲突，参数4 验证码的id
<mip-point-method data-code="reloadImgCodes" data-parameter="img,/xxx.php?xx=,4,IMGid">回复</mip-point-method>
<input id="img" value="">
<img id="IMGid" />
### 基本用法
```html
<mip-point-method data-code="需要调用的函数名称" data-parameter="参数1，参数2">
    自定义内容，可以嵌套其他组件
</mip-point-method>
```

## 属性

### replyclick

说明：点击展开或者隐藏
必选项：parameter不能为空
类型：text
取值范围：a-zA-Z0-9
单位：无
默认值：无

### dingcomment

说明：点赞功能
必选项：parameter不能为空
类型：text
取值范围：a-zA-Z0-9
单位：无
默认值：无

### reloadImgCode

说明：验证码刷新
必选项：parameter不能为空
类型：text
取值范围：a-zA-Z0-9
单位：无
默认值：无

### reloadImgCodes

说明：验证码区分刷新
必选项：parameter不能为空
类型：text
取值范围：a-zA-Z0-9
单位：无
默认值：无

## 注意事项
