import { Index } from '../page/react-learn'
import { Children } from '../page/react-learn/children'
import { Parent } from '../page/react-learn/parent'
import TestReudex from '../page/test-redux'
import { Project_time_line } from "../page/project-time-line";
import TesthooksRudex from '../page/react-hooks-redux'
import ToBe_iframe from "../page/tobe-iframe";
export const config = [
  // {
  //   path: '/',
  //   component: Index,
  // },
  {
    path: '/react',
    component: Index,
    routes: [
    ]
  },
  {
    path: '/react_content/:id',
    component: Parent,
  },
  {
    path: '/project_time_line',
    component: Project_time_line,
  },
  {
    path: '/children',
    component: Children,
  },
  {
    path: '/iframe',
    component: ToBe_iframe,
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
