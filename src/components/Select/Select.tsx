import style from "./Select.module.scss";
import { FC } from "react";

interface SelectProps {
  className?: string;
  name: string;
  options: Array<string>;
}

const Select: FC<SelectProps> = ({ name, options, className }) => {
  return (
    <div className={style["select-wrapper"] + " " + className}>
      <select className={style["select"]} name={name} id="">
        {options.map((item) => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
