import CategoriesItem from "../components/categories-item/categories-item";
import CategoriesList from "../components/categories-list/categories-list";
import useFetch from "../hooks/useFetch";

const Categories = () => {
  const [categoriesResp, errorResp, isLoading] = useFetch(
    `https://api.escuelajs.co/api/v1/categories`
  );

  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }
  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div>
      <CategoriesList>
        {categoriesResp.data.map(({ id, name, image }, index) => (
          <CategoriesItem key={id || index} name={name} image={image} />
        ))}
      </CategoriesList>
    </div>
  );
};

export default Categories;
