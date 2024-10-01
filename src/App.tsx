import { useEffect } from "react";

import { CheckoutOrders } from "./pages";

import styles from "./App.module.css";

const App = () => {
  const theme = "#3c4257";

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <CheckoutOrders />
    </div>
  );
};

export default App;
