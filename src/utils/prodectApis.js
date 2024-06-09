const { default: axiosClient } = require("./axiosClient")


const getLatestProdects = ()=> axiosClient.get("/products?populate=*")
const getProdectById = (id)=> axiosClient.get(`/products/${id}?populate=*`)
const getProdectsByCategory = (category)=> axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)





export default{
    getLatestProdects , 
    getProdectById,
    getProdectsByCategory
}