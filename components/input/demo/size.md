---
order: 1
title:
    zh-CN: 三种大小
    en-US: Three sizes of Input
---

## zh-CN

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `32px`、`28px` 和 `22px`。

注意： 在表单里面，我们只使用大尺寸的输入框。

## en-US

There are three sizes of an Input box: `large` (36px)、`default` (28px) and `small` (24px).

Note: Inside of forms, only the large size is used.

````jsx
import { Input, Button } from 'antd';

ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="large size" /><Button size="large">Do this</Button>
    <Input placeholder="default size" /><Button>Do this</Button>
    <Input size="small" placeholder="small size" /><Button size="small">Do this</Button>
  </div>
, mountNode);
````

````css
.example-input .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
````
