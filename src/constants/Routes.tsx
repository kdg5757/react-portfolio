import { lazy } from "react";
import { RouteObject } from "react-router-dom";
 
import { RoutePath } from "./RoutePath";

const Layout = lazy(() => import('../components/Layout'));
const TopPage = lazy(() => import('../pages/TopPage/TopPage'));

const TopPageRoute: RouteObject = {
  path: RoutePath.TOP,
  element: <TopPage />,
  index: true
};

export const MainRoute: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      TopPageRoute
    ]
  }
];
