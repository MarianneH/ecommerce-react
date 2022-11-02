import styles from "./categories-list.module.css";

const CategoriesList = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default CategoriesList;
