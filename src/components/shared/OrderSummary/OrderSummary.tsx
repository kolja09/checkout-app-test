import { useAppSelector } from "@/store/hooks";

import { ClockIcon } from "@/components/ui/Icons/ClockIcon";
import { Title } from "@/components/ui";

import styles from "./OrderSummary.module.css";

const products = [
  {
    name: "1x Credit Boost",
    description: "100 Spins - Xbox",
    price: "$65.00",
  },
  {
    name: "1x Credit Boost",
    description: "100 Spins - Xbox",
    price: "$65.00",
  },
];

export const OrderSummary = () => {
  const { activeTab } = useAppSelector((state) => state.brand);

  return (
    <div className={styles.orderSummary}>
      <Title className={styles.titleStyles}>Order Summary</Title>

      <p className={styles.totalSumTitle}>$134.23</p>

      <div className={styles.productsList}>
        {products.map((product, index) => (
          <div key={index} className={styles.productItem}>
            <div>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productDescription}>{product.description}</p>
            </div>
            <p className={styles.productPrice}>{product.price}</p>
          </div>
        ))}
      </div>

      <div className={styles.orderDetails}>
        <div className={styles.detailRow}>
          <p className={styles.resultTitle}>Subtotal</p>
          <p className={styles.productPrice}>$130.00</p>
        </div>
        <div className={styles.detailRow}>
          <p className={styles.productDescription}>Sales tax (6.5%)</p>
          <p className={styles.productDescription}>$4.23</p>
        </div>
        <div className={styles.detailRow}>
          <p className={styles.resultTitle}>Total due</p>
          <p className={styles.totalSum}>$134.23</p>
        </div>

        {activeTab === 1 && (
          <div className={styles.detailRow}>
            <div className={styles.eta}>
              <ClockIcon />
              <p className={styles.resultTitle}>ETA</p>
            </div>
            <p className={styles.resultText}>2-3 Days</p>
          </div>
        )}
      </div>
    </div>
  );
};
