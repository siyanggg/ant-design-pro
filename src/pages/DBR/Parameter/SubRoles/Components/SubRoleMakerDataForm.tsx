import { DeleteFilled } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, EditableFormInstance, ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { RecordKey } from '@ant-design/pro-utils/lib/useEditableArray';
import { Button, message, Result, Space, Spin } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { history, request } from 'umi';
import { v4 as uuidv4 } from 'uuid';
// import {scrollToItem} from

export default function SubRoleMakerDataForm({
  defaultData,
  editable,
  pendingApproval,
}: {
  defaultData: DataSourceType[];
  editable: boolean;
  pendingApproval: boolean;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const [searchInput, setSearchInput] = useState<string>('');
  const [editableKeys, setEditableRowKeys] = useState(() => {
    defaultData.map((item) => item.id);
  });
  console.log('SubRoleMakerDataForm editableKey: ', editableKeys);
  const [dataSource, setDataSource] = useState<DataSourceType[]>(() => defaultData);
  console.log('SubRoleMakerDataForm dataSource: ', dataSource);
  const [dataSourceShownInUI, setDataSourceShownInUI] = useState<DataSourceType[]>();
  console.log('SubRoleMakerDataForm dataSourceShownInUI: ', dataSourceShownInUI);

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'List of Sub-Roles',
      dataIndex: 'value',
      width: '30%',
      ellipsis: true,
      formItemProps: {
        rules: [
          {
            validator: async (rules: any, value: string, callback) => {
              console.log('SubRoleMakerDataForm validator: ', validator);
              const currentItemDataId: string = rule.field.substring(0, rule.field.indexOf('.'));
              console.log('SubRoleMakerDataForm currentItemDataId: ', currentItemDataId);
              const SUBROLE = dataSource.filter((item, index) => {
                return item.actionType != ACTION_TYPE.DELETE;
              });
              console.log('SubRoleMakerDataForm SUBROLE: ', SUBROLE);

              if (value == null || value.length === 0) {
                return Promise.reject(new Error('Error, please fill in'));
              } else if (
                SUBROLES.filter((item, index) => {
                  return (
                    currentItemDataId !== item.id &&
                    item.value &&
                    value.toLocaleLowerCase() === item.value.toLocaleLowerCase()
                  );
                }).length > 0
              ) {
                return Promise.reject(new Error('Duplicated data is not allowed'));
              }
              return Promise.resolve();
            },
          },
        ],
      },
      sorter: (a, b) => {
        a.value !== b.value ? (a.value < b.value ? -1 : 1) : 0;
      },
      sortDirection: ['ascend, descend'],
    },
    {
      title: (
        <div style={{ color: '#1890ff', cursor: 'pointer' }} onClick={() => handleAddLineData()}>
          + Add
        </div>
      ),
      valueType: 'option',
      align: 'right',
      width: 250,
    },
  ];

  if (!editable) {
    columns.splice(1, columns.length - 1);
  }

  useEffect(() => {
    console.log('SubRoleMakerDataForm useEffect dataSource: ', dataSource);
    setDataSourceShownInUI(
      dataSource.filter((item, index) => {
        if (searchInput) {
          return (
            item.actionType !== ACTION_TYPE.DELETE &&
            item.value.toLowerCase().includes(searchInput.toLocaleLowerCase())
          );
        } else {
          return item.actionType !== ACTION_TYPE.DELETE;
        }
      }),
    );
  }, [searchInput, dataSource]);

  const onSearch = (inputText: any) => {
    console.log('SubRoleMakerDataForm onSearch inputText: ', inputText);
    setSearchInput(inputText);
  };

  const handleSubmit = (event: any) => {
    console.log('SubRoleMakerDataForm handleSubmit event: ', event);
    if (editableFormRef.current == undefined) {
      console.log('SubRoleMakerDataForm handleSubmit error.');
      return;
    }
    editableFormRef.current?.validateFields().then(() => {
      console.log('Success');
      const result = { ...dataSource };
      console.log('SubRoleMakerDataForm handleSubmit result: ', JSON.stringify(result));
      console.log('SubRoleMakerDataForm handleSubmit result: ', [...dataSource]);
      setLoading(true);
      request(API.PARAMETERS_SUB_ROLES_SUBMIT, {
        method: 'POST',
        data: { details: [...dataSource] },
      })
        .then((res) => {
          setLoading(false);
          if (res.status === RESPONSE_STATUS.SUCCESS) {
            message.success('SubRoleMakerDataForm handleSubmit Res Success');
            history.push({
              pathname: '/home',
            });
          } else if (res.errorCode === RESPONSE_ERROR_CODE.P1007) {
            message.error(
              'SubRoleMakerDataForm handleSubmit: An existing task is pending checker to approve',
            );
          } else {
            message.error('SubRoleMakerDataForm handleSubmit: System error');
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log('SubRoleMakerDataForm handleSubmit: System error');
        })
        .catch((errors) => {
          console.error('SubRoleMakerDataForm handleSubmit Error: ', errors);
          // TODO navigate to error field..
          const list: HTMLCollectionOf<Element> = document.getElementByClassName(
            'ant-table-row ant-table-row-level-0',
          );
          let node: Element | any = undefined;
          for (let i = 0; i < list.length; i++) {
            if (list[i].getAttribute('data-row-key') === errors.errorFields[0].name[0]) {
              node = list[i];
              break;
            }
          }
          console.log('SubRoleMakerDataForm handleSubmit node: ', node);
          if (node) {
            scrollToItem(node);
            setTimeout(() => {
              const allInput = node.querySelectorAll('input');
              console.log('SubRoleMakerDataForm handleSubmit allInput: ', allInput);
              if (allInput.length > 0) {
                allInput[0].focus();
              }
            }, 800);
          }
        });
    });
  };
  const onValuesChange = (record: DataSourceType, recordList: DataSourceType[]) => {
    console.log('SubRoleMakerDataForm onValuesChange');
    console.log('SubRoleMakerDataForm onValuesChange argument.length: ', argument.length);
    console.log('SubRoleMakerDataForm onValuesChange record ', record);
    console.log('SubRoleMakerDataForm onValuesChange recordList: ', recordList);

    if (record === undefined) {
      // Add or delete, ignore
      console.log('SubRoleMakerDataForm onValuesChange ignore');
      return;
    }
    handleModifyLineData(record);
  };

  const handleAddLineData = () => {
    console.log('SubRoleMakerDataForm handleAddLineData');
    if (actionRef.current == undefined) {
      console.error('SubRoleMakerDataForm handleAddLineData error');
      return;
    }
    console.log('SubRoleMakerDataForm handleAddLineData actionRef: ', actionRef);
    const newItem = {
      id: uuidv4(),
      actionType: ACTION_TYPE.ADD,
    } as DataSourceType;
    actionRef.current.addEditRecord(newItem, { newRecordType: 'dataSource' });
    setDataSource([...dataSource, newItem]);

    // scroll to bottom
    setTimeout(() => {
      const list: HTMLCollectionOf<Element> = document.getElementByClassName(
        'ant-table-row ant-table-row-level-0',
      );
      if (list && list.length > 0) {
        let node: Element | any = list[list.length - 1];
        console.log('SubRoleMakerDataForm handleAddLineData node: ', node);
        scrollToItem(node);
        setTimeout(() => {
          const allInput = node.querySelectorAll('input');
          if (allInput.length > 0) {
            allInput[0].focus();
          }
        }, 800);
      }
    }, 0);
  };

  const handleDeleteLineData = (key: RecordKey, row: DataSourceType & { index?: number }) => {
    console.log('SubRoleMakerDataForm handleDeleteLineData');
    console.log('SubRoleMakerDataForm handleDeleteLineData argument.length: ', argument.length);
    console.log('SubRoleMakerDataForm handleDeleteLineData key ', key);
    console.log('SubRoleMakerDataForm handleDeleteLineData row: ', row);
    const deletedItem = dataSource.filter((item, index) => {
      return item.id == row.id;
    });
    if (deletedItem.length < 1) {
      return Promise.reject(new Error('error while selecting row to delete, length < 1'));
    }
    if (deletedItem.length > 1) {
      return Promise.reject(new Error('error while selecting row to delete, length > 1'));
    }
    const newDataSource = dataSource.map((item, index) => {
      if (item.id === row.id) {
        const newItem = { ...item, actionType: ACTION_TYPE.DELETE };
        return newItem;
      }
      return item;
    });
    setDataSource(newDataSource);
    return Promise.resolve();
  };

  const handleModifyLineData = (record: DataSourceType) => {
    const newData: DataSourceType[] = dataSource.map((item, index) => {
      if (item.id === record.id) {
        if (item.actionType === ACTION_TYPE.Add) {
          item.oldValue = '';
          item.value = record.value;
          return item;
        } else {
          return { ...item, actionType: ACTION_TYPE.UPDATE, value: record.value };
        }
      }
      return item;
    });
    setDataSource(newData);
  };

  return (
    <Spin spinning={loading}>
      <PageContainer
        pageHeaderRender={false}
        waterMarkProps={{ content: '' }}
        footer={
          editable
            ? [
                <Button key={'btn-submit'} type="primary" onClick={handleSubmit}>
                  Submit
                </Button>,
              ]
            : undefined
        }
      >
        <Space direction="vertical" size={'large'} style={{ display: 'flex', paddingTop: '24px' }}>
          <EditableProTable<DataSourceType>
            actionRef={actionRef}
            editableFormRef={editableFormRef}
            headerTitle="Sub-Roles"
            columns={columns}
            toolbar={{
              search: (inputText) => {
                console.log('SubRoleMakerDataForm Toolbar Inputtext: ', inputText);
                onSearch(inputText);
              },
            }}
            rowKey="id"
            value={dataSourceShownInUI}
            recordCreatorProps={false}
            editable={
              editable
                ? {
                    type: 'mutiple',
                    deletePopconfirmMessage: <h4>Confirm deletion?</h4>,
                    editableKeys,
                    deleteText: <DeleteFilled style={{ color: '#333333' }} />,
                    actionRender: (row, config, defaultDoms) => {
                      return [defaultDoms.delete];
                    },
                    onValuesChange: onValuesChange,
                    onDelete: handleDeleteLineData,
                    onChange: setEditableRowKeys,
                  }
                : false
            }
          />
        </Space>
      </PageContainer>
    </Spin>
  );
}
