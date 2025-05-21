import { lazy } from 'react';
import lazyLoad from "@/routes/utils/lazyLoad";

const LayoutIndex = lazy(() => import("@/layouts/index"));

const linkRouter = [
    {
        element: <LayoutIndex />,
		meta: {
			title: "外部链接"
		},
        children: [
            {
                path: "/link/gitee",
                element: lazyLoad(lazy(() => import("@/views/link/gitee/index"))),
                meta: {
                    requiresAuth: true,
                    title: "Gitee 仓库",
                    key: "gitee"
                }
            },
            {
                path: "/link/github",
                element: lazyLoad(lazy(() => import("@/views/link/github/index"))),
                meta: {
                    requiresAuth: true,
                    title: "GitHub 仓库",
                    key: "github"
                }
            },
            {
                path: "/link/juejin",
                element: lazyLoad(lazy(() => import("@/views/link/juejin/index"))),
                meta: {
                    requiresAuth: true,
                    title: "掘金文档",
                    key: "juejin"
                }
            },
            {
                path: "/link/myBlog",
                element: lazyLoad(lazy(() => import("@/views/link/myBlog/index"))),
                meta: {
                    requiresAuth: true,
                    title: "个人博客",
                    key: "myBlog"
                }
            }
        ]
    }
]

export default linkRouter;