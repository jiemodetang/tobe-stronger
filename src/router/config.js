import { Parent } from '../page/reactHooks-learn/parent'
import { Children } from '../page/reactHooks-learn/children'
import TestReudex  from '../page/test-redux'
import App from '../page/app'
 
export const config = [
    {
        path: "/",
        exact: true,
        component: App
      },
    {
        path: '/home',
        component: App,
        routes: [
            // {
            //     path: '/home/a',
            //     component: Parent,
            // },
        ]
    },
    {
        path: '/parent',
        component: Parent,
    },
    {
        path: '/children',
        component: Children,
    },
    {
        path: '/testRudex',
        component: TestReudex,
    }
]
