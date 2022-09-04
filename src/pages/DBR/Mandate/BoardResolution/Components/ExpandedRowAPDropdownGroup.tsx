import { Select, Space } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

type MandateGroupTypeLocal = {
  disabled: boolean;
  value: string;
  labelGroupId: string;
};

const ExpandedRowAPDropdownGroup = ({
  record,
  value: valueProps,
  onChange: onChangeProps,
}: {
  record: MandateBoardResolutionType;
  value?: MandateSigningGroupType[];
  onChange?: (input: MandateSigningGroupType[]) => void;
}) => {
  console.log('ExpandedRowAPDropdownGroup record: ', record);
  console.log('ExpandedRowAPDropdownGroup valueProps: ', valueProps);
  console.log('ExpandedRowAPDropdownGroup onChangeProps: ', onChangeProps);

  const { group: groupModel } = useModel('mandateGroup');
  console.log('ExpandedRowAPDropdownGroup groupModel: ', groupModel);

  const [dropdownGroupOptions, setDropdownGroupOptions] = useState<MandateGroupTypeLocal[]>([]);
  console.log('ExpandedRowAPDropdownGroup dropdownGroupOptions: ', dropdownGroupOptions);

  const [signingGroups, setSigningGroups] = useState<MandateSigningGroupType[]>([]);
  console.log('ExpandedRowAPDropdownGroup signingGroups: ', signingGroups);

  useEffect(() => {
    const result = groupModel.map((item: MandateSigningGroupType) => {
      const alreadyExistGroupItem = signingGroups.find(
        (signingGroupsItem) => signingGroupsItem.id === item.id,
      );
      return {
        disabled: alreadyExistGroupItem ? true : false,
        labelGroupId: item.id,
        value: item.value,
      } as MandateGroupTypeLocal;
    });
    setDropdownGroupOptions(result);
  }, [groupModel, signingGroups]);

  useEffect(() => {
    valueProps && setSigningGroups(valueProps);
  }, [valueProps]);

  const onSelectGroup = (selectedGroupValue: string) => {
    const result = [...signingGroups];
    console.log(
      'ExpandedRowAPDropdownGroup onSelectGroup result selectedGroupValue: ',
      selectedGroupValue,
    ); // D
    console.log('ExpandedRowAPDropdownGroup onSelectGroup result: ', result);

    result.push({
      id:
        dropdownGroupOptions.find((item) => item.value === selectedGroupValue)?.labelGroupId ||
        'Not found',
      value: selectedGroupValue,
      actionType: ACTION_TYPE.ADD,
    });
    setSigningGroups(result);
    const updatedDropdownGroupOptionsonSelect = dropdownGroupOptions.map(
      (dropdownGroupOptionsItem) => {
        return {
          ...dropdownGroupOptionsItem,
          disabled: result.map((item) => item.id).includes(dropdownGroupOptionsItem.labelGroupId),
        };
      },
    );
    setDropdownGroupOptions(updatedDropdownGroupOptionsonSelect);

    onChangeProps && onChangeProps(result);
  };

  const onDeleteGroup = (entityItem: MandateSigningGroupType) => {
    console.log('ExpandedRowAPDropdownGroup onDeleteGroup entityItem: ', entityItem);
    const result = signingGroups.filter((item) => item.id !== entityItem.id);
    console.log('ExpandedRowAPDropdownGroup onDeleteGroup result: ', result);
    setSigningGroups(result);

    const updatedDropdownGroupOptionsonDelete = dropdownGroupOptions.map(
      (dropdownGroupOptionsItem) => {
        if (dropdownGroupOptionsItem.labelGroupId === entityItem.id) {
          return {
            ...dropdownGroupOptionsItem,
            disabled: false,
          };
        }
        return dropdownGroupOptionsItem;
      },
    );
    setDropdownGroupOptions(updatedDropdownGroupOptionsonDelete);

    onChangeProps && onChangeProps(result);
  };

  return (
    <Space style={{ width: '100%' }} direction="vertical">
      {signingGroups.map((entityItem, entityItemIndex) => {
        console.log('ExpandedRowAPDropdownGroup entityItemsigningGroup: ', entityItem);
        if (entityItem.actionType === ACTION_TYPE.DELETE) {
          console.log(
            'ExpandedRowAPDropdownGroup true/false: ',
            entityItem.actionType === ACTION_TYPE.DELETE,
          );
          return undefined;
        } else {
          return (
            <div
              key={entityItemIndex}
              style={{
                marginLeft: '8px',
                marginRight: '8px',
                display: 'flex',
                flexDirection: 'row',
                alignItem: 'center',
                justifyContent: 'space-around',
              }}
            >
              <DeleteFilled
                style={{ marginLeft: '10px', cursor: 'pointer', color: COLOR.RUBBISH_DEFAULT }}
                onClick={() => {
                  onDeleteGroup(entityItem);
                }}
              />
            </div>
          );
        }
      })}
      <Select
        status=""
        style={{ width: '100%' }}
        options={dropdownGroupOptions}
        onChange={(value: string) => onSelectGroup(value)}
      />
    </Space>
  );
};

export default ExpandedRowAPDropdownGroup;
