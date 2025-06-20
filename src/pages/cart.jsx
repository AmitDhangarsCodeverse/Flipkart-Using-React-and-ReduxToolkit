import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from "../slices/CartSlice";
import { useLocalStorage } from '../hooks/useLocalstorage'
import {useBuyNow} from '../hooks/useBuynow'
const Cart = () => {
  const dispatch = useDispatch();
  const [,setValue]=useLocalStorage("buyitem");
  const data = useSelector((state) => state.cart);
  // const BuyNow=(prod)=>{
  //     setValue(prod)
  //     navigate('/buynow');
  // }
  const {buyNow}=useBuyNow();
  const removeproduct = (idx) => {
    console.log("removed");
    dispatch(removeProduct(idx));
  };
  return (
    <>
      <div className="cart-wrapper bg-white rounded-md shadow-md shadow-yellow-400 xs:m-1 p- lg:m-1 xl:m-3">
        {data.length == 0 && (
          <div className="empty-cart bg-white flex justify-center items-center flex-col xs:m-1 xs:p-2 md:m-2 lg:m-3">
            <div className="back-btn flex justify-start w-full">
              <Link to={-1}>
                <i class="ri-arrow-left-line bg-blue-300 shadow-md shadow-blue-400 border border-blue-400 xs:p-0.5 rounded-full hover:bg-blue-400 "></i>
              </Link>
            </div>
            <img
              src={"https://deltasious.com/img/empty-cart.05d8cea1.gif"}
              alt=""
            />
            <p className="xs:mt-2 mb-2 font-semibold">Cart is Empty</p>
            <Link to={"/"}>
              <button className="bg-yellow-400 rounded-sm xs:p-0.5 lg:p-1">
                Shop Now
              </button>
            </Link>
          </div>
        )}
        {data &&
          data
            .filter((item) => item.id !== data.id)
            .map((prod, idx) => (
              <div className="product-wrapper flex items-start justify-center xs:flex-col xs:mb-1 w-[100%]">
                <div
                  className="product-container flex border-2 border-red-100 rounded-md shadow-md shadow-red-300 xs:p-1 mb-1"
                  key={prod.id}
                >
                  <div className="product-image xs:m-1">
                    <img
                      src={prod.images[0]}
                      alt=""
                      className=" rounded-sm xs:h-9 sm:h-12 md:h-16 lg:h-24"
                    />
                  </div>
                  <div className="cart-items m-1">
                    <div className="title">{prod.title}</div>
                    <div className="category">{prod.category.name}</div>
                    <div className="cart-items-price">
                      <p>
                        <span className="xs:mr-1 line-through text-gray-500 md:mr-1.5">
                          ₹{prod.price - 20}
                        </span>
                        ₹{prod.price}
                      </p>
                    </div>
                    <div className="cart-items-quantity">
                      <p>Quantity {prod.quantity}</p>
                    </div>
                  </div>
                  <div className="btn flex items-center xs:w-[10%] p-2 m-1">
                    <button className="bg-orange-400 xs:rounded-sm xs:mr-1 p-0.5 md:rounded-sm md:mr-2 md:px-2 py-1" onClick={()=>{buyNow(prod)}}>
                      BuyNow
                    </button>
                    <button
                      className="bg-red-300 xs:rounded-sm xs:mr-1 p-0.5 md:rounded-sm md:mr-2 md:px-2 py-1"
                      onClick={() => removeproduct(prod.idx)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="price-summary border-blue-300 border-2 rounded-md shadow-md shadow-blue-400 xs:p-0.5 my-0.5 w-[94%] sm:p-1 sm:my-1 sm:w-[80%] lg:w-[43%]">
                  <div className="price-summary-heading border-b-2 border-gray-400 font-semibold text-blue-500">
                    Price Summary
                  </div>
                  <div className="price-details flex justify-between items-center">
                    <p>
                      Product Price <span>{`(${prod.quantity})`}items</span>
                    </p>
                    <p>₹ {prod.price * prod.quantity}</p>
                  </div>
                  <div className="price-details flex justify-between items-center">
                    <p>Discount</p>
                    <p className="">₹ {10 * prod.quantity}</p>
                  </div>
                  <div className="price-details flex justify-between items-center">
                    <p>Platform Fee </p>
                    <p>₹ {7}</p>
                  </div>
                  <div className="price-details flex justify-between items-center">
                    <p className="font-semibold">Total Amount</p>
                    <p className="font-semibold">
                      ₹{prod.quantity * prod.price + 7 - 10 * prod.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Cart;
