import { Table, Button, Modal, Input } from 'antd';
import { useState, useEffect } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function CRUDETable() {
  const [dataSource, setDataSource] = useState([
    {
      name: 'name 1',
      age: 10,
      address: 'Address 1',
      id: 1,
    },
    {
      name: 'name 2',
      age: 20,
      address: 'Address 2',
      id: 2,
      sorter: (a, b) => a.age - b.age,
    },
    {
      name: 'name 3',
      age: 30,
      address: 'Address 3',
      id: 3,
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      name: 'name ' + randomNumber,
      age: randomNumber,
      address: 'Address ' + randomNumber,
      id: randomNumber,
    };
    setDataSource((prev) => {
      return [...prev, newStudent];
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: 'Are u sure to delete this?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource((prevState) => {
          return prevState.filter((student) => student.id !== record.id);
        });
      },
    });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  const columns = [
    {
      title: 'ID', // name of the column
      dataIndex: 'id', // to match data's name key
      key: '1',
    },
    {
      title: 'Name', // name of the column
      dataIndex: 'name', // to match data's name key
      key: '2',
    },
    {
      title: 'Age',
      dataIndex: 'age', // to match data's age key
      key: '3',
    },
    {
      title: 'Address',
      dataIndex: 'address', // to match data's address key
      key: '4',
    },
    {
      title: 'Actions',
      key: '5',
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: 'red', marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div>
      <h1>CRUDETable: </h1>
      <Button onClick={onAddStudent}>Add a new button</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((prev) => {
            return prev.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.age}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, age: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.address}
          onChange={(e) => {
            setEditingStudent((prev) => {
              return { ...prev, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
}
