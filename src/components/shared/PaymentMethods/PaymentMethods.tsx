import { useState } from "react";

import { Title } from "@/components/ui";

import amexCard from "@/assets/amexCard.svg";
import applePay from "@/assets/applePay.svg";
import googlePay from "@/assets/googlePay.svg";
import masterCard from "@/assets/masterCard.svg";
import masterCard2 from "@/assets/masterCard-2.svg";
import paypal from "@/assets/payPal.svg";
import visaCard from "@/assets/visaCard.svg";
import blueArrow from "@/assets/blueArrow.svg";

import styles from "./PaymentMethods.module.css";

const paymentMethods = [
  {
    id: "card",
    name: "Card",
    description: "Free",
    icons: [masterCard, masterCard2, visaCard, amexCard],
  },
  {
    id: "apple-pay",
    name: "Apple Pay",
    description: "Free",
    icons: [applePay],
  },
  {
    id: "google-pay",
    name: "Google Pay",
    description: "Free",
    icons: [googlePay],
  },
  {
    id: "paypal",
    name: "Paypal",
    description: "Free",
    icons: [paypal],
  },
];

export const PaymentMethods = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const handlePaymentChange = (id: string) => {
    setSelectedPayment(id);
  };

  return (
    <div className={styles.paymentMethods}>
      <Title className={styles.titleStyles}>How do you want to pay?</Title>
      <div className={styles.paymentOptions}>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`${styles.paymentOption} ${
              selectedPayment === method.id ? styles.active : ""
            }`}
            onClick={() => handlePaymentChange(method.id)}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedPayment === method.id}
              onChange={() => handlePaymentChange(method.id)}
              className={styles.radio}
            />
            <div className={styles.paymentDetails}>
              <div className={styles.paymentInfo}>
                <span className={styles.paymentName}>{method.name}</span>
                <span className={styles.paymentDescription}>
                  {method.description}
                </span>
              </div>
              <div className={styles.paymentIcons}>
                {method.icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={method.name}
                    className={styles.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.seeMore}>
        <span className={styles.seeMoreText}>See More</span>
        <img src={blueArrow} alt="arrow" />
      </div>
    </div>
  );
};
