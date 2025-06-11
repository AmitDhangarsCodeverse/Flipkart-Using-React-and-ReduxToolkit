import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../contexts/username";
import { useNavigate } from "react-router-dom";
import { useLocalstorage } from "../hooks/useLocalstorage";
const Login = () => {
  const navigate = useNavigate();
  const {setlogged } = useContext(LoginContext);
  const user = {
    username: "",
    password: "",
  };
  const [formdata, setformdata] = useState(user);
  const [error, seterror] = useState();
  const {savedData,setValue}=useLocalstorage(formdata.username);
  
  const Errorhandling = () => {
    const err = {};
    if (!formdata?.username.trim()) {
      err.name = "Enter your username First";
    } else if (!formdata?.password) {
      err.password = "Enter your password First";
    }
    seterror(err);
  };

  const Handlesubmit = (e) => {
    e.preventDefault();
    Errorhandling();
    if (formdata.password) {
      setlogged(formdata, (formdata.auth = true),savedData);
      setValue(formdata);
      navigate("/");
    }
  };

  const Handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="signup-wrapper flex justify-center items-center  bg-white xs:m-1 xs:p-2 md:m-2 lg:m-3">
        <div className="login flex">
          <div className="left-side-form bg-blue-500 flex flex-col items-start rounded-md xs:p-2">
            <h1 className="text-white text-left">Login</h1>
            <p className="text-gray-200 xs:py-1">
              Get access to your Orders, Wishlist and Recommendations
            </p>
            <div className="logo-img ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/049/401/761/non_2x/flipkart-icon-transparent-background-free-png.png"
                alt=""
                className="xs:h-16 sm:h-28 md:h-34 lg:h-40"
              />
            </div>
          </div>
          <form action="">
            <div className="right-side-form p-2 rounded-md bg-white flex flex-col">
              <label htmlFor="">Enter Username</label>
              <input
                type="text"
                name="username"
                className=" outline-none xs:h-3 border-b-2 rounded-md p-1 sm:h-4 md:h-8"
                value={formdata.username}
                onChange={Handlechange}
                placeholder="Enter Your Username"
              />
              {error && <p className="error">{error.name}</p>}
              <label htmlFor="">Enter Password</label>
              <input
                type="password"
                name="password"
                className=" outline-none xs:h-3 border-b-2 rounded-md p-1 sm:h-4 md:h-8"
                value={formdata.password}
                onChange={Handlechange}
                placeholder="Enter Password"
              />
              {error && <p className="error">{error.password}</p>}
              <p className="caution">
                By continuing, you agree to Flipkart's{" "}
                <a href="" className="text-blue-500">
                  Terms
                </a>{" "}
                of Use and{" "}
                <a href="" className="text-blue-500">
                  Privacy Policy
                </a>
              </p>
              <div
                className="continuebtn bg-orange-500 uppercase text-center mb-2 rounded-sm mt-2 p-1"
                onClick={Handlesubmit}
              >
                <p className="cursor-pointer">Login</p>
              </div>
              <div className="Createnewbtn bg-slate-100">
                <Link to={"/signup"}>
                  <p className="text-blue-600 text-center rounded-sm p-1">
                    New User ? Sign Up
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
