
import { v4 as uuidv4 } from 'uuid';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
    'POST/v1/admin/customers/retrieve':async (req: Request, res:Response) => {
        console.log("POST/v1/admin/customers/retrieve, req: ", req)
        console.log("POST/v1/admin/customers/retrieve, req.params: ", req.params)
        console.log("POST/v1/admin/customers/retrieve, req.query: ", req.query)
        console.log("POST/v1/admin/customers/retrieve, req.body: ", req.body)
        const mock401 = false;
        if (mock401) {
            res.status(401).send({
                status: 'failure',
                message: 'expired',
            });
            return;
        }
        await waitTime(500);
        if (req.body.customerType === MANDATE_CUSTOMER_TYPE_KEY.CORPORATE){
            res.send({
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
        } else{}
        },
        
    };
}