---
order: 0
title:
    zh-CN: 基本使用
    en-US: Button
---

## zh-CN

基本使用。

## en-US

Our buttons are shiny and beautiful

````jsx
import { Button, Menu, Dropdown } from 'antd';

const menu = (
  <Menu style={{ minWidth: 200 }} selectable={false}>
    <Menu.Item key="1">Set up</Menu.Item>
    <Menu.Item key="2">Share</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Delete</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <div className="container0">
    <div>
      <Button size="large" type="primary">Install app</Button>
    </div>
    <div>
      <Button size="large" type="primary" loading>
        Installing...
      </Button>
    </div>
    <div>
      <Button size="large" disabled>Installed</Button>
    </div>
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          Actions
        </Button>
      </Dropdown>
    </div>
    <div>
      <Button icon="appstore">Views</Button>
    </div>
    <div>
      <Button size="small">Set card type...</Button>
    </div>
    <div>
      <Button size="small">Close</Button>
    </div>
  </div>
, mountNode);
````

````css
.container0 > div {
  padding: 10px 20px
}
````
