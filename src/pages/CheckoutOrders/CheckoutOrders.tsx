import { Header } from "@/components/shared";

import styles from "./CheckoutOrders.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBrand } from "@/store/slices/brand/brand.slice";
import { RootState } from "@/store/store";

export const CheckoutOrders = () => {
  const dispatch = useDispatch();
  const { brand } = useSelector((state: RootState) => state.brand);

  // Данные, которые будем сетить
  const mockBrandData = {
    id: 1,
    name: "Test Brand",
    description: "This is a test brand",
  };

  const handleSetBrand = () => {
    // Диспатчим action setBrand
    dispatch(setBrand(mockBrandData));
  };

  // const [activeTab, setActiveTab] = useState(1);

  // const tabOptions = [
  //   {
  //     name: "01 CUSTOMIZATION",
  //     id: 1,
  //   },
  //   {
  //     name: "02 ORDER INFO",
  //     id: 2,
  //   },
  //   // {
  //   //   name: "03 CHECKOUT",
  //   //   id: 3,
  //   // },
  // ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <Header />
        <div className={styles.tabs}>
          {/* <TabNavigation tabOptions={tabOptions} activeTab={activeTab} /> */}
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <Link to="/payment-success">Payment success</Link>
        <Link to="/order-tracking">Order Tracking</Link>
        <Link to="/order-tracking-form">Order tracking form</Link>
        <button onClick={handleSetBrand}>Set Brand Data</button>
      </div>
      <div>
        <h1>id: {brand?.id}</h1>
        <h1>description: {brand?.description}</h1>
        <h1>name: {brand?.name}</h1>
      </div>
    </div>
  );
};
