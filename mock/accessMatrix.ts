import { v4 as uuidv4 } from 'uuid';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const ACTION_TYPE = {
  QUERY: 'QUERY',
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'MODIFY',
};

const TASK_STATUS = {
  PENDING_APPROVAL: 301,
  PENDING_REWORK: 304,
  REJECT: 305,
  APPROVED: 306,
};

const inquiryData = [
  {
    locked: false,
    id: uuidv4(),
    department: 'Account Services',
    team: 'Parameters',
    userName: 'Billy Beng',
    userId: 'A123401B',
    accessType: AM_ACCESS_TYPE.Parameter,
    oldInquiry: false,
    inquiry: false,
    oldMaker: false,
    maker: false,
    oldchecker: false,
    checker: false,
    actionType: '',
  },
  {
    locked: false,
    id: uuidv4(),
    department: 'Customer Services',
    team: 'Parameters',
    userName: 'Ian Ii',
    userId: 'A123401B',
    accessType: AM_ACCESS_TYPE.Parameter,
    oldInquiry: true,
    inquiry: true,
    oldMaker: true,
    maker: true,
    oldchecker: true,
    checker: true,
    actionType: '',
  },
];

const makerData = inquiryData;

const checkerData = [
  {
    locked: false,
    id: uuidv4(),
    department: 'Account Services',
    team: 'Parameters',
    userName: 'Billy Beng',
    userId: 'A123401B',
    accessType: AM_ACCESS_TYPE.Parameter,
    oldInquiry: false,
    inquiry: false,
    oldMaker: false,
    maker: false,
    oldchecker: false,
    checker: false,
    actionType: ACTION_TYPE.ADD,
  },
  {
    locked: false,
    id: uuidv4(),
    department: 'Customer Services',
    team: 'Parameters',
    userName: 'Ian Ii',
    userId: 'A123401B',
    accessType: AM_ACCESS_TYPE.Parameter,
    oldInquiry: true,
    inquiry: true,
    oldMaker: true,
    maker: true,
    oldchecker: true,
    checker: true,
    actionType: ACTION_TYPE.UPDATE,
  },
];

const reworkData = checkerData;
const rejectData = checkerData;

export const getDetailsDatabyTaskId = (taskId: string) => {
  if (taskId) {
    switch (taskId) {
      case 'accessMatrixDBRBBB1005220000':
        return checkerData;
      case 'accessMatrixDBRBBB1005220001':
        return reworkData;
      case 'accessMatrixDBRBBB1005220002':
        return approveData;
      case 'accessMatrixDBRBBB1005220003':
        return rejectData;
      default:
        console, log('no data, wrong taskId');
        return [];
    }
  } else {
    return makerData;
  }
};

export const getTaskStatusByTaskId = (taskId: string) => {
  if (taskId) {
    switch (taskId) {
      case 'accessMatrixDBRBBB1005220000':
        return TASK_STATUS.PENDING_APPROVAL;
      case 'accessMatrixDBRBBB1005220001':
        return TASK_STATUS.PENDING_REWORK;
      case 'accessMatrixDBRBBB1005220002':
        return TASK_STATUS.APPROVED;
      case 'accessMatrixDBRBBB1005220003':
        return TASK_STATUS.REJECT;
      default:
        console.log('no taskStatus, wrong taskId');
        return -1;
    }
  } else {
    return -1;
  }
};

export const getReasonByTaskId = (taskId: string) => {
  if (taskId) {
    switch (taskId) {
      case 'accessMatrixDBRBBB1005220000':
        return '';
      case 'accessMatrixDBRBBB1005220001':
        return 'You have enter an incorrect access matrix !! Please rework.';
      case 'accessMatrixDBRBBB1005220002':
        return ';';
      case 'accessMatrixDBRBBB1005220003':
        return 'Your request is rejected!';
      default:
        console.log('no reason, wrong taskId');
        return '';
    }
  } else {
    return '';
  }
};

export default {
  'POST /v1/user-access/query': async (req: Request, res: Response) => {
    await waitTime(1000);
    res.send({
      status: 'Success',
      errorCode: null,
      data: {
        pageNumber: 1,
        pageSize: 10,
        totalNumber: 100,
        userAccessVOList: inquiryData,
      },
    });
  },

  'GET /v1/user-access/retrieve/userLdapInfo': async (req: Request, res: Response) => {
    await waitTime(500);
    const mockStatus = 'succss';
    // const mockStatus = "400";
    // const mockStatus = '200witherror';
    if (mockStatus === 'sucess') {
      res.send({
        status: 'Success',
        errorCode: null,
        data: {
          externalId: 1,
          department: 'Account Services',
          userName: 'Mike',
        },
      });
    } else if (mockStatus === '400') {
      res.statusCode = 400;
      res.send({});
    } else if (mockStatus === '200witherror') {
      res.send({
        status: 'Fail',
        errorCode: '5000',
        description: 'Base Service exception',
        data: 'Index 0 out of bounds for length 0',
      });
    }
  },

  'POST /v1/user-access/submit': async (req: Request, res: Response) => {
    await waitTime(500);
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },

  'POST /v1/accessMatrix/task/details': async (req: Request, res: Response) => {
    console.log('POST /v1/accessMatrix/task/details: ', req.body.taskId);
    if (req.body.taskId.startsWith('accessMatrix')) {
      res.statusCode = 200;
      res.send({
        status: 'Success',
        errorCode: '',
        description: '',
        data: {
          dataDetails: getDetailsDataByTaskId(req.body.taskId),
          taskDetails: {
            taskstatus: getTaskStatusByTaskId(req.body.taskId),
            maker: {
              id: 'a5139686,',
            },
            reason: getReasonByTaskId(req.body, taskId),
          },
        },
      });
    }
  },

  'POST /v1/parameters/task/clarify': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: '',
    });
  },

  'POST /v1/parameters/task/reject': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: '',
    });
  },

  'POST /v1/parameters/task/rework': async (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: '',
    });
  },

  'POST /v1/user-access/approve': async (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: '',
    });
  },

  //#TODO
  'POST /v1/user-access/clarify': async (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: '',
    });
  },
};
