import { useState } from "react";

import { GameIcon } from "@/components/ui/Icons/GameIcon";
import { Title } from "@/components/ui";

import styles from "./PlatformSelector.module.css";

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
      <Title isRequired>Choose Platform</Title>
      <div className={styles.buttonGroup}>
        {options.map((el) => (
          <div
            key={el.value}
            className={`${styles.button} ${
              selectedPlatform === el.value ? styles.active : ""
            }`}
            onClick={() => handleSelect(el.value)}
          >
            <GameIcon
              color={selectedPlatform === el.value ? "#ffffff" : "#3C4257"}
            />
            <span>{el.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
