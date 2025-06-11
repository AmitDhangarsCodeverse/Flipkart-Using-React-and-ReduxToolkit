import { Link } from "react-router-dom";
const Signup = () => {
 return (<>
 <div className="signup-wrapper bg-white flex justify-center items-center p-12 xs:m-1 xs:p-2 md:m-12 lg:m-3">
  <div className="signup flex h-auto">
   <div className="left-side-form bg-blue-500 flex flex-col items-start rounded-md xs:p-2 sm:p-3 lg:p-4">
  <h1 className="text-white">Looks like you're new here!</h1>
  <p className="text-gray-200 xs:py-1">Sign up with your mobile number to get started</p>
  <div className="logo-img">
   <img src="https://images.ctfassets.net/drk57q8lctrm/4QgGDTtQYDx6oDaW3aU7KS/34163f3bef6d82fd354a7455d07102eb/flipkart-logo.webp" alt="" className="xs:h-5  mt-2 m    sm:h-10 md:h-12 lg:h-16 xl:h-20 2xl:h-24"/>
  </div>
  </div>
  <div className="right-side-form p-2 rounded-md flex flex-col bg-white">
   <label htmlFor="">Enter Username</label>
   <input type="text" className="border-b-2 rounded-lg outline-none h-8 pl-2"/>
   <label htmlFor="">Enter Mobile Number</label>
   <input type="text" className=" outline-none xs:h-3 border-b-2 rounded-md p-1 sm:h-4 md:h-8"/>
   <p className="caution">By continuing, you agree to Flipkart's <a href="" className="text-blue-500">Terms</a> of Use and <a href="" className="text-blue-500">Privacy Policy</a></p>
   <div className="continuebtn bg-orange-500 uppercase text-center mb-2 rounded-sm mt-2 p-1"><p className="cursor-pointer">continue</p></div>
   <Link to="/login">
    <div className="existingbtn bg-slate-100"><p className="text-blue-600 text-center rounded-sm p-1">Existing User?Login in</p></div>
   </Link>
   </div>
  </div>
 </div>
 </>);
}
 
export default Signup;