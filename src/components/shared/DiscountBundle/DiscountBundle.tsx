import { useState } from "react";

import { CustomCheckbox, Title } from "@/components/ui";

import styles from "./DiscountBundle.module.css";

export const DiscountBundle = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.container}>
      <Title isRequired>Discount Bundle</Title>
      <div className={styles.discrountList}>
        <div className={styles.discountItem}>
          <CustomCheckbox
            label="SVA 545"
            onChange={handleCheckboxChange}
            checked={checked}
          />
          <span>+ $209.99</span>
        </div>
      </div>
    </div>
  );
};
