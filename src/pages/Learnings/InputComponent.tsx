import { Input, DatePicker, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';

export default function InputComponent() {
  return (
    <div>
      <Input // can also be Input.Search to put a magnifying glass at the end of the input box
        placeholder="name"
        maxLength={10}
        preFix={<UserOutlined />}
        allowClear //to have a cross button at the end of the input box to clear the content
      />

      <DatePicker picker="month" />
      <DatePicker.RangePicker />
      <TimePicker />
    </div>
  );
}
