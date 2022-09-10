// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  base: '/',
  publicPath: '/',
  define: {
    APP_ENV_TEST_API_PATH: '/test/api/path/configdevts',
    APP_ENV_MS_CUSTOMER_MANDATE_HOST: '',
    APP_ENV_MS_STAFF_SECURITY_HOST: '',
    APP_ENV_MS_CUSTOMER_PROFILE_HOST: '',
    APP_ENV_MS_ACCOUNTS_CORP_HOST: '',

    APP_ENV_REQUEST_LOGIN: '/saml2/authenticate/samldc',
    APP_ENV_REFRESH_TOKEN: '/v1/staff-security/service/sso/token/refresh',
    APP_ENV_LOGIN_PERMISSION_LIST: '/v1/user-access/user/permissionList',

    APP_ENV_PARAMETERS_TASKS_DETAILS: '/v1/parameters/task/details',
    APP_ENV_PARAMETERS_TASKS_SUBMIT: '/v1/parameters/task/clarify',
    APP_ENV_PARAMETERS_TASKS_REJECT: '/v1/parameters/task/reject',
    APP_ENV_PARAMETERS_TASKS_REWORK: '/v1/parameters/task/rework',

    APP_ENV_PARAMETERS_BR_SEARCH: '/v1/parameters/br/search',
    APP_ENV_PARAMETERS_BR_DETAILS: '/v1/parameters/br/details',
    APP_ENV_PARAMETERS_BR_TEMPLATE: '/v1/parameters/br/template',
    APP_ENV_PARAMETERS_BR_SUBMIT: '/v1/parameters/br/submit',
    APP_ENV_PARAMETERS_BR_TASKS_APPROVE: '/v1/parameters/br/approve',
    APP_ENV_PARAMETERS_BR_CLARIFY: '/v1/parameters/br/clarify',

    APP_ENV_PARAMETERS_INDEMNITY_INQUIRY: '/v1/parameters/indemnity/query',
    APP_ENV_PARAMETERS__INDEMNITY_SUBMIT: '/v1/parameters/indemnity/submit',
    APP_ENV_PARAMETERS_INDEMNITY_TASKS_APPROVE: '/v1/parameters/indemnity/approve',

    APP_ENV_PARAMETERS_SUB_ROLES_INQUIRY: '/v1/parameters/subroles/query',
    APP_ENV_PARAMETERS_SUB_ROLES_SUBMIT: '/v1/parameters/subroles/submit',
    APP_ENV_PARAMETERS_SUB_ROLES_TASKS_APPROVE: '/v1/parameters/subroles/approve',

    APP_NV_ACCESSMATRIX_INQUIRY: '/v1/user-access/query',
    APP_ENV_ACCESSMATRIX_USERINFO: '/v1/user-access/retrieve/userLdapInfo',
    APP_ENV_ACCESSMATRIX_SUBMIT: '/v1/user-access/submit',
    APP_NV_ACCESSMATRIX_TASKS_APPROVE: '/v1/user-access/approve',
    APP_ENV_ACCESSMATRIX_CLARIFY: '/v1/user-access/clarify',

    //home tasks
    APP_ENV_PARAMETERS_TASKS_SEARCH: '/v1/parameters/task/search',

    // mandate
    APP_ENV_MANDATE_CUSTOMERS_RETRIEVE: '/v1/admin/customers/retrieve',
    APP_ENV_MANDATE_ACCOUNTS_INQUIRY: '/v2/accounts/inquiry',
    APP_ENV_MANDATE_CALLBACK_WAIVER_RETRIEVE: '/v1/corporates/callback-waiver/retrieve',

    APP_ENV_MANDATE_CONNECTED_PERSONS_INQUIRY: '/v1/corporates/connected-persons/search',

    APP_ENV_MANDATE_MEMORANDDUM_ARTICLES_INQUIRY: '/v1/corporates/memorandum-articles/search',
    APP_ENV_MANDATE_MEMORANDDUM_ARTICLES_SAVE: '/v1/corporates/memorandum-articles/save',
  },
});
