import { useLocalstorage } from "../hooks/useLocalstorage";
const Sample= () => {
 
const {savedData,SetValue,removeValue}=useLocalstorage("Name","");
console.log(savedData);
 removeValue("Name");

 const fun=()=>{
  SetValue("Sdsada");
 }
 return (<>
 <p>Welcome to the Sample page for logic building</p>
 <button onClick={fun}>click</button>
 </>);
}
 
export default Sample;