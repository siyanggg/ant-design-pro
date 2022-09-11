import { v4 as uuidv4 } from 'uuid';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'POST /v1/parameters/indemnity/query': async (req: Request, res: Response) => {
    await waitTime(1000);
    res.send({
      status: 'Success',
      errorCode: null,
      data: {
        pendingApproval: false,
        parameterListWithType: [
          { id: uuidv4(), oldValue: '', value: 'Indemnity 1', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'Indemnity 2', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'Indemnity 3', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'Telefax', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'Digital Letters', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'Fascimile', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'Others', actionType: '' },
        ],
      },
    });
  },

  'POST /v1/parameters/indemnity/submit': async (req: Request, res: Response) => {
    await waitTime(500);
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },

  'POST /v1/parameters/indemnity/approve': async (req: Request, res: Response) => {
    await waitTime(500);
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },
};
