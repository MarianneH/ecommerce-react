import styles from "./categories-list.module.css";

const CategoriesList = ({ data }) => {
  return (
    <div className={styles.layout}>
      {data.map((element, index) => {
        const { id, name, image } = element;
        return (
          <div key={id || index}>
            <h3>{name}</h3>
            <img src={image} alt={element.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
