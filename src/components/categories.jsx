import { useState, useEffect } from "react";
import { getCategories } from "../services/getProducts";
import Loading from "./loader";
const Categories = () => {
  const [categoryitem, setcategoryitem] = useState();
  const [error, seterror] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let category = await getCategories();
        setcategoryitem(category.data.splice(0, 5));
      } catch (err) {
        seterror("Something went wrong");
      } finally {
        setloading(false);
      }
    };
    fetchCategory();
  }, []);

  return (
    <>
      <section className="category-section flex justify-center items-center bg-white m-1 md:m-1 lg:m-3">
        {loading && <div className="flex items-center">{<Loading />}</div>}
        {error && <p className="error py-3">{error}</p>}
        {categoryitem &&
          categoryitem.map((categorytype) => (
            <div className="categories-wrapper xs:px-2 py-1 sm:px-4 md:px-5 lg:px-4 xl:px-12 xl:py-2">
              <div
                className="categories flex flex-col items-center"
                key={categorytype.id}
              >
                <img
                  src={categorytype.image}
                  alt={categoryitem.slug}
                  className="xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-12 w-14 rounded-md lg:w-16 h-16"
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
