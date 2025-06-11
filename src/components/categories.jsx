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
        setcategoryitem(category.data.splice(0,6));
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
        {error && <p className="error py-3 flex justify-center items-center flex-col">
          <img src="https://cdn-icons-png.freepik.com/512/9474/9474058.png" alt="" className='xs:h-4 sm:h-5 lg:h-8 xl:h-10' />{error}</p>}
        {categoryitem &&
          categoryitem.map((categorytype) => (
            <div className="categories-wrapper py-2 xs:px-2 sm:px-4 md:px-4 lg:px-4 xl:px-10">
              <div
                className="categories flex flex-col items-center"
                key={categorytype.id}
              >
                <img
                  src={categorytype.image}
                  alt={categoryitem.slug}
                  className="rounded-full cursor-pointer xs:h-5 sm:h-7 md:h-9 lg:h-10 xl:h-12"
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
