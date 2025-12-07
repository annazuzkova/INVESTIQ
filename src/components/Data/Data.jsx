import styles from "./Data.module.css";
import DataIcon from "./DataIcon";

export const Data = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={styles.data}>
      <DataIcon />
      <span>{currentDate}</span>
    </div>
  );
};
