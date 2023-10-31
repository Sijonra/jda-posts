import style from "./Checkbox.module.scss";
import { FC, useState } from "react";

interface InputProps {
  label?: string;
  isDisabled: boolean;
  isChecked: boolean;
}

const Checkbox: FC<InputProps> = ({ label, isDisabled, isChecked }) => {
  const [checked, setChecked] = useState(isChecked);
  const [disabled] = useState(isDisabled);
  const handleClick = () => (!isDisabled ? setChecked(!checked) : "");

  return (
    <label className={style["checkbox"]}>
      {label}
      <input type="checkbox" disabled={disabled} checked={checked} />
      <span className={style["checkbox__item"]} onClick={handleClick}></span>
    </label>
  );
};

export default Checkbox;
