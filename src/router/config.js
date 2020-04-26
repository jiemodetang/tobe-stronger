import { Parent } from '../page/parent'
import { Children } from '../page/children'
import App from '../page/app'
 
export const config = [
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

    }
]
