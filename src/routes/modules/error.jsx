import { lazy } from 'react';
import lazyLoad from "@/routes/utils/lazyLoad";

const errorRouter = [
    {
        path: '/403',
        element: lazyLoad(lazy(() => import('@/views/errorMessage/403'))),
        meta: {
            requiresAuth: true,
            title: "403页面",
            key: "403"
        }
    },
    {
        path: '/404',
        element: lazyLoad(lazy(() => import('@/views/errorMessage/404'))),
        meta: {
            requiresAuth: true,
            title: "404页面",
            key: "404"
        }
    },
    {
        path: '/500',
        element: lazyLoad(lazy(() => import('@/views/errorMessage/500'))),
        meta: {
            requiresAuth: true,
            title: "500页面",
            key: "500"
        }
    }
]

export default errorRouter;