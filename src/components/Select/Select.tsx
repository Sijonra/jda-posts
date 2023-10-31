import style from "./Select.module.scss";
import { FC } from "react";

interface SelectProps {
  name: string;
  options: Array<string>;
}

const Select: FC<SelectProps> = ({ name, options }) => {
  return (
    <div className={style["select-wrapper"]}>
      <select className={style["select"]} name={name} id="">
        {options.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
