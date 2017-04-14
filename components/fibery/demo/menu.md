---
order: 4
title:
    zh-CN: 基本使用
    en-US: Menu
---

## zh-CN

基本使用。

## en-US

Menu

````jsx
import { Menu, Icon, Layout } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const renderSection = (title) => {
  return (
    <div
      style={{
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '12px',
        height: '14px',
        display: 'flex' }}
    >
      <div style={{ flex: 1 }}>{title}</div>
      <div style={{ flex: 0, fontSize: '14px' }}>
        <Icon type="plus-circle-o" />
      </div>
    </div>);
};

const renderFolder = (title) => {
  return <div><Icon type="folder" /> {title}</div>;
};


class LeftMenu extends React.Component {

  state = {
    firstLevel: '1',
    secondLevel: '1',
    collapsed: true,
  }

  firstLevelClick = (e) => {
    this.setState({
      firstLevel: e.key,
    });
  }

  secondLevelClick = (e) => {
    this.setState({
      secondLevel: e.key,
    });
  }

  getSecondLevel = (key) => {
    switch (key) {
      case '1':
        return (
          <Menu
            theme="dark"
            onClick={this.secondLevelClick}
            style={{ width: 240 }}
            selectedKeys={[this.state.secondLevel]}
            mode="inline"
          >
            <Menu.Item key="0"><Icon type="home" /> Home</Menu.Item>
            <MenuItemGroup key="g1" title={renderSection('Favorites')}>
              <Menu.Item key="1"><Icon type="file-text" /> Fibery. Vision</Menu.Item>
              <SubMenu key="sub3" title={renderFolder('Fibery')}>
                <Menu.Item key="7"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="8"><Icon type="file-text" /> FQL</Menu.Item>
              </SubMenu>
              <Menu.Item key="3"><Icon type="appstore" /> Print and Export</Menu.Item>
              <Menu.Item key="4"><Icon type="appstore" /> Smart Views</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g2" title={renderSection('Boards')}>
              <Menu.Item key="5"><Icon type="appstore" /> My Work</Menu.Item>
              <Menu.Item key="6"><Icon type="appstore" /> Team Board</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g3" title={renderSection('Shared with me')}>
              <Menu.Item key="9"><Icon type="appstore" /> Roadmap</Menu.Item>
              <Menu.Item key="10"><Icon type="appstore" /> Vacations</Menu.Item>
            </MenuItemGroup>
          </Menu>);
      case '2':
        return (
          <Menu
            theme="dark"
            onClick={this.secondLevelClick}
            style={{ width: 240 }}
            selectedKeys={[this.state.secondLevel]}
            openKeys={['sub3', 'sub4']}
            mode="inline"
          >
            <MenuItemGroup key="g1" title={renderSection('Wiki')}>
              <Menu.Item key="0"><Icon type="home" /> Home</Menu.Item>
              <SubMenu key="sub3" title={renderFolder('Fibery')}>
                <Menu.Item key="7"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="8"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="9"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="10"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="11"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="12"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="13"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="14"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="15"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="16"><Icon type="file-text" /> FQL</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={renderFolder('Vizydrop')}>
                <Menu.Item key="17"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="18"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="19"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="20"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="21"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="22"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="23"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="24"><Icon type="file-text" /> FQL</Menu.Item>
                <Menu.Item key="25"><Icon type="file-text" /> Schema Reader</Menu.Item>
                <Menu.Item key="26"><Icon type="file-text" /> FQL</Menu.Item>
              </SubMenu>
            </MenuItemGroup>
          </Menu>);
      default:
        throw new Error();
    }
  }

  render() {
    return (
      <div className="container4">
        <div>
          <Layout style={{ width: 300, height: 600 }}>
            <Sider
              width={280}
              style={{
                overflow: 'hidden',
                display: 'flex' }}
            >
              <div
                onMouseOut={() => { this.setState({ collapsed: true }); }}
                onMouseOver={() => { this.setState({ collapsed: false }); }}
                style={{ backgroundColor: '#000' }}
              >
                <Sider
                  width={160}
                  collapsedWidth={40}
                  defaultCollapsed
                  collapsed={this.state.collapsed}
                  trigger={null}
                  style={{ overflow: 'hidden' }}
                >
                  <Menu
                    theme="dark"
                    onClick={this.firstLevelClick}
                    style={{ width: 240, backgroundColor: '#000' }}
                    selectedKeys={[this.state.firstLevel]}
                    mode="inline"
                    inlineIndent={12}
                  >
                    <Menu.Item key="1"><Icon type="star-o" /> My Stuff</Menu.Item>
                    <MenuItemGroup key="g1">
                      <Menu.Item key="2"><Icon type="file" /> Wiki</Menu.Item>
                      <Menu.Item key="3"><Icon type="appstore-o" /> Kanban</Menu.Item>
                      <Menu.Item key="4"><Icon type="usergroup-add" /> Allocations</Menu.Item>
                      <Menu.Item key="5"><Icon type="inbox" /> Inbox</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2">
                      <Menu.Item key="6"><Icon type="eye" /> Teams</Menu.Item>
                      <Menu.Item key="7"><Icon type="eye" /> Departments</Menu.Item>
                    </MenuItemGroup>
                  </Menu>
                </Sider>
              </div>
              {this.getSecondLevel(this.state.firstLevel)}
            </Sider>
          </Layout>
        </div>
      </div>);
  }
}

ReactDOM.render(<LeftMenu />, mountNode);
````

````css
.container4 > div {
  padding: 10px 20px
}
````
