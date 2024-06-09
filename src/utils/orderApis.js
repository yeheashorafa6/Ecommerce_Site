const { default: axiosClient } = require("./axiosClient");

const CreateOrderData = (data)=> axiosClient.post("/orders" , data)


export default {
    CreateOrderData,

}