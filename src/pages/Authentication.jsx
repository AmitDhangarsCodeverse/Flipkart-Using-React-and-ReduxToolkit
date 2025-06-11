import { useEffect, useState } from "react";
import Account from '../pages/Account'
import Login from "./Login";
const Authenication = () => {
 return (<>
  <div className="Authentication-wrapper">
  {/* {userdata ? <Account userdata={userdata}/> : <Login/>} */}
  <Login/>
  </div>
 </>);
}
 
export default Authenication;