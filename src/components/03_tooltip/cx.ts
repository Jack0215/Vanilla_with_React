import classNames from "classnames/bind"; //bind는 css모듈을 쓰기 위해 필요함, 바인드는 name을, sass에 있는 뒤에 hash값을 붙여줘서 다른곳에 영향이 없도록 함
import style from "./index.module.scss";

const cx = classNames.bind(style);

export default cx;
