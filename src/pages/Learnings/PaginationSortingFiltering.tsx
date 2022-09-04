import { Table } from 'antd';
import { useState, useEffect } from 'react';

export default function PaginationSortingFiltering() {
  const [dataSource, setDataSource] = useState(false);
  const [loading, setLoading] = useState([]);
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState(10);
  const [selectedRow, setSelectedRow] = useState(['1', '3']);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.tyicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'UserID',
      dataIndex: 'userId',
      sorter: (a, b) => {
        return a.userID > b.userID;
      },
    },
    {
      key: '3',
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed ? 'Completed' : 'In progress'}</p>;
      },
      // add the selection filter box next to the title
      filters: [
        { text: 'Complete', valu: true },
        { test: 'In Progress', value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  return (
    <div>
      <h1>PaginationSortingFiltering</h1>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        // will show the page number
        // pagination={true}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
        rowSelection={{
          type: 'checkbox', // or radio
          selectedRowKeys: selectedRow,
          onChange: (keys) => {
            setSelectedRow(keys);
          },
          onSelect: (record) => {
            console.log('record: ', record);
          },
          getCheckBoxProps: (record) => ({
            disabled: record.Status === 'Completed',
          }),
          selections: [
            Table.SELECTION_None,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              // create a new personal selection
              key: 'even',
              text: 'Select Even Rows',
              onSelect: (allKeys) => {
                const selectKeys = allKeys.filter((key) => {
                  return key % 2 == 0;
                });
                setSelectedRow(selectKeys);
              },
            },

            {
              // create a new personal selection
              key: 'even',
              text: 'Select Even Rows',
              onSelect: (allKeys) => {
                const selectKeys = allKeys.filter((key) => {
                  return key % 2 == 0;
                });
                setSelectedRow(selectKeys);
              },
            },
          ],
        }}
      />
    </div>
  );
}
