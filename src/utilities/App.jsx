import Categories from '../components/categories';
import Carousel from '../components/carosel';
import NavBar from '../components/navbar';
import '../styles/App.css';
import PopularDeals from '../components/populardeals';
function App() {
  return (
    <>
      <NavBar/>
      <Categories/>
      <Carousel/>
      <PopularDeals/>
    </>
  )
}

export default App
