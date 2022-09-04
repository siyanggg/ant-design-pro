import { Select } from 'antd';
import 'antd/dist/antd.css';

export default function SelectComponent() {
  const fruits = ['a', 'b', 'c', 'd'];

  return (
    <div>
      <h1>SelectComponent: </h1>
      <p>Which are your favourite fruits?</p>
      <Select
        mode="multiple" // for multiple selections
        maxTagCount={2} // how many tags to show, if chose 2, the rest will be +2
        placeholder="Select fruit"
        style={{ width: '50%' }}
        // filterOptions, filterSort
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
}
