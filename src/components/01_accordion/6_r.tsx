import { useEffect, useRef, useState } from "react";
import data from "./data";
import cx from "./cx";

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => {
  const descRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener("beforematch", toggle);
    }
    return () => {
      if (descRef.current) {
        descRef.current.addEventListener("beforematch", toggle);
      }
    };
  }, [toggle]);

  return (
    <li className={cx("item", "item3", { current })} key={id}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div
        className={cx("description")}
        ref={descRef}
        HIDDEN={current ? undefined : "until-found"}
      >
        {description}
      </div>
    </li>
  );
};

const Accordion6 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toogleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h3>
        #6. React<sub>ctrl+F 검색</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((item) => (
          <AccordionItem
            {...item}
            key={item.id}
            current={currentId === item.id}
            toggle={toogleItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion6;
