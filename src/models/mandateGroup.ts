const mandateGroups = () => {
  //TODO
  const [groups, setGroups] = useState<MandateSigningGroupType[]>([
    { groupId: 'id-group-A', value: 'A', actionType: '' },
    { groupId: 'id-group-B', value: 'B', actionType: '' },
    { groupId: 'id-group-C', value: 'C', actionType: '' },
    { groupId: 'id-group-D', value: 'D', actionType: '' },
  ]);
  return {
    groups,
    setGroups,
  };
};

export default mandateGroups;
