---
order: 3
title:
    zh-CN: 基本使用
    en-US: Switcher
---

## zh-CN

基本使用。

## en-US

Our switchers smart and accurate

````jsx
import { Switch, Checkbox, Radio } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

function onChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <div className="container3">
    <div>
      <RadioGroup onChange={onChange}>
        <Radio value={1}>User Story</Radio>
        <Radio value={2}>Feature</Radio>
        <Radio value={3}>Project</Radio>
      </RadioGroup>
    </div>
    <div>
      <Checkbox onChange={onChange}>Show this view for all Features</Checkbox>
    </div>
    <div>
      <RadioGroup defaultValue="a">
        <RadioButton value="a">All</RadioButton>
        <RadioButton value="b">Kanban</RadioButton>
        <RadioButton value="c">Gitlab</RadioButton>
        <RadioButton value="d">Slack</RadioButton>
      </RadioGroup>
    </div>
    <div>
      <Switch checkedChildren="ON" unCheckedChildren="OFF" />
    </div>
  </div>
, mountNode);
````

````css
.container3 > div {
  padding: 10px 20px
}
````
