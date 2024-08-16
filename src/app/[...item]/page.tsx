"use client";
// import style from "./page.module.scss";

import { ROUTE_PATH, isParentRoute, routePaths, routes } from "@/routes";

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ["", ...item].join("/") as ROUTE_PATH;
  const route = routes[path];
  if (!routePaths.includes(path) || isParentRoute(route) || !route.children)
    return null;

  const Component = route.children;

  //path에 따라서 어떤 컴포넌트를 매칭 시켜줄지 가능
  return <Component />;
};

export default ItemPage;
