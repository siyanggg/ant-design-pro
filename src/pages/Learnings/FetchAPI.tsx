import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FetchAPI() {
  const [dataSource, setDataSouce] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchRecords = (page) => {
    setLoading(true);
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then((res) => {
      res.json().then((response) => {
        setDataSouce(response.data);
        setTotalPages(response.totalPages);
        setLoading(false);
      });
    });
  };

  //   const fetchRecords = (page) => {
  //     setLoading(true);
  //     axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then((res) => {
  //       setDataSouce(res.data.data);
  //       setTotalPages(res.data.totalPages);
  //       setLoading(false);
  //     });
  //   };

  useEffect(() => {
    fetchRecords(1);
  }, []);

  const columns = [
    { title: 'ID', dataIndex: '_id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Trips', dataIndex: 'trips' },
  ];
  return (
    <div
      stype={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          // 10 items per page
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            fetchRecords(page);
          },
        }}
      />
    </div>
  );
}
