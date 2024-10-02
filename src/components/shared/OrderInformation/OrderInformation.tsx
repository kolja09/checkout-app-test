import { useState, ChangeEvent } from "react";
import { InputField, Title } from "@/components/ui";

import styles from "./OrderInformation.module.css";

export const OrderInformation = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.orderInformation}>
      <Title>Order Information</Title>

      <InputField
        label="EA web app email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@criminalmodz.com"
        required
        name='email'
      />

      <div className={styles.passwordContainer}>
        <InputField
          label="EA web app Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="********"
          required
          name='password'
        />

        <InputField
          label="Confirm EA web app Password"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="********"
          required
          name='confirmPassword'
        />
      </div>
    </div>
  );
};
