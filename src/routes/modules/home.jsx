
import { lazy } from "react";

const Home = lazy(() => import("@/views/home/index"));
const LayoutIndex = lazy(() => import("@/layouts/index"));

const homeRoutes = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/home/index",
        element: <Home />,
        meta: {
            title: "Home",
        }
      },
    ],
  },
];

export default homeRoutes;