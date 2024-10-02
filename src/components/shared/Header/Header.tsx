import styles from "./Header.module.css";

import { CouponIcon } from "@/components/ui/Icons/CouponIcon";

import defaultLogo from "@/assets/defaultLogo.svg";
import goBack from "@/assets/goBack.svg";

export const Header = ({
  isCouponBlock = false,
}: {
  isCouponBlock?: boolean;
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.logoSection}>
        <img className={styles.goBack} src={goBack} alt="go back icon" />
        <div className={styles.logoWrapper}>
          <img src={defaultLogo} alt="NergetixPay Logo" />
          <p className={styles.logoText}>NergetixPay</p>
        </div>
      </div>

      {isCouponBlock && (
        <div className={styles.couponSection}>
          <div className={styles.couponWrapper}>
            <CouponIcon />
            <span className={styles.text}>Have a coupon?</span>
          </div>

          <span className={styles.textForAction}>
            Click here to enter your code
          </span>
        </div>
      )}
    </div>
  );
};
