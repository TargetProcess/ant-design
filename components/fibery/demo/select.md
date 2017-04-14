---
order: 2
title:
    zh-CN: 基本使用
    en-US: Select
---

## zh-CN

基本使用。

## en-US

Our selects are fast and inexorable

````jsx
import { Select, Icon, DatePicker } from 'antd';
const { Option, OptGroup } = Select;
const { RangePicker } = DatePicker;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const dateFormat = 'MMM D, YYYY';

ReactDOM.render(
  <div className="container2">
    <div>
      <Select
        showSearch
        optionFilterProp="children"
        placeholder="Find person to assign"
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        style={{ width: 240 }}
        onChange={handleChange}
      >
        <OptGroup label="Developer">
          <Option value="Andrew Shotkin"><Icon type="smile-o" /> Andrew Shotkin</Option>
          <Option value="Victor Zhuk"><Icon type="smile-o" /> Victor Zhuk</Option>
          <Option value="Nikita Khmourovitch"><Icon type="smile-o" /> Nikita Khmourovitch</Option>
          <Option value="Ilya Tsuryev"><Icon type="smile-o" /> Ilya Tsuryev</Option>
        </OptGroup>
        <OptGroup label="Designer">
          <Option value="Michael Dubakov"><Icon type="smile-o" /> Michael Dubakov</Option>
          <Option value="Ihar Trafimovich"><Icon type="smile-o" /> Ihar Trafimovich</Option>
        </OptGroup>
      </Select>
    </div>
    <div>
      <Select
        defaultValue="Open"
        placeholder="Find person to assign"
        style={{ width: 160 }}
        onChange={handleChange}
      >
        <Option value="Open">Open</Option>
        <Option value="Planned">Planned</Option>
        <Option value="In Dev">In Dev</Option>
        <Option value="Coded">Coded</Option>
        <Option value="In Testing">In Testing</Option>
        <Option value="Ready To Merge">Ready To Merge</Option>
        <Option value="Done">Done</Option>
      </Select>
    </div>
    <div>
      <Select
        defaultValue="S"
        placeholder="Find person to assign"
        style={{ width: 80 }}
        onChange={handleChange}
      >
        <Option value="XS">XS</Option>
        <Option value="S">S</Option>
        <Option value="M">M</Option>
        <Option value="L">L</Option>
        <Option value="XL">XL</Option>
      </Select>
    </div>
    <div>
      <DatePicker
        onChange={handleChange}
        allowClear={false}
        showToday={false}
        style={{ width: 160 }}
        format={dateFormat}
      />
    </div>
    <div>
      <RangePicker
        onChange={handleChange}
        allowClear={false}
        style={{ width: 240 }}
        format={dateFormat}
      />
    </div>
  </div>
, mountNode);
````

````css
.container2 > div {
  padding: 10px 20px
}
````
