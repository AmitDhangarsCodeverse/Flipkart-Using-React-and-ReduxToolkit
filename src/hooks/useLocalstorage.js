import { useEffect,useState } from "react";
export const useLocalstorage=(key,InitialValue)=>{
 const [savedData,setsaveddata]=useState(()=>{
        try{
         const data=localStorage.getItem(key);
         return data ? JSON.parse(data):InitialValue;
        }catch(err){
         console.log("Error While getting Item from Localstorage",err);
         return InitialValue;
        }
 });
  useEffect(()=>{
      try{
       localStorage.setItem(key,JSON.stringify(savedData));
      }
      catch{
       console.log("Error While setting Item from Localstorage",err);
      }
  },[key,savedData]);
  
  const setValue=(value)=>{
     setsaveddata(value);
  }
  const removeValue=()=>{
   try{
     localStorage.removeItem(key);
   }
   catch(err){
    console.log("Error While Removing Item from Localstorage",err);
   }
  }
 return{savedData,setValue,removeValue};
};