export default () => {
  const [renderType, setRenderType] = useState<number>(RENDER_TYPE.INIT);
  const [cif, setCif] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [mandateNavigatorInfo, setMandateNavigatorInfo] = useState<MandateNavigatorType>(
    defaultMandateNavigatorType,
  );
  const [corporateDetails, setCorporateDetails] = useState<MandateCorporateType>(
    defaultMandateCorporateDetails,
  );

  const requestCorporateDetails = (cif: string = '') => {
    const jumpoverSITIssue = true;
    if (jumpoverSITIssue) {
      return Promise.resolve({
        status: 'Success',
        errorCode: null,
        data: {
          payload: [
            {
              cifNo: '100-000-009a',
              customerName1: '',
              customerName2: 'Paradise Group Pte Ltd',
              idType: '',
              idNo: '239485750',
              idissueCountry: '',
              citizenshipCountryCode: '',
              incorporatedCountryCode: 'Singapore',
              countryofDomicile: 'Singapore',
              businesssSegment: 'A Emerging Business 7',
              customerType: MANDATE_CUSTOMER_TYPE_KEY.CORPORATE + 'Partnership',
              customerSubType: 'Q LLP',
              rmCode: '',
              officerName: '',
              customerStatus: '',
              orgcd: 'Paradise Group', //based on the UUID if not found locally, from BV Oracle table
              loginId: '', //applicable for individual only - from ORG USER based on UUID, if not found locally, from BV Oracle table
            },
          ],
        },
      });
    }
    return request(API.MANDATE_CUSTOMER_RETRIEVE, {
      methdod: 'POST',
      data: {
        cif: cif,
        customerType: MANDATE_CUSTOMER_TYPE_KEY.CORPORATE,
        fromHost: 'true',
      },
    });
  };

  useEffect(() => {
    console.log('models - mandate, mandateNavigatorInfo updates!', mandateNavigatorInfo);
  }, [mandateNavigatorInfo]);

  useEffect(() => {
    console.log('models - mandate, renderType updates!', renderType);
  }, [renderType]);

  return {
    requestCorporateDetails,
    cif,
    setCif,
    date,
    setDate,
    renderType,
    setRenderType,
    mandateNavigatorInfo,
    setMandateNavigatorInfo,
    corporateDetails,
    setCorporateDetails,
  };
};
