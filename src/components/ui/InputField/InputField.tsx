import React, { ChangeEvent } from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  name: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label = "",
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  errorMessage = "",
  name,
  className,
}) => {
  return (
    <div className={styles.inputField}>
      {!!label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input}  ${className} ${
          errorMessage ? styles.errorInput : ""
        }`}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};
