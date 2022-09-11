import { request } from 'umi';
import { useState } from 'react';

const BR_VERSION_LIST_STATUS = {
  NEED_TO_REQUEST: 'NEED_TO_REQUEST',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

const mandateBr = () => {
  const [brVersionList, setBrVersionList] = useState<
    { id: string; value: string; effectiveDate: string }[]
  >([]);
  const [brVersionStatus, setBrVersionStatus] = useState<string>(
    BR_VERSION_LIST_STATUS.NEED_TO_REQUEST,
  );
  const requestBrVersionList = () => {
    setBrVersionStatus(BR_VERSION_LIST_STATUS.PENDING);

    const data = {
      type: BR_TYPE_KEY.ASBR,
      version: '',
      startDate: '',
      endDate: '',
      pageNumber: 1,
      pageSize: 100,
      orderType: 'effectiveDate',
      orderBy: SORTING_BY_TYPE.ASC,
    };
    request(API.PARAMETERS_BR_SEARCH, { method: 'POST', data: data })
      .then(
        (
          res: BaseResponse & {
            data: {
              pageNumber: number;
              pageSize: number;
              totalNumber: number;
              boardResolutionVOList: {
                pendingApproval: boolean;
                templateId: string;
                type: string;
                version: string;
                description: string;
                effectiveDate: string;
              }[];
            };
          },
        ) => {
          console.log('requestBrVersionList, res:', res);
          if (res.status === 'Success') {
            setBrVersionStatus(BR_VERSION_LIST_STATUS.SUCCESS);
            setBrVersionList(
              res.data.boardResolutionVOList.map((item) => {
                return {
                  id: item.templateld,
                  value: item.version,
                  effectiveDate: item.effectiveDate,
                };
              }),
            );
          } else {
            setBrVersionStatus(BR_VERSION_LIST_STATUS.FAILURE);
          }
        },
      )
      .catch((error) => {
        console.log('requestBrVersionList, error: ', error);
        setBrVersionStatus(BR_VERSION_LIST_STATUS.FAILURE);
      });
  };
  return {
    BR_VERSION_LIST_STATUS,
    brVersionStatus,
    brVersionList,
    requestBrVersionList,
  };
};

export default mandateBr;
