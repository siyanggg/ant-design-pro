const mandateFooter = () => {
  const [showSubmitBtn, setShowSubmitBtn] = useState<boolean>(false);
  const [showModifyBtn, setShowModifyBtn] = useState<boolean>(false);
  const [showSaveBtn, setShowSaveBtn] = useState<boolean>(false);
  const [showCancelBtn, setShowCancelBtn] = useState<boolean>(false);
  const [submitBtnCounter, setSubmitBtnCounter] = useState<number>(0);
  const [modifyBtnCounter, setModifyBtnCounter] = useState<number>(0);
  const [saveBtnCounter, setSaveBtnCounter] = useState<number>(0);
  const [cancelBtnCounter, setCancelBtnCounter] = useState<number>(0);

  const [showApproveBtn, setShowApproveBtn] = useState<boolean>(false);
  const [showRejectBtn, setShowRejectBtn] = useState<boolean>(false);
  const [showReworkBtn, setShowReworkBtn] = useState<boolean>(false);
  const [approveBtnCounter, setApproveBtnCounter] = useState<number>(0);
  const [rejectBtnCounter, setRejectBtnCounter] = useState<number>(0);
  const [reworkBtnCounter, setReworkBtnCounter] = useState<number>(0);

  return {
    showFooter,
    setShowFooter,
    showSubmitBtn,
    showModifyBtn,
    showSaveBtn,
    showCancelBtn,
    setShowSubmitBtn,
    setShowModifyBtn,
    setShowSaveBtn,
    setShowCancelBtn,
    submitBtnCounter,
    modifyBtnCounter,
    saveBtnCounter,
    cancelBtnCounter,
    setSubmitBtnCounter,
    setModifyBtnCounter,
    setSaveBtnCounter,
    setCancelBtnCounter,

    showApproveBtn,
    showRejectBtn,
    showReworkBtn,
    setShowApproveBtn,
    setShowRejectBtn,
    setShowReworkBtn,
    approveBtnCounter,
    rejectBtnCounter,
    reworkBtnCounter,
    setApproveBtnCounter,
    setRejectBtnCounter,
    setReworkBtnCounter,
  };
};

export default mandateFooter;
