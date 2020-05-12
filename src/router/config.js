import { Parent } from '../page/reactHooks-learn/parent'
import { Children } from '../page/reactHooks-learn/children'
import TestReudex  from '../page/test-redux'
import TesthooksRudex  from '../page/react-hooks-redux'

import App from '../page/app'
import Loadable from 'react-loadable';
import React from 'react';
const loadingComponent = ({ error, pastDelay }) => {
    if (error) {
      return <div>Error!</div>;
    } else if (pastDelay) {
      // return <div>Loading...</div>;
      return <div />;
    } else {
      return null;
    }
  };

export const config = [
    {
        path: "/",
        exact: true,
        component: App
      },
    {
        path: '/home',
        exact: true,
        component: Parent,
    },
    // {
    //     path: '/react-hook',
    //     exact: true,
    //     component:  Loadable({
    //         loader: () => import('../page/tobe-right'),
    //         loading: loadingComponent,
    //         delay: 300,
    //       }),
    // },
    // {
    //     path: '/children',
    //     component: Children,
    // },
    {
        path: '/testRudex',
        component: TestReudex,
    },
    {
      path: '/testhooksRudex',
      component: TesthooksRudex,
  }
]
