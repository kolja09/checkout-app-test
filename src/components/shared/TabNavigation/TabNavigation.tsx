import styles from "./TabNavigation.module.css";

type TabNavigationProps = {
  activeTab: number;
  tabOptions: {
    name: string;
    id: number;
  }[];
};

export const TabNavigation = ({ activeTab, tabOptions }: TabNavigationProps) => {
  return (
    <div className={styles.tabContainer}>
      {tabOptions.map((el) => (
        <div
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
