import axios from 'axios';
// Axios Instance
const storeAPI=axios.create({
 baseURL:"https://api.escuelajs.co/api/v1/",
});

// to get products
export const getProduct=()=>{
   return storeAPI.get("/products");
};

// to get categories
export const getCategories=()=>{
 return storeAPI.get("/categories");
};

// to get Product Detail
export const getProductDetail=()=>{
 return storeAPI.get("/products/category/jewelery");
}