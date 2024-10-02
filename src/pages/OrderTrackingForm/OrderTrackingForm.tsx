import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "@/components/shared";
import { Button, InputField } from "@/components/ui";

import styles from "./OrderTrackingForm.module.css";

export const OrderTrackingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orderID: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    orderID: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "orderID" && value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        orderID: "",
      }));
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = { orderID: "", email: "" };
    let hasErrors = false;

    if (!formData.orderID.trim()) {
      validationErrors.orderID = "Order ID is required";
      hasErrors = true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
      hasErrors = true;
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
      hasErrors = true;
    }
    setErrors(validationErrors);

    if (!hasErrors) {
      navigate("/order-tracking");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Order Tracking</h2>
        <p className={styles.description}>
          To track your order, please enter your Order ID in the box below and
          press the "Track" button.
        </p>
        <div className={styles.formContainer}>
          <InputField
            label="Order ID"
            name="orderID"
            value={formData.orderID}
            onChange={handleChange}
            placeholder="Find in your invoice"
            errorMessage={errors.orderID}
          />

          <InputField
            label="Billing Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@criminalmodz.com"
            errorMessage={errors.email}
          />
          <Button type="submit">Track</Button>
        </div>
      </form>

      <div>
        <p className={styles.footerText}>Copyright © 2024 NergetixPay</p>
      </div>
    </div>
  );
};
