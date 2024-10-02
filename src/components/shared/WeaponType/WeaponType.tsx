import { useState } from "react";

import { CustomCheckbox, SelectField, Title } from "@/components/ui";

import styles from "./WeaponType.module.css";

interface Weapon {
  name: string;
  price: string;
}

export const WeaponType = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [checkedWeapons, setCheckedWeapons] = useState<string[]>([]);

  const weapons: Weapon[] = [
    { name: "SVA 545", price: "$6.99" },
    { name: "MTZ-556", price: "$6.99" },
    { name: "Holger 556", price: "$6.99" },
    { name: "MCW", price: "$6.99" },
    { name: "DG-56", price: "$6.99" },
    { name: "FR 5.56", price: "$6.99" },
    { name: "RAM-7", price: "$6.99" },
    { name: "BP50", price: "$6.99" },
    { name: "BAL-27", price: "$6.99" },
    { name: "STG44", price: "$6.99" },
  ];

  const handleSelect = (value: string | number) => {
    setSelectedOption(value as string);
  };

  const handleCheckboxChange = (weapon: string) => {
    setCheckedWeapons((prevState) =>
      prevState.includes(weapon)
        ? prevState.filter((item) => item !== weapon)
        : [...prevState, weapon]
    );
  };

  return (
    <div className={styles.container}>
      <Title>Weapon Type</Title>
      <div className={styles.selectWrapper}>
        <SelectField
          required
          value={selectedOption}
          label="Select Weapon Type"
          options={[
            { name: "Assault Rifles", value: "Assault" },
            { name: "Assault", value: "Rifles" },
          ]}
          onChange={handleSelect}
        />
      </div>
      <label className={styles.label}>
        Select Assault Rifles<span className={styles.required}>*</span>
      </label>
      <div className={styles.items}>
        {weapons.map((weapon) => (
          <div key={weapon.name} className={styles.item}>
            <CustomCheckbox
              label={weapon.name}
              onChange={() => handleCheckboxChange(weapon.name)}
              checked={checkedWeapons.includes(weapon.name)}
            />
            <span className={styles.price}>+ {weapon.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
