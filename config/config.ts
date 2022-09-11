// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  access: {},
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  base: '/digital/web/sg/mfe-dbr-stitcher',
  publicPath: 'MFE_DBR_CUSTOMERMANDATE_PUBLIC_PATH/',
  // Fast Refresh 热更新
  fastRefresh: {},
  nodeModulesTransform: { type: 'none' },
  mfsu: {},
  devtool: 'source-map',
  webpack5: {},
  outputPath: 'release',
  define: {
    APP_ENV_TEST_API_PATH: 'APP_ENV_TEST_API_PATH',
    APP_ENV_MS_CUSTOMER_MANDATE_HOST: 'APP_ENV_MS_CUSTOMER_MANDATE_HOST',
    APP_ENV_MS_STAFF_SECURITY_HOST: 'APP_ENV_MS_STAFF_SECURITY_HOST',
    APP_ENV_MS_CUSTOMER_PROFILE_HOST: 'APP_ENV_MS_CUSTOMER_PROFILE_HOST',
    APP_ENV_MS_ACCOUNTS_CORP_HOST: 'APP_ENV_MS_ACCOUNTS_CORP_HOST',

    APP_ENV_REQUEST_LOGIN: 'APP_ENV_REQUEST_LOGIN',
    APP_ENV_REFRESH_TOKEN: 'APP_ENV_REFRESH_TOKEN',
    // APP_ENV_LOGIN_PERMISSION_LIST:'APP_ENV_LOGIN_PERMISSION_LIST',
    APP_ENV_LOGIN_PERMISSION_LIST: '/v1/user-access/user/permissionList',

    APP_ENV_PARAMETERS_TASKS_DETAILS: 'APP_ENV_PARAMETERS_TASKS_DETAILS',
    APP_ENV_PARAMETERS_TASKS_SUBMIT: 'APP_ENV_PARAMETERS_TASKS_SUBMIT',
    APP_ENV_PARAMETERS_TASKS_REJECT: 'APP_ENV_PARAMETERS_TASKS_REJECT',
    APP_ENV_PARAMETERS_TASKS_REWORK: 'APP_ENV_PARAMETERS_TASKS_REWORK',

    APP_ENV_PARAMETERS_BR_SEARCH: 'APP_ENV_PARAMETERS_BR_SEARCH',
    APP_ENV_PARAMETERS_BR_DETAILS: 'APP_ENV_PARAMETERS_BR_DETAILS',
    // APP_ENV_PARAMETERS_BR_TEMPLATE:'APP_ENV_PARAMETERS_BR_TEMPLATE',
    APP_ENV_PARAMETERS_BR_TEMPLATE: '/v1/parameters/br/template',
    APP_ENV_PARAMETERS_BR_SUBMIT: 'APP_ENV_PARAMETERS_BR_SUBMIT',
    APP_ENV_PARAMETERS_BR_TASKS_APPROVE: 'APP_ENV_PARAMETERS_BR_TASKS_APPROVE',
    // APP_ENV_PARAMETERS_BR_CLARIFY:'APP_ENV_PARAMETERS_BR_CLARIFY',
    APP_ENV_PARAMETERS_BR_CLARIFY: '/v1/parameters/br/clarify',

    APP_ENV_PARAMETERS_INDEMNITY_INQUIRY: 'APP_ENV_PARAMETERS_INDEMNITY_INQUIRY',
    APP_ENV_PARAMETERS_INDEMNITY_SUBMIT: 'APP_ENV_PARAMETERS_INDEMNITY_SUBMIT',
    APP_ENV_PARAMETERS_INDEMNITY_TASKS_APPROVE: 'APP_ENV_PARAMETERS_INDEMNITY_TASKS_APPROVE',

    APP_ENV_PARAMETERS_SUB_ROLES_INQUIRY: 'APP_ENV_PARAMETERS_SUB_ROLES_INQUIRY',
    APP_ENV_PARAMETERS_SUB_ROLES_SUBMIT: 'APP_ENV_PARAMETERS_SUB_ROLES_SUBMIT',
    APP_ENV_PARAMETERS_SUB_ROLES_TASKS_APPROVE: 'APP_ENV_PARAMETERS_SUB_ROLES_TASKS_APPROVE',

    APP_ENV_ACCESSMATRIX_INQUIRY: 'APP_ENV_ACCESSMATRIX_INQUIRY',
    // APP_ENV_ACCESSMATRIX_USERINFO:'APP_ENV_ACCESSMATRIX_USERINFO',
    APP_ENV_ACCESSMATRIX_USERINFO: '/v1/user-access/retrieve/userLdapInfo',
    APP_ENV_ACCESSMATRIX_SUBMIT: 'APP_ENV_ACCESSMATRIX_SUBMIT',
    APP_ENV_ACCESSMATRIX_TASKS_APPROVE: 'APP_ENV_ACCESSMATRIX_TASKS_APPROVE',
    // APP_ENV_ACCESSMATRIX_CLARIFY:'APP_ENV_ACCESSMATRIX_CLARIFY',
    APP_ENV_ACCESSMATRIX_CLARIFY: '/v1/user-access/clarify',

    //_home_tasks
    APP_ENV_PARAMETERS_TASKS_SEARCH: 'APP_ENV_PARAMETERS_TASKS_SEARCH',

    //_mandate
    APP_ENV_MANDATE_CUSTOMERS_RETRIEVE: 'APP_ENV_MANDATE_CUSTOMERS_RETRIEVE',
    APP_ENV_MANDATE_ACCOUNTS_INQUIRY: 'APP_ENV_MANDATE_ACCOUNTS_INQUIRY', //accounts
    APP_ENV_MANDATE_CALLBACK_WAIVER_RETRIEVE: 'APP_ENV_MANDATE_CALLBACK_WAIVER_RETRIEVE',

    APP_ENV_MANDATE_CONNECT_PERSONS_INQUIRY: '/v1/corporates/connected-persons/search',

    APP_ENV_MANDATE_MEMORANDDUM_ARTICLES_INQUIRY: '/v1/corporates/memorandum-articles/search',
    APP_ENV_MANDATE_MEMORANDDUM_ARTICLES_SAVE: '/v1/corporates/memorandum-articles/save',
  },
  // qiankun: {
  //   slave: {},
  // },
});
