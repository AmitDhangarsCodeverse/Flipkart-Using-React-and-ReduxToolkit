import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { LoginContextProvider } from "../contexts/username";
import {ProductContextProvider} from '../contexts/productdetails'
function App() {
  return (
    <LoginContextProvider>
    <>
     <ProductContextProvider>
      <NavBar />
      <Outlet />
      <Footer/>
      </ProductContextProvider>
    </>

    </LoginContextProvider>
  );
}

export default App;
