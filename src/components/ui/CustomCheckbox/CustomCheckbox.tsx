import React from "react";

import styles from "./CustomCheckbox.module.css";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <span className={styles.customCheckbox}></span>
      {label}
    </label>
  );
};
