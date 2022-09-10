export default [
  {
    path: '/home',
    name: 'home',
    icon: 'smile',
    component: './home/index',
  },
  {
    path: '/mandate',
    icon: 'smile',
    flatMenu: true,
    component: './mandate/index',
    routes: [
      {
        path: '/mandate/coporate-details',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/CorporateDetails/index',
        routes: [
          {
            path: '/mandate/coporate-details/create',
            name: 'mandate.coporate-details.create',
            icon: 'smile',
            component: './mandate/CorporateDetails/Create/index',
          },
          {
            path: '/mandate/coporate-details/details',
            name: 'mandate.coporate-details.details',
            icon: 'smile',
            component: './mandate/CorporateDetails/Details/index',
          },
        ],
      },
      {
        path: '/mandate/connected-persons',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/ConnectedPersons/index',
        routes: [
          {
            path: '/mandate/connected-persons/summary',
            icon: 'smile',
            component: './mandate/ConnectedPersons/Summary/index',
          },
          {
            path: '/mandate/connected-persons/details',
            icon: 'smile',
            component: './mandate/ConnectedPersons/Details/index',
          },
        ],
      },
      {
        path: '/mandate/br',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/BoardResolutions/index',
        routes: [
          {
            path: '/mandate/br/summary',
            icon: 'smile',
            component: './mandate/BoardResolutions/Summary/index',
          },
        ],
      },
      {
        path: '/mandate/assc',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/ASSigningConditions/index',
      },
      {
        path: '/mandate/m&a',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/MemorandumArticles/index',
      },
      {
        path: '/mandate/indemnity',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/Indemnity/index',
      },
      {
        path: '/mandate/common-usage',
        icon: 'smile',
        flatMenu: true,
        component: './mandate/CommonUsage/index',
      },
    ],
  },
  {
    path: '/parameters',
    name: 'parameters',
    icon: 'smile',
    flatMenu: true,
    component: './parameters',
    routes: [
      {
        path: '/parameters/br',
        component: './parameters/BoardResolutions',
        routes: [
          {
            path: '/parameters/br/inquiry',
            component: './parameters/BoardResolutions/pages/Inquiry',
          },
          {
            path: '/parameters/br/add',
            component: './parameters/BoardResolutions/pages/Add',
          },
          {
            path: '/parameters/br/details',
            component: './parameters/BoardResolutions/pages/Details',
          },
        ],
      },
      {
        path: '/parameters/indemnity',
        component: './parameters/Indemnity',
      },
      {
        path: '/parameters/roles',
        component: './parameters/SubRoles',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/accessMatrix',
    name: 'access-matrix',
    icon: 'smile',
    flatMenu: true,
    component: './AccessMatrix',
  },
  {
    path: '/user',
    layOut: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        path: '/user/logout',
        component: './user/Logout',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
