const { default: axiosClient } = require("./axiosClient");

const addToCart = (payLoad) => {
  return axiosClient.post("/carts", payLoad);
};

const getUserCartItems=(email)=>axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)

const deleteCartItem=(id)=>axiosClient.delete(`/carts/${id}`)

export default {
  addToCart,
  getUserCartItems,
  deleteCartItem,
};
