import {NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <header className="navbar flex justify-between xs:px-1 py-2 sticky top-0 bg-white z-50">
        <i class="ri-menu-2-fill md:hidden"></i>
        <div className="logo-container xs:w-24 sm:w-32 md:w-[100px] lg:w-36 xl:w-44">
          <NavLink to={"/"}>
            <img
              src={
                "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              }
              alt="Logo"
              className="xs:w-20 md:h-8 lg:w-36 xl:w-44 cursor-pointer"
            />
          </NavLink>
        </div>
        <div className="search-bar-wrapper flex bg-blue-100 rounded-md p-1 xs:hidden md:flex h-8 w-[345px] lg:items-center xl:flex-1 cursor-pointer">
          <i className="ri-search-line xs:h-5 md:px-1"></i>
          <div className="input-section">
            <input
              type="text"
              placeholder="Search for Products,Brands and More"
              className="border-none bg-transparent outline-none lg:w-52 xl:w-60"
            />
          </div>
        </div>
        <div className="utilities-section flex items-center lg:w-50 xl:w-[395px]">
          <i class="ri-mobile-download-line md:hidden"></i>
          <div className="signup-wrapper xs:ml-1 sm:ml-2 lg:ml-3">
            <NavLink to="login">
              <div className="signup-section flex items-center border-2 rounded-md border-white hover:border-gray-400 hover:bg-blue-600 ">
                <i class="ri-user-line cursor-pointer xl:mr-2 "></i>
                <p className="xl:mr-2">Login</p>
                <i className="ri-arrow-down-s-line cursor-pointer xs:hidden lg:inline hover:rotate-180 duration-100"></i>
              </div>
            </NavLink>
          </div>
          <div className="utilities flex items-center xs:ml-1 sm:ml-2 lg:ml-3">
            <NavLink to={"cart"}>
              <div className="cart cursor-pointer flex items-center">
                <i class="ri-shopping-cart-line lg:mr-1 xl:mr-2"></i>
                <p>Cart</p>
              </div>
            </NavLink>
            <NavLink to={"becomeaseller"}>
              <div className="become-seller flex items-center xs:ml-1 sm:ml-2 lg:ml-3 ">
                <i class="ri-store-2-line cursor-pointer"></i>
                <p className="xs:hidden xl:inline ml-2 mr-2">Become a Seller</p>
              </div>
            </NavLink>
            <div className="menu xs:ml-1 md:ml-0 lg:ml-2 xl:ml-0 cursor-pointer">
              <img
                src={
                  "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg"
                }
                alt="menu"
                className="border-2 rounded-md border-white hover:border-gray-400"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
