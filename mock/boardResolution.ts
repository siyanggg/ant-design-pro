import { v4 as uuidv4 } from 'uuid';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  // support object and array

  'POST /v1/parameters/br/search': async (req: Request, res: Response) => {
    await waitTime(2000);
    res.send({
      status: 'Success',
      errorCode: null,
      description: null,
      data: {
        pageNumber: 1,
        pageSize: 5,
        totalNumber: 7,
        boardResolutionVOList: [
          {
            pendingApproval: false,
            templateld: uuidv4(),
            type: BR_TYPE_KEY.ASBR,
            version: '01012002',
            description: 'Bank standard Account BR introduced on 1 Jan 2002',
            effectiveDate: '01/01/2002',
          },
          {
            pendingApproval: true,
            templateld: uuidv4(),
            type: BR_TYPE_KEY.ANSBR,
            version: '01012002',
            description: 'Bank non standard Account BR introduced on 1 Jan 2002',
            effectiveDate: '01/01/2002',
          },
          {
            pendingApproval: true,
            templateld: uuidv4(),
            type: BR_TYPE_KEY.ASBR,
            version: '01012002',
            description: 'Bank standard Account BR introduced on 1 Jan 2002',
            effectiveDate: '01/01/2002',
          },
        ],
      },
    });
  },

  'POST /v1/parameters/br/details': async (req: Request, res: Response) => {
    res.send({
      status: 'Success',
      errorCode: null,
      description: null,
      data: {
        pendingApproval: false,
        templateId: uuidv4(),
        type: BR_TYPE_KEY.ASBR,
        description: 'Bank standard Account BR introduced on 26 Jun 2022',
        version: 'BR0001',
        effectiveDate: '2022-06-28',
        brFunctionList: [
          {
            functionId: uuidv4(),
            functionDescription: 'Open/Close AC',
            oldValue: false,
            value: false,
          },
          {
            functionId: uuidv4(),
            functionDescription: 'Open/Close AB',
            oldValue: true,
            value: true,
          },
          {
            functionId: uuidv4(),
            functionDescription: 'Open/Close AC (Non MCA)',
            oldValue: true,
            value: true,
          },
          {
            functionId: uuidv4(),
            functionDescription: 'Open/Close AB (Non MCA)',
            oldvalue: false,
            value: false,
          },
          {
            functionId: uuidv4(),
            functionDescription: 'Appoint',
            oldvalue: false,
            value: false,
            brScopeVOList: [
              {
                scopeId: uuidv4(),
                scopeDescription: 'Appointment of Authorised Users of the respective AAA.',
                oldValue: false,
                value: false,
              },
              {
                scopeId: uuidv4(),
                scopeDescription: 'Appointment of AS.',
                oldValue: false,
                value: false,
              },
              {
                scopeId: uuidv4(),
                scopeDescription: 'Appointment of AP.',
                oldValue: false,
                value: false,
              },
              {
                scopeId: uuidv4(),
                scopeDescription: 'Custodial Services.',
                oldValue: false,
                value: false,
              },
            ],
          },
        ],
      },
    });
  },

  'POST /v1/parameters/br/template': async (req: Request, res: Response) => {
    res.send({
      status: 'Success',
      errorCode: null,
      description: null,
      data: [
        {
          functionId: uuidv4(),
          functionName: 'test functionName',
          functionDescription: 'Open/Close AC',
        },
        {
          functionId: uuidv4(),
          functionDescription: 'Open/Close AB',
        },
        {
          functionId: uuidv4(),
          functionDescription: 'Open/Close AC(Non MCA)',
        },
        {
          functionId: uuidv4(),
          functionDescription: 'Open/Close AB (Non MCA)',
        },
        {
          functionId: 'ec5a0282-c314-434f-8d77-9ab51ec6a979',
          functionDescription: 'Appoint',
          scopeTemplatevoList: [
            {
              scopeId: uuidv4(),
              scopeName: 'test scopeName',
              scopeDescription: 'Appointment of Authorised Users of the',
            },
            {
              "'scopeId": uuidv4(),
              scopeDescription: 'Appointment of AS',
            },
            {
              scopeId: uuidv4(),
              scopeDescription: 'Appointment of AP',
            },
            {
              scopeId: uuidv4(),
              scopeDescription: 'Custodiam Services',
            },
          ],
        },
        {
          functionId: 'e1jfcnsjc314-434f-8d77-9ab51ec6a979',
          functionDescription: 'Apply',
          scopeTemplatevoList: [
            {
              scopeId: uuidv4(),
              scopeName: 'test scopeName',
              scopeDescription: 'Appointment of Authorised Users of the',
            },
            {
              "'scopeId": uuidv4(),
              scopeDescription: 'Appointment of AS',
            },
            {
              scopeId: uuidv4(),
              scopeDescription: 'Appointment of AP',
            },
            {
              scopeId: uuidv4(),
              scopeDescription: 'Custodiam Services',
            },
          ],
        },
      ],
    });
  },

  'POST /v1/parameters/br/submit': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
      description: null,
      data: {},
    });
  },

  'POST /v1/parameters/br/approve': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
      description: null,
      data: {},
    });
  },

  'POST /v1/parameters/br/clarify': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
      description: null,
      data: {},
    });
  },
};
