import { useEffect } from "react";
import Loading from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../slices/ProductsSlice";
import { useProductDetails } from "../hooks/useProductDetails";
const ProductsByCategories = () => {
  const dispatch = useDispatch();
  const { data, loading, err } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(FetchProducts);
  }, [dispatch]);
  const { getdetails } = useProductDetails(data);
  return (
    <>
      <div className="productsbycategories">
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold xs:py-1 px-2">Clothes</h1>
          <div className="clothes-category flex justify-evenly items-center flex-wrap xs:m-1 p-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="h-10xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              data
                .filter((item) => item.id >= 4 && item.id <= 15)
                .map((clothesitem) => (
                  <div
                    className="Product shadow-md shadow-red-400 border-2 border-blue-200 rounded-md flex justify-center items-center flex-col xs:px-1 py-1 m-1 "
                    onClick={()=>getdetails(clothesitem.id)}
                  >
                    <img
                      src={clothesitem.images[0]}
                      alt=""
                      className="rounded-sm cursor-pointer  xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40 "
                    />
                    <p className="product-title">
                      {clothesitem.title.slice(0, 12) + ".."}
                    </p>
                    <p className="product-price font-semibold py-1">
                      Under ₹{clothesitem.price}
                    </p>
                  </div>
                ))}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold xs:py-1 px-2">Furniture</h1>
          <div className="furniture-category flex justify-evenly items-center flex-wrap xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="h-10xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              data
                .filter((item) => item.id >= 30 && item.id <= 34)
                .map((furitem) => (
                  <div className="Product shadow-md shadow-red-400 border-2 border-blue-200 rounded-md flex justify-center items-center flex-col xs:px-1 py-1 m-1 "
                  onClick={()=>getdetails(furitem.id)}>
                    <img
                      src={furitem.images[0]}
                      alt=""
                      className="rounded-sm cursor-pointer  xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                    />
                    <p className="product-title">
                      {furitem.title.slice(0, 12) + ".."}
                    </p>
                    <p className="product-price font-semibold py-1">
                      Under ₹{furitem.price}
                    </p>
                  </div>
                ))}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold xs:py-1 px-2">Footware</h1>
          <div className="footware-category flex justify-evenly items-center flex-wrap bg-white xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              data
                .filter((item) => item.id >= 35 && item.id <= 40)
                .map((footitem) => (
                  <div className="Product shadow-md shadow-red-400 border-2 border-blue-200 rounded-md flex justify-center items-center flex-col xs:px-1 py-1 m-1 "
                  onClick={()=>getdetails(footitem.id)}>
                    <img
                      src={footitem.images[0]}
                      alt=""
                      className="rounded-sm cursor-pointer  xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                    />
                    <p className="product-title">
                      {footitem.title.slice(0, 12) + ".."}
                    </p>
                    <p className="product-price font-semibold py-1">
                      Under ₹{footitem.price}
                    </p>
                  </div>
                ))}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold xs:py-1 px-2">Miscellaneous</h1>
          <div className="miscellaneous-category flex justify-evenly items-center flex-wrap bg-white xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              data
                .filter((item) => item.id >= 45 && item.id <= 50)
                .map((miscellitem) => (
                  <div className="Product shadow-md shadow-red-400 border-2 border-blue-200 rounded-md flex justify-center items-center flex-col xs:px-1 py-1 m-1 "
                  onClick={()=>getdetails(miscellitem.id)}>
                    <img
                      src={miscellitem.images[0]}
                      alt=""
                      className="rounded-sm cursor-pointer  xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                    />
                    <p className="product-title">
                      {miscellitem.title.slice(0, 12) + ".."}
                    </p>
                    <p className="product-price font-semibold py-1">
                      Under ₹{miscellitem.price}
                    </p>
                  </div>
                ))}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold xs:py-1 px-2">Electronics</h1>
          <div className="furniture-category flex justify-evenly items-center flex-wrap bg-white xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              data
                .filter((item) => item.id >= 22 && item.id <= 27)
                .map((electroitems) => (
                  <div className="Product shadow-md shadow-red-400 border-2 border-blue-200 rounded-md flex justify-center items-center flex-col xs:px-1 py-1 m-1 "
                  onClick={()=>getdetails(electroitems.id)}>
                    <img
                      src={electroitems.images[0]}
                      alt=""
                      className="rounded-sm cursor-pointer  xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                    />
                    <p className="product-title">
                      {electroitems.title.slice(0, 12) + ".."}
                    </p>
                    <p className="product-price font-semibold py-1">
                      Under ₹{electroitems.price}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsByCategories;
