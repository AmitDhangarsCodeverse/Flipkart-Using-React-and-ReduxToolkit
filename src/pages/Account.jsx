const Account = ({userdata}) => {
 return (
  <div className="account-wrapper">
   <div className="account-details">
    <h4>Welcome,{userdata.username}</h4>
    <p>username :{userdata.username}</p>
    <p>password:{userdata.password}</p>
    <button className="bg-red-200">Logout</button>
   </div>
  </div>
 );
}
 
export default Account;