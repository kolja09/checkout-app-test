import { useMemo } from "react";

import { setActiveTab } from "@/store/slices/brand/brand.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import styles from "./TabNavigation.module.css";

interface TabOption {
  name: string;
  id: number;
}

export const TabNavigation = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.brand);

  const tabOptions: TabOption[] = useMemo(() => {
    const baseOptions = [
      {
        name: "01 CUSTOMIZATION",
        id: 1,
      },
      {
        name: "02 ORDER INFO",
        id: 2,
      },
    ];
    if (activeTab === 2 || activeTab === 3) {
      return [
        ...baseOptions,
        {
          name: "03 CHECKOUT",
          id: 3,
        },
      ];
    }

    return baseOptions;
  }, [activeTab]);

  const handleSetActiveTab = (id: number) => {
    dispatch(setActiveTab(id));
  };

  return (
    <div className={styles.tabContainer}>
      {tabOptions.map((el) => (
        <div
          key={el.id}
          onClick={() => handleSetActiveTab(el.id)}
          className={`${styles.tabItem} ${
            activeTab === el.id ? styles.active : ""
          }`}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};
