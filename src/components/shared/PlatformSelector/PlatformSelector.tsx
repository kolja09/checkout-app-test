import { useState } from "react";
import styles from "./PlatformSelector.module.css";
import { GameIcon } from "@/components/ui/Icons/GameIcon";

export const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("PS4/5");

  const options = [
    { name: "PS4/5", value: "PS4/5" },
    { name: "Xbox", value: "Xbox" },
    { name: "PC", value: "PC" },
  ];

  const handleSelect = (platform: string) => {
    setSelectedPlatform(platform);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Choose Platform</h4>
        <span className={styles.required}>*</span>
      </div>
      <div className={styles.buttonGroup}>
        {options.map((el) => (
          <div
            key={el.value}
            className={`${styles.button} ${
              selectedPlatform === el.value ? styles.active : ""
            }`}
            onClick={() => handleSelect(el.value)}
          >
            <GameIcon />
            PS4/5
          </div>
        ))}
      </div>
    </div>
  );
};
