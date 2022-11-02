import CategoriesItem from "../components/categories-item/categories-item";
import CategoriesList from "../components/categories-list/categories-list";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [errorResp, setErrorResp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesResp, setCategoriesResp] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/XOXOXO/v1/categories`)
      .then((response) => {
        setCategoriesResp(response.data);
      })
      .catch((error) => setErrorResp(error, "error"))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }
  if (errorResp) {
    console.log("error: ", errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div>
      <CategoriesList categoriesResp={categoriesResp} />
      <CategoriesItem />
    </div>
  );
};

export default Categories;
