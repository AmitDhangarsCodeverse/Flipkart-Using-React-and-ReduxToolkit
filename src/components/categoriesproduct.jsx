import { useEffect } from "react";
import { FetchCategories } from "../slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useProductDetails } from "../hooks/useProductDetails";
import { Link} from "react-router-dom";
import Loading from '../components/loader'
import {useBuyNow} from '../hooks/useBuynow'
import { useLocalStorage } from "../hooks/useLocalstorage";
const CategoriesProduct = () => {
  const [storedValue] = useLocalStorage("category");
  const { data, err, loading } = useSelector((state) => state.category);
  const { getdetails } = useProductDetails(data);
  const {buyNow}=useBuyNow();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategories(storedValue));
  }, [storedValue, dispatch]);
  return (
    <>
    <div className="back-btn flex justify-start w-full p-1 
    "><Link to={-1}><i class="ri-arrow-left-line bg-blue-300 shadow-md shadow-blue-400 border border-blue-400 xs:p-0.5 rounded-full hover:bg-blue-400"></i></Link></div>
      <div className="category-product-wrapper bg-white border border-gray-400 rounded-md shadow-md shadow-gray-400 xs:m-1 xs:p-0.5 sm:m-2 sm:p-1 lg:m-1 xl:m-3">
        <h1>{}</h1>
        <div className="product-container flex flex-wrap justify-evenly">
           {loading && <Loading/>}
          {data &&
            data.map((prod) => (
              <div
                className="category-product border-2 border-red-400 rounded-md shadow-md shadow-red-400 mb-1 xs:p-0.5 m-0.5 lg:p-1 lg:m-1"
                key={prod.id}
              >
                <div className="image-container flex justify-center items-center">
                  <img
                    src={prod.images[0]}
                    alt={prod.slug}
                    className="xs:h-24 sm:h-24 md:h-28 lg:h-32 xl:h-40 2xl:h-44 rounded-md"
                  />
                </div>
                <p className="category-title font-semibold xs:p-0.5 md:px-1 lg:px-1.5">
                  {prod.title.slice(0, 15)}
                </p>
                <p className="category-price xs:p-0.5 md:px-1.5 lg:px-1.5">
                  <span className="line-through text-gray-400 mr-0.5">
                    ₹{prod.price - 10}
                  </span>
                  ₹{prod.price}
                </p>
                <div className="button-section flex items-center xs:mb-0.5 p-1">
                  <button className="bg-yellow-400 rounded-sm xs:p-0.5 lg:p-1 rounded-xs mr-2 lg:mr-4" onClick={()=> buyNow(prod)}>
                    <i class="ri-shopping-cart-2-line xs:mr-0.5"></i>
                    Buy Now
                  </button>
                  <button
                    className="bg-orange-400 rounded-sm xs:p-0.5 lg:p-1 rounded-xs"
                    onClick={()=>getdetails(prod.id)}
                  >
                    <i class="ri-flashlight-line xs:mr-0.5"></i>Add to cart
                  </button>
                  {/* <p className="text-red-600">{productexits}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesProduct;
