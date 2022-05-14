export default [
  {
    path: '/parameters',
    layout: false,
    routes: [
      {
        name: 'sub-roles',
        path: '/parameters/subRoles',
        component: './Parameters/SubRoles',
      },
      {
        name: 'indemnity',
        path: '/parameters/indemnity',
        component: './Parameters/Indemnity',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/proTable',
    layout: false,
    routes: [
      {
        name: 'proTable',
        path: '/proTable',
        component: './proTable',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/editableProTable',
    layout: false,
    routes: [
      {
        name: 'editableProTable',
        path: '/editableProTable',
        component: './editableProTable',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
