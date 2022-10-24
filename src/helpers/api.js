import axios from "axios";
import { toast } from "react-toastify";
import { DeleteUser } from "../redux/reducers/usersRedux";
const Base_URL = "https://entrance-exam-crud.herokuapp.com/";

const auth2 = localStorage?.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).auth).auth : ""
let jsonwebtoken = auth2.token;

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

export const UpdateUser = async (id, Data)=>{
    try {
        const res = await adminRequest.patch(`users/${id}`, Data);
        let data = res.data;
        return data;
    } catch (error) {
         toast.error(error.response.data.message)
    }
}

export const CreateNewUser = async (Data)=>{
    try {
        const res = await publicRequest.post('auth', Data);
         let data = res.data;
         return data;
    } catch (error) {
         toast.error(error.response.data.message);
    }
}

export const DeleteUserByAdmin = async (dispatch, id)=>{
    try {
        const res = await adminRequest.delete(`users/${id}`);
        dispatch(DeleteUser(id))
        toast.done("User has been deleted!")
    } catch (error) {
         toast.error(error.reponse.data.message)
    }
} 




