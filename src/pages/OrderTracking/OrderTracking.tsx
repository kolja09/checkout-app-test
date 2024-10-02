import { DocumnetIcon } from "@/components/ui/Icons/DocumentIcon";
import { InvoiceDocument } from "@/components/ui/Icons/InvoiceDocument";

import { Header } from "@/components/shared";

import styles from "./OrderTracking.module.css";

export const OrderTracking = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.container}>
        <h2 className={styles.title}>Order Tracking</h2>
        <div className={styles.orderInfo}>
          <div className={styles.orderDetails}>
            <p>
              Order ID:
              <span className={styles.orderId}>#301-20183-718465</span>
            </p>
            <p>
              Status: <span className={styles.orderStatus}>Processed</span>
            </p>
            <p className={styles.errorMessage}>
              Your order could not be processed, as 2-Step Verification is
              enabled on your account. Please check your email for more
              information.
            </p>
          </div>
        </div>
        <div className={styles.sectionTitleBlock}>
          <DocumnetIcon />
          <p className={styles.sectionTitle}>Order Details</p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.orderTable}>
            <tbody>
              <tr>
                <td className={styles.tableHeader}>Product</td>
                <td className={styles.tableHeader}>Total</td>
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
        <div className={styles.sectionTitleBlock}>
          <InvoiceDocument />
          <p className={styles.sectionTitle}>Invoice</p>
        </div>
        <p className={styles.orderNumber}>#10000054492/09/2024</p>
      </div>

      <div>
        <p className={styles.footerText}>Copyright © 2024 NergetixPay</p>
      </div>
    </div>
  );
};
