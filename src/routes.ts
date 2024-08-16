import Accordions from "./components/01_accordion";
export const routePaths = [
  "/",
  // "/test1",
  "/test2",
  "/test2/vanilla",
  "/test2/react",
  "/accordion",
] as const;

export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};

export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};

export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: ["/accordion", "/test2"],
  },
  // "/test1": {
  //   key: "/test1",
  //   link: "/test1",
  //   name: "테스트1",
  //   children: null,
  // },
  "/test2": {
    key: "/test2",
    link: "/test2/vanilla",
    name: "테스트2",
    children: ["/test2/vanilla", "/test2/react"],
  },
  "/test2/vanilla": {
    key: "/test2/vanilla",
    link: "/test2/vanilla",
    name: "Vanilla",
    children: null,
  },
  "/test2/react": {
    key: "/test2/react",
    link: "/test2/react",
    name: "react",
    children: null,
  },
  "/accordion": {
    key: "/accordion",
    link: "/accordion",
    name: "아코디언",
    children: Accordions,
  },
};

//GNB에서 컴포넌트가 Parent인지 Child인지 확인이 필요함
export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map((row) => {
  return routes[row];
});
