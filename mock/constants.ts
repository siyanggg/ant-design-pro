export const BR_TYPE_KEY = {
  ASBR: 'ASBR',
  ANSBR: 'ANSBR',
};

export const BR_TYPE_MAPPING = {
  ASBR: 'Account Standard BR',
  ANSBR: 'Account Non Standard BR',
};

export const ACTION_TYPE = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'MODIFY',
};

export const AM_ACCESS_TYPE = {
  Parameter: 'parameter',
  IDM: 'idm',
};

export const MANDATE_CUSTOMER_TYPE_KEY = {
  COPORATE: 'C',
  INDIVIDUAL: 'I',
};

export enum RESPONSE_ERROR_CODE {
  P1007 = 'P1007', // an existing task is pending checker to approve
  P1017 = 'P1017', // version already exist in the system
}
