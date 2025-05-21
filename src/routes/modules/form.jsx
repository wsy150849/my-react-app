import { lazy } from "react";

const BasicForm = lazy(() => import("@/views/form/basicForm/index"));
const ValidateForm = lazy(() => import("@/views/form/validateForm/index"));
const DynamicForm = lazy(() => import("@/views/form/dynamicForm/index"));
const LayoutIndex = lazy(() => import("@/layouts/index"));

const formRoutes = [
    {
        element: <LayoutIndex />,
        children: [
            {
                path: "/form/basicForm",
                element: <BasicForm />,
                meta: {
                    title: "BasicForm",
					key: "basicForm"
                }
            },
            {
                path: "/form/validateForm",
                element: <ValidateForm />,
                meta: {
                    title: "ValidateForm",
					key: "validateForm"
                }
            },
            {
                path: "/form/dynamicForm",
                element: <DynamicForm />,
                meta: {
                    title: "DynamicForm",
					key: "dynamicForm"
                }
            },
        ],
    },
];

export default formRoutes;