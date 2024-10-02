import styles from "./Title.module.css";

export const Title = ({
  children,
  isRequired = false,
  className = "",
}: {
  children: React.ReactNode;
  isRequired?: boolean;
  className?: string;
}) => {
  return (
    <div className={`${styles.title} ${className}`}>
      <h4>{children}</h4>
      {isRequired && <span className={styles.required}>*</span>}
    </div>
  );
};
