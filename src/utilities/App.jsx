import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { LoginContextProvider } from "../contexts/username";
function App() {
  return (
    <LoginContextProvider>
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>

    </LoginContextProvider>
  );
}

export default App;
