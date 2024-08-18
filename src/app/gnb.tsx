"use client";
import {
  gnbRootList,
  isParentRoute,
  ParentRoute,
  ChildRoute,
  ROUTE,
  ROUTE_PATH,
  routes,
} from "@/routes";
import Link from "next/link";
import { useParams } from "next/navigation";
import classNames from "classnames";
const ParentGnbItem = ({
  route: { name, link, children },
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) => {
  const open = children.includes(currentPath);
  return (
    <li className={classNames("parent", `items-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((r) => {
          const route = routes[r];
          return (
            <GnbItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({
  route: { name, link },
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) => {
  return (
    <li className={classNames({ active: link === currentPath })}>
      <Link href={link}>{name}</Link>
    </li>
  );
};

const GnbItem = ({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) => {
  if (isParentRoute(route))
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  return <ChildGnbItem route={route} currentPath={currentPath} />;
};

export default function Gnb() {
  const { item = [] } = useParams();
  const current = ["", ...item].join("/") as ROUTE_PATH;
  return (
    <aside >
      <h1>
        UI 요소 모음
        <sub>Jack</sub>
      </h1>
      <ul >
        {gnbRootList.map((r) => (
          <GnbItem key={r.key} route={r} currentPath={current} />
        ))}
      </ul>
    </aside>
  );
}
