---
order: 1
title:
    zh-CN: 基本使用
    en-US: Input
---

## zh-CN

基本使用。

## en-US

Our inputs are strong and powerful

````jsx
import { Button, Input, InputNumber } from 'antd';

ReactDOM.render(
  <div className="container1">
    <div>
      <Input size="large" placeholder="large size" /><Button size="large">Send</Button>
    </div>
    <div>
      <Input placeholder="default size" /><Button>Send</Button>
    </div>
    <div>
      <Input size="small" placeholder="small size" /><Button size="small">Send</Button>
    </div>
    <div>
      <InputNumber min={1} max={10} defaultValue={3} />
    </div>
    <div>
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={value => `${value}\u2009pt`}
        parser={value => value.replace('\u2009pt', '')}
      />
    </div>
    <div>
      <Input type="textarea" placeholder="Write your comment..." autosize={{ minRows: 4, maxRows: 12 }} />
    </div>
  </div>
, mountNode);
````

````css
.container1 > div {
  padding: 10px 20px
}

.container1 input.ant-input {
  width: 200px;
  margin-right: 8px;
}
````
