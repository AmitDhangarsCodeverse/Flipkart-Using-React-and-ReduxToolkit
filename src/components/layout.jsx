import Categories from "../components/categories";
import Carousel from "../components/carosel";
import NavBar from "../components/navbar";
import "../styles/App.css";
import PopularDeals from "../components/populardeals";
import Miscellaneous from '../components/miscellanceous';
import ProductsByCategories from '../components/ProductsByCategories';
import Footer from '../components/footer';
const Layout = () => {
  return (
    <>
      <Categories />
      <Carousel />
      <PopularDeals />
      <ProductsByCategories/>
      <Miscellaneous/>
    </>
  );
};

export default Layout;
