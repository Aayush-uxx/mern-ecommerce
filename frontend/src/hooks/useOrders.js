import { createOrder,getAllOrders,getUserOrder } from "@/services/orderService";
import { useState } from "react";
import toast from "react-hot-toast";

const useOrders=()=>{
    const [loading,setLoading]= useState(false);
    const [orders,setOrders]=useState([]);
    const fetchMyOrders = async()=>{
        setLoading(true);
        try{
            const data = await getUserOrder();
            setOrders(data);
        }catch(error){
            toast.error("Failed to fetch orders !")
        }finally{
            setLoading(false);
        }
    }
    const fetchAllOrders = async()=>{
        setLoading(true);
        try{
            const data = await getAllOrders();
            setOrders(data);
        }catch(error){
            toast.error("failed to fetch the orders");
        }finally{
            setLoading(false);
        }
    };
    const handleCreateOrder =async(orderData)=>{
        setLoading(true);
        try{
            const data = await createOrder(orderData);
            toast.success("Order created successfully !")
            setOrders(data);
        }catch(error){
            toast.error("Failed to create Order !")
        }finally{
            setLoading(false);
        }
    };
    return {fetchMyOrders,fetchAllOrders,handleCreateOrder,loading,orders};
}

export default useOrders;