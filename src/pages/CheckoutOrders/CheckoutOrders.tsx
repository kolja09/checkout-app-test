import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveTab } from "@/store/slices/brand/brand.slice";

import {
  BillingDetails,
  DiscountBundle,
  Header,
  OrderInformation,
  OrderSummary,
  PlatformSelector,
  TabNavigation,
  WeaponType,
  PaymentMethods,
} from "@/components/shared";
import { Button } from "@/components/ui";

import styles from "./CheckoutOrders.module.css";

export const CheckoutOrders = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state) => state.brand);
  const navigate = useNavigate();

  const handleSetActiveTab = () => {
    if (activeTab === 1) {
      dispatch(setActiveTab(2));
    } else if (activeTab === 2) {
      dispatch(setActiveTab(3));
    } else {
      navigate("/payment-success");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div>
          <Header isCouponBlock={activeTab !== 1} />
          {activeTab === 1 && (
            <>
              <div className={styles.tabs}>
                <TabNavigation />
              </div>
              <PlatformSelector />
              <DiscountBundle />
              <WeaponType />
            </>
          )}
          {(activeTab === 2 || activeTab === 3) && (
            <>
              <div className={styles.tabs}>
                <TabNavigation />
              </div>
              <OrderInformation />
              <BillingDetails />
            </>
          )}
        </div>
        <p className={`${styles.desktop} ${styles.text}`}>Copyright © 2024 NergetixPay</p>
      </div>
      <div className={styles.rightWrapper}>
        <OrderSummary />
        {(activeTab === 2 || activeTab === 3) && <PaymentMethods />}
        <div className={styles.buttonWrapper}>
          {activeTab === 1 && (
            <Button onClick={handleSetActiveTab}>Place Order</Button>
          )}
          {(activeTab === 2 || activeTab === 3) && (
            <Button onClick={handleSetActiveTab}>Pay</Button>
          )}
        </div>
        <p className={styles.text}>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
        <p className={`${styles.mobile} ${styles.text}`}>Copyright © 2024 NergetixPay</p>
      </div>
    </div>
  );
};
