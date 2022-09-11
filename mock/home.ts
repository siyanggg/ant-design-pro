import { v4 as uuidv4 } from 'uuid';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
 'POST /v1/parameters/task/search': async (req: Request, res: Response) => {
    await waitTime(500);
    res.send({
        status: 'Success',
        errorCode: null,
        description: null,
        data: {
            thingsNumber: {
                newTask: null,
                inProgress: null,
                pendingApproval: 3,
                pendingRework: 4,
                approved: 555,
                rejected: 666,
            },
            taskList: [
                {
                    date: '01/07/2022',
                parameterType: 'BR',
                taskId: 'BR301',
                requestId: 'BR220321560130',
                actionType: 301,
                maker: 'Huang Liang',
                checker: null,
                },
                {date: '02/07/2022',
                parameterType: 'BR',
                taskId: 'BR302',
                requestId: 'BR220321560130',
                actionType: 304,
                maker:'Mak',
                checker: 'Mary',
                },
                {date: '03/07/2022',
                parameterType: 'BR',
                taskId: 'BR303',
                requestId: 'BR220321560130',
                actionType: 305,
                maker:'Apple',
                checker: 'tom',
                },
            ],
            pageNumber: 1,
            pageSize: 10,
            totalNumber: 15,
        },
    });
 };
};
