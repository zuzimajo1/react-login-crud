import axios from "axios";
import { toast } from "react-toastify";

const Base_URL = "http://localhost:5000/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const jsonwebtoken = user && JSON.parse(user)?.user?.token



const publicRequest = axios.create({
    baseURL: Base_URL
})

const adminRequest = axios.create({
    baseURL: Base_URL,
    headers:{
        token: `Bearer ${jsonwebtoken}`
    }
})

export const LoginUser = async ({email, password})=>{
    try {
        const res = await publicRequest.get(`auth?email=${email}&password=${password}`)
        let data = res.data;
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
}

export const GetAllUsers = async ()=>{
    try{
        const res = await adminRequest.get('users');
        let data = res.data;
        return data;
    }catch(error){
        toast.error(error.response.data.message);
    }
}






