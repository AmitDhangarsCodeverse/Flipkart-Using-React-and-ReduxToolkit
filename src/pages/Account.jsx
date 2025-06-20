import { useLocalStorage } from "../hooks/useLocalstorage";
import { useNavigate } from "react-router-dom";
const Account = ({storedValue,setValue}) => { 
 const navigate=useNavigate();
 const logoutdetails=null;
 const logout=()=>{
     setValue(logoutdetails);
 }
 return (
  <div className="account-wrapper flex justify-center bg-white rounded-lg shadow-md shadow-gray-400 border border-blue-200 xs:m-1 xs:p-2.5 md:m-2 lg:m-3">
   <div className="account-details flex flex-col items-center border rounded-md border-blue-300 shadow-sm shadow-blue-300">
    <div><img src="https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg" alt="" className="xs:h-7 rounded-full mb-1 md:h-12 lg:h-28" /></div>
    <div className="xs:py-3 p-3 mb-2 md:py-5 md:p-5">
     <p className="xs:py-1">Username : {storedValue.username}</p>
     <p className="xs:py-1">Password : {storedValue.password}</p>
     <p className="xs:py-1">Address : {"Flipkart Software Private Limited"}</p>
    </div>
    <div className="xs:mb-1.5 md:mb-1.5 lg:mb-2">
     <button onClick={()=>navigate(-1)} className="bg-yellow-400 rounded-sm xs:p-1 xs:px-2 mr-5"><i class="ri-arrow-left-line"></i> Back</button>
     <button onClick={logout} className="bg-red-400 rounded-sm xs:p-1"><i class="ri-door-open-line"></i> Log out</button>
    </div>
   </div>
  </div>
 );
}
 
export default Account;