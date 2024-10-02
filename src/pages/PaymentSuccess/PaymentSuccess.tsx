import successful from "@/assets/successful.svg";

import { Header } from "@/components/shared";

import styles from "./PaymentSuccess.module.css";
import { DocumnetIcon } from "@/components/ui/Icons/DocumentIcon";

export const PaymentSuccess = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.successContainer}>
          <img
            className={styles.successImg}
            src={successful}
            alt="successful payment"
          />
          <h1 className={styles.title}>Payment Succeeded</h1>
          <p className={styles.sutTitle}>
            Thank you. Your order has been received
          </p>
        </div>
        <div className={styles.generalData}>
          <div className={styles.generalDataItem}>
            <p className={styles.dataTitle}>ORDER NUMBER</p>
            <p className={styles.dataValue}>#301-20183-718465</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.generalDataItem}>
            <p className={styles.dataTitle}>DATE</p>
            <p className={styles.dataValue}>September 14,2024</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.generalDataItem}>
            <p className={styles.dataTitle}>TOTAL</p>
            <p className={styles.dataValue}>{"11.99€​"}</p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.generalDataItem}>
            <p className={styles.dataTitle}>PAYMENT METHOD</p>
            <p className={styles.dataValue}>Paypal</p>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <DocumnetIcon />
            <h3 className={styles.tableTitle}>Order Details</h3>
          </div>
          <table className={styles.orderTable}>
            <tbody>
              <tr>
                <td className={styles.textBold}>Product</td>
                <td className={styles.textBold}>Total</td>
              </tr>
              <tr>
                <td>
                  x1 <a href="#">Credit Boost - 100 Million Credits - Xbox</a>
                </td>
                <td>11.99€</td>
              </tr>
              <tr>
                <td>Subtotal:</td>
                <td>11.99€</td>
              </tr>
              <tr>
                <td>Payment Methode:</td>
                <td>11.99€</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>11.99€</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <p className={styles.footerText}>Copyright © 2024 NergetixPay</p>
      </div>
    </div>
  );
};
