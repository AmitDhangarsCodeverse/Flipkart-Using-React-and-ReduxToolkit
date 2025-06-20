import { useEffect } from "react";
import Loading from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../slices/ProductsSlice";
import { useLocalStorage } from "../hooks/useLocalstorage";
import { useProductDetails } from "../hooks/useProductDetails";
const PopularDeals = () => {
  const [, setValue] = useLocalStorage("product", {});
  const dispatch = useDispatch();
  const { data, loading, err } = useSelector((state) => state.product);
  const { getdetails } = useProductDetails(data);
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="popular-deals bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
        <h1 className="text-start font-semibold xs:py-1 px-2">For You</h1>
        <div className="products-container flex flex-wrap items-center justify-evenly">
          {loading && <Loading />}
          {err && (
            <p className="error xs:pb-4 flex justify-center items-center flex-col">
              <img
                src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                alt=""
                className="h-10"
              />
              {err}
            </p>
          )}
          {data &&
            data.map((prod) => (
              <div
                className="product border-2 border-blue-200 rounded-md flex justify-center items-center flex-col shadow-md shadow-red-400 xs:px-1 py-1 m-1 mb-2"
                key={prod.id}
                onClick={() => getdetails(prod.id)}
              >
                <img
                  src={prod.images[0]}
                  alt={prod.slug}
                  className="rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                />
                <p className="product-title p-1">
                  {prod.title.slice(0, 20) + ".."}
                </p>
                <p className="product-price text-black font-semibold">
                  Under ₹{prod.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularDeals;
