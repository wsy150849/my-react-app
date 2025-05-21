import { lazy } from "react";

const UseHooks = lazy(() => import("@/views/proTable/useHooks/index"));
const LayoutIndex = lazy(() => import("@/layouts/index"));

const proTableRouter = [
    {
        element: <LayoutIndex />,
        meta:{
            title: "超级表格"
        },
        children: [
            {
                path: "/proTable/useHooks",
                element: <UseHooks />,
                meta:{
                    title: "使用 Hooks"
                }
            }
        ]
    }
]
export default proTableRouter;