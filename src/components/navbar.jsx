const NavBar= () => {
 return (<>
   <header className="container p-3 flex justify-between">
    <div className="logo-container">
     <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
    </div>
    <div className="search-bar">
     <i class="ri-search-line "></i>
     <input type="text" placeholder="Search for Products,Brands and More" />
    </div>
    <div className="utilities-section flex ">
     <div className="signup-section">
      <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
      <p className="uppercase">Alex</p>
      <i class="ri-arrow-down-s-line"></i>
     </div>
     <div className="utilities">
      <div className="cart">
       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
       <p>Cart</p>
      </div>
      <div className="become-seller ">
       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />
       <p>Become a Seller</p>
      </div>
      <div className="menu">
       <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
      </div>
     </div>
    </div>
   </header>
 </>);
}
 
export default NavBar;