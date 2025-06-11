import { useEffect, useState } from 'react';
import {getProduct} from '../services/getProducts'
import Loading from './loader';
const PopularDeals = () => {
 const [product,setproduct]=useState();
 const[error,seterror]= useState();
 const[loading,setloading]=useState(true);
 const FetchingProducts=async()=>{
   try{
   let products= await getProduct();
   setproduct(products.data.splice(3,12));   
   console.log(products.data);
   
 }catch(err){
  seterror("Products are not fetched due to some error")
 }
 finally{
  setloading(false);
 }
 }
 useEffect(()=>{
  FetchingProducts();
 },[]);
 return (<>
 <div className="popular-deals bg-white xs:m-1 lg:m-1 xl:m-3">
  <h1 className='text-start font-semibold xs:py-1 px-2'>For You</h1>
  <div className="products-container flex flex-wrap items-center justify-evenly">
   {loading && <Loading/>}
   {error && <p className='error xs:pb-4 flex justify-center items-center flex-col'> 
    <img src="https://cdn-icons-png.freepik.com/512/9474/9474058.png" alt="" className='h-10' />
    {error}</p>}
  {product && product.map((prod)=>(
    <div className="product border-2 border-red-100 rounded-md flex justify-center items-center flex-col xs:px-1 py-1 m-1 " key={prod.id}>
     <img src={prod.images[0]} alt={prod.slug} className='rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40'/>
     <p className='product-title p-1'>{prod.title.slice(0,12)+".."}</p>
     <p className='product-price text-black font-semibold'>Under ₹{prod.price}</p>
    </div>
  ))}
  </div>
 </div>
 </>);
}
 
export default PopularDeals;