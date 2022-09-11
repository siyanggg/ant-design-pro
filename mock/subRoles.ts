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
  { id: uuidv4(), oldValue: '', value: 'SubRoles 1', actionType: '' },
  { id: uuidv4(), oldValue: '', value: 'SubRoles 2', actionType: '' },
  { id: uuidv4(), oldValue: '', value: 'SubRoles 3', actionType: '' },
  { id: uuidv4(), oldValue: '', value: 'SubRoles 4', actionType: '' },
];

const makerData = inquiryData;

const checkerData = [
  { id: uuidv4(), oldValue: 'SubRoles 1', value: 'SubRoles 1', actionType: ACTION_TYPE.QUERY },
  { id: uuidv4(), oldValue: '2', value: 'SubRoles 2', actionType: ACTION_TYPE.UPDATE },
  { id: uuidv4(), oldValue: '3', value: 'SubRoles 3', actionType: ACTION_TYPE.UPDATE },
  { id: uuidv4(), oldValue: '4', value: 'SubRoles 4', actionType: ACTION_TYPE.UPDATE },
  { id: uuidv4(), oldValue: '5', value: 'SubRoles 5', actionType: ACTION_TYPE.DELETE },
];

const reworkData = checkerData;
const approveData = checkerData;
const rejectData = checkerData;

export const getDetailsDatabyTaskId = (taskId: string) => {
  if (taskId) {
    switch (taskId) {
      case 'subRolesDBRBBB1005220000':
        return checkerData;
      case 'subRolesDBRBBB1005220001':
        return reworkData;
      case 'subRolesDBRBBB1005220002':
        return approveData;
      case 'subRolesDBRBBB1005220003':
        return rejectData;
      case 'indemnityDBRBBB1005220000':
        return checkerData;
      case 'indemnityDBRBBB1005220001':
        return reworkData;
      case 'indemnityDBRBBB1005220002':
        return approveData;
      case 'indemnityDBRBBB1005220003':
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
      case 'subRolesDBRBBB1005220000':
        return TASK_STATUS.PENDING_APPROVAL;
      case 'subRolesDBRBBB1005220001':
        return TASK_STATUS.PENDING_REWORK;
      case 'subRolesDBRBBB1005220002':
        return TASK_STATUS.APPROVED;
      case 'subRolesDBRBBB1005220003':
        return TASK_STATUS.REJECT;
      case 'indemnityDBRBBB1005220000':
        return TASK_STATUS.PENDING_APPROVAL;
      case 'indemnityDBRBBB1005220001':
        return TASK_STATUS.PENDING_REWORK;
      case 'indemnityDBRBBB1005220002':
        return TASK_STATUS.APPROVED;
      case 'indemnityDBRBBB1005220003':
        return TASK_STATUS.REJECT;
      case 'br/detailsDBRBBB1005220000':
        return TASK_STATUS.PENDING_APPROVAL;
      case 'br/detailsDBRBBB1005220001':
        return TASK_STATUS.PENDING_REWORK;
      case 'br/detailsDBRBBB1005220002':
        return TASK_STATUS.APPROVED;
      case 'br/detailsDBRBBB1005220003':
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
      case 'subRolesDBRBBB1005220000':
        return '';
      case 'subRolesDBRBBB1005220001':
        return 'You have enter an incorrect subRole !! Please rework.';
      case 'subRolesDBRBBB1005220002':
        return ';';
      case 'subRolesDBRBBB1005220003':
        return 'Your subRole request is rejected!';
      case 'indemnityDBRBBB1005220000':
        return '';
      case 'indemnityDBRBBB1005220001':
        return 'You have enter an incorrect indemnity !! Please rework.';
      case 'indemnityDBRBBB1005220002':
        return ';';
      case 'indemnityDBRBBB1005220003':
        return 'Your indemnity request is rejected!';
      default:
        console.log('no reason, wrong taskId');
        return '';
    }
  } else {
    return '';
  }
};

// const getBrDataByTaskId = (taskId: string) => {
//   let reason = '';
//   if (taskId === 'BR301') {
//   } else if (taskId === 'BR304') {
//     reason = ' You are not permitted to do this request --- rework';
//   } else if (taskId === 'BR305') {
//     reason = ' You are not permitted to do this request --- reject';
//   } else if (taskId === 'BR306') {
//   }
//   return {
//     dateDetails: {
//         {
//             type: BR_TYPE_KEY.ASBR,
//             version: '0708',
//             description: 'Bank standard Account BR introduced on 26 Jun 2022',
//             effectiveDate: '2022-06-28',
//             brModifyActionType: ACTION_TYPE.UPDATE,
//         brFunctionVOList: [
//           {
//             functionId: uuidv4(),
//             functionDescription: 'Open/Close AC',
//             oldValue: true,
//             value: false,
//           },
//           {
//             functionId: uuidv4(),
//             functionDescription: 'Open/Close AB',
//             oldValue: true,
//             value: true,
//           },
//           {
//             functionId: uuidv4(),
//             functionDescription: 'Open/Close AC (Non MCA)',
//             oldValue: true,
//             value: true,
//           },
//           {
//             functionId: uuidv4(),
//             functionDescription: 'Open/Close AB (Non MCA)',
//             oldvalue: false,
//             value: false,
//           },
//           {
//             functionId: uuidv4(),
//             functionDescription: 'Appoint',
//             oldvalue: false,
//             value: false,
//             brScopeVOList: [
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Appointment of Authorised Users of the respective AAA.',
//                 oldValue: false,
//                 value: false,
//               },
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Appointment of AS.',
//                 oldValue: false,
//                 value: false,
//               },
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Appointment of AP.',
//                 oldValue: false,
//                 value: false,
//               },
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Custodial Services.',
//                 oldValue: false,
//                 value: false,
//               },
//             ],
//           },
//           {
//             functionId: uuidv4(),
//             functionDescription: 'Apply',
//             oldvalue: false,
//             value: false,
//             brScopeVOList: [
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Appointment of Authorised Users of the respective AAA.',
//                 oldValue: false,
//                 value: false,
//               },
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Appointment of AS.',
//                 oldValue: false,
//                 value: false,
//               },
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Appointment of AP.',
//                 oldValue: false,
//                 value: false,
//               },
//               {
//                 scopeId: uuidv4(),
//                 scopeDescription: 'Custodial Services.',
//                 oldValue: false,
//                 value: false,
//               },
//             ],
//           },
//         ],
//       },
//       'taskDetails': {
//         'maker': {
//             id: 'A51239686',
//             name: 'Liu Kang Ling',
//             type: "A2",
//         },
//         version: "0708",
//         requestId: "BR220301234",
//         taskStatus: Number(taskId.replace('BR', '')),
//          reason: reason,
//       }
//     },
//   };
// };

export default {
  'GET /v1/parameters/subRoles/query': async (req: Request, res: Response) => {
    await waitTime(500);
    res.send({
      status: 'Success',
      errorCode: null,
      data: {
        pendingApproval: false,
        parameterListWithType: [
          { id: uuidv4(), oldValue: '', value: 'SubRoles 1', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'SubRoles 2', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'SubRoles 3', actionType: '' },
          { id: uuidv4(), oldValue: '', value: 'SubRoles 4', actionType: '' },
        ],
      },
    });
  },
};

  'POST /v1/parameters/subRoles/submit': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },

    'POST /v1/parameters/task/details': async (req: Request, res: Response) => {
    console.log('POST /v1/parameters/task/details: ', req.body.taskId);
    if (req.body.taskId.startsWith('subRoles')) {
      res.statusCode = 200;
      res.send({
        status: 'Success',
        errorCode: '',
        description: '',
        data: {
          dataDetails: getDetailsDataByTaskId(req.body.taskId),
          taskDetails: {
            taskstatus: getTaskStatusByTaskId(req.body.taskId),
            requestId: 'mockSR2324902390534',
            maker: {
              id: 'A5139686,',
            },
            reason: getReasonByTaskId(req.body, taskId),
          },
        },
      });
    } 
    else if (req.body.taskId.startsWith('indemnity')) {
      res.statusCode = 200;
      res.send({
        status: 'Success',
        errorCode: '',
        description: '',
        data: {
          dataDetails: getDetailsDataByTaskId(req.body.taskId),
          taskDetails: {
            taskstatus: getTaskStatusByTaskId(req.body.taskId),
            requestId: 'mockID2324902390534',
            maker: {
              id: 'A5139686,',
            },
            reason: getReasonByTaskId(req.body, taskId),
          },
        },
      });
    } 
    else if (req.body.taskId.startsWith('BR')) {
      res.statusCode = 200;
      res.send({
        status: 'Success',
        errorCode: '',
        description: '',
        data: getBrDataByTaskId(req.body.taskId),
      });
    } 
    else if (req.body.taskId.startsWith('accessMatrix')) {
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
              id: 'A5139686,',
            },
            reason: getAmReasonByTaskId(req.body, taskId),
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
      errorCode: null,
    });
  },

  'POST /v1/parameters/task/reject': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },

  'POST /v1/parameters/task/rework': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },

  'POST /v1/parameters/task/approve': async (req: Request, res: Response) => {
    await waitTime(500);
    res.statusCode = 200;
    res.send({
      status: 'Success',
      errorCode: null,
    });
  },