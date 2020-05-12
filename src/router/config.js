import { Index } from '../page/reactHooks-learn'
import { Children } from '../page/reactHooks-learn/children'
import TestReudex from '../page/test-redux'
import { Project_time_line } from "../page/project-time-line";
import TesthooksRudex from '../page/react-hooks-redux'
export const config = [
  {
    path: '/',
    component: Index,
  },

  {
    path: '/home',
    exact: true,
    component: Index,
    routes: [
      {
        path: '/project_time_line',
        component: Project_time_line,
      },
    ]
  },

  // {
  //   path: '/react_hook',
  //   exact: true,
  //   component: Index,
  //   routes: [
  //   ]

  // },
  {
    path: '/children',
    component: Children,
  },
  {
    path: '/project_time_line',
    component: Project_time_line,
  },
  {
    path: '/testRudex',
    component: TestReudex,
  },
  {
    path: '/testhooksRudex',
    component: TesthooksRudex,
  }
]
