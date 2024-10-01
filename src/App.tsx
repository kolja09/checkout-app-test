import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  CheckoutOrders,
  OrderTracking,
  OrderTrackingForm,
  PaymentSuccess,
} from "./pages";

import styles from "./App.module.css";

const App = () => {
  const theme = "#3c4257";

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", theme);
  }, [theme]);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/checkout-orders" replace />}
          />{" "}
          <Route path="/checkout-orders" element={<CheckoutOrders />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/order-tracking-form" element={<OrderTrackingForm />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
