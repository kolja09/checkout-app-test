import { useState, ChangeEvent } from "react";

import { InputField, SelectField, Title } from "@/components/ui";

import styles from "./BillingDetails.module.css";

export const BillingDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    zip: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (value: string | number) => {
    setFormData((prevData) => ({
      ...prevData,
      country: value.toString(),
    }));
  };

  return (
    <div className={styles.wrapper}>
      <Title>Billing Details</Title>

      <div className={styles.fullNameContainer}>
        <InputField
          label="First name"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Your first name"
          required
          name="firstName"
        />
        <InputField
          label="Last name"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Your last name"
          required
          name="lastName"
        />
      </div>
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@criminalmodz.com"
        required
        name="email"
      />
      <div className={styles.formContainer}>
        <SelectField
          label="Country or region"
          options={[
            { name: "United States", value: "US" },
            { name: "Canada", value: "CA" },
          ]}
          value={formData.country}
          onChange={handleCountryChange}
          required
          className={styles.selectField}
        />
        <div className={styles.inputGroup}>
          <InputField
            value={formData.city}
            onChange={handleChange}
            placeholder="Town/City"
            name="city"
            className={styles.inputLeft}
          />
          <InputField
            value={formData.zip}
            onChange={handleChange}
            placeholder="ZIP"
            name="zip"
            className={styles.inputRight}
          />
        </div>
      </div>
    </div>
  );
};
