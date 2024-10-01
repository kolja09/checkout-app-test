import React, { useState, useRef } from "react";

// images
import arrowForSelect from "@/assets/arrowForSelect.svg";

//hooks
import { useClickOutside, useIsMobile } from "@/hooks";

//styles
import styles from "./SelectField.module.css";

interface Option {
  value: string | number;
  name: string;
}

interface SelectFieldProps {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  required?: boolean;
  errorMessage?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  required = false,
  errorMessage = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(768);

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleOptionClick = (optionValue: string | number) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.selectField} ref={selectRef}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div
        className={`${styles.selectWrapper} ${
          errorMessage ? styles.errorBorder : ""
        }`}
        onClick={handleToggle}
      >
        <div className={styles.selectedValue}>
          {options.find((option) => option.value === value)?.name ||
            "Select an option"}
        </div>
        <div className={styles.arrow}>
          <img src={arrowForSelect} alt="arrow" />
        </div>
      </div>
      {isOpen && (
        <>
          {isMobile ? (
            <>
              <div
                className={styles.overlay}
                onClick={() => setIsOpen(false)}
              ></div>
              <div className={styles.mobileModal}>
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={styles.option}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.name}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.optionsWrapper}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={styles.option}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};
