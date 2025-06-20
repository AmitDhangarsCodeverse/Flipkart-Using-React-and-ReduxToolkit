import { useState, useEffect } from "react";
import { getCategories } from "../services/getProducts";
import Loading from "./loader";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalstorage";
const Categories = () => {
  const [categoryitem, setcategoryitem] = useState();
  const [error, seterror] = useState();
  const [loading, setloading] = useState(true);
  const navigate=useNavigate();
  const [,setValue]=useLocalStorage("category",{});
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let category = await getCategories();
        setcategoryitem(category.data.splice(0,5));
      } catch (err) {
        seterror("Something went wrong");
      } finally {
        setloading(false);
      }
    };
    fetchCategory();
  },[]);
  
  const getCategoriesProduct=(id)=>{
    setValue(id)
    navigate('/categories/products/');
  }
  return (
    <>
      <section className="category-section flex justify-center items-center bg-white xs:rounded-md shadow-md shadow-gray-400 border border-gray-400 m-1 md:m-1 lg:m-3">
        {loading && <div className="flex items-center">{<Loading />}</div>}
        {error && <p className="error py-3 flex justify-center items-center flex-col">
          <img src="https://cdn-icons-png.freepik.com/512/9474/9474058.png" alt="" className='xs:h-4 sm:h-5 lg:h-8 xl:h-10' />{error}</p>}
        {categoryitem &&
          categoryitem.map((categorytype) => (
            <div className="categories-wrapper py-2 xs:px-2 sm:px-4 md:px-4 lg:px-4 xl:px-10" key={categoryitem.id}>
              <div
                className="categories flex flex-col items-center"
                key={categorytype.id} onClick={()=> getCategoriesProduct(categorytype.id)}
              >
                <img
                  src={categorytype.image}
                  alt={categoryitem.slug}
                  className="rounded-full cursor-pointer border-2 border-gray-300 shadow-md shadow-gray-400 xs:h-5 sm:h-7 md:h-9 lg:h-10 xl:h-12"
                />
                <p className="mt-1">{categorytype.name}</p>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default Categories;
