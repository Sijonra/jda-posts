import style from "./Select.module.scss";
import { FC } from "react";

interface SelectProps {
  className?: string;
  name: string;
  options: Array<string>;
  selectedAuthor: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({ name, options, className, selectedAuthor, onChange }) => {

  const updatedOptions = ["All", ...options];
  
  return (
    <div className={style["select-wrapper"] + " " + className}>
      <select value={selectedAuthor} onChange={onChange} className={style["select"]} name={name} id="">
        {updatedOptions.map((item) => {
          return <option  key={item} >{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
