import { Table } from 'antd';
import './App,css';
import 'antd/dist/antd.css';

export default function TableComponent() {
  const data = [
    {
      name: 'name 1',
      age: 10,
      Address: 'Address 1',
      key: '1',
    },
    {
      name: 'name 2',
      age: 20,
      Address: 'Address 2',
      key: '2',
      sorter: (a, b) => a.age - b.age,
    },
    {
      name: 'name 3',
      age: 30,
      Address: 'Address 3',
      key: '3',
    },
  ];

  const columns = [
    {
      title: 'Name', // name of the column
      DataIndex: 'name', // to match data's name key
      key: 'key',
      render: (name) => {
        // will be able to do something to all the names in the table when e.g. clicked
        return <a onClick={onClick}>{name}</a>;
      },
    },
    {
      title: 'Age',
      DataIndex: 'age', // to match data's age key
      key: 'key',
    },
    {
      title: 'Address',
      DataIndex: 'address', // to match data's address key
      key: 'key',
    },
    {
      title: 'Graduated?',
      key: 'key',
      render: (payload) => {
        return <p>{payload.age > 20 ? 'True' : 'False'}</p>;
      },
    },
  ];

  return (
    <div>
      <h1>TableComponent: </h1>
      <Table>
        dataSource={data}
        columns={[columns]}
        pagination
      </Table>
    </div>
  );
}
