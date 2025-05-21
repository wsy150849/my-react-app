import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";

const Login = lazy(() => import("@/views/Login"));


// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.jsx', { eager: true });

// * 处理路由
export const routerArray = [];
Object.keys(metaRouters).forEach(item => {
    Object.keys(metaRouters[item]).forEach((key) => {
        routerArray.push(...metaRouters[item][key]);
    });
});


const routes = [
    { path: "/", element: <Navigate to="/login" /> },
    {
        path: "/login",
        element: <Login />,
        meta: {
            title: "Login Page"
        }
    },
    ...routerArray
]


const Router = () => {
    return useRoutes(routes);
};

export default Router;