
import { lazy } from "react";

const DataScreen = lazy(() => import("@/views/DataScreen/index"));
const LayoutIndex = lazy(() => import("@/layouts/index"));

const dataScreenRoutes = [
  {
    element: <LayoutIndex />,
    // children: [
    //   {
        path: "/dataScreen/index",
        element: <DataScreen />,
        meta: {
            title: "DataScreen",
        }
    //   },
    // ],
  },
];

export default dataScreenRoutes;