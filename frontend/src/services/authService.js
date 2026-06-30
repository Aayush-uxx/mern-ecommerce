import API from "../lib/axios";
export const loginUser = async(email,password)=>{
    const {data} = await API.post("/api/auth/login",{email,password});
    return data;
};
export const register = async(name,email,password)=>{
    const {data} = await API.post("/api/auth/register",{name,email,password});
    return data;
};