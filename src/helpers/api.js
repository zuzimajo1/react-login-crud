import axios from "axios";
import { toast } from "react-toastify";
import { DeleteUser } from "../redux/reducers/usersRedux";

const Base_URL = "https://entrance-exam-crud.herokuapp.com/";


const apiRequest = async (path, config = {})=>{
    const token = localStorage?.getItem("token");
    const request = {
      url: `https://entrance-exam-crud.herokuapp.com/${path}`,
      ...config,
    };

    if(token){
        request.headers['token'] = `Bearer ${token}`
    }

    const res = await axios(request);
    let data = null;
    try {
      data = res.data;
    } catch (error) {}
    return data;
}

const publicRequest = axios.create({
    baseURL: Base_URL
})


export const LoginUser = async ({email, password})=>{
    try {
        const res = await publicRequest.get(`auth?email=${email}&password=${password}`);
        let data = res.data;
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
         toast.error(error.response.data.message);
    }

}

export const GetAllUsers = async ()=>{

    const res = apiRequest("users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;

}

export const UpdateUser = async (id, Data)=>{

    const res = apiRequest(`users/${id}`, {
      method: "PATCH",
      data: Data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;


}

export const CreateNewUser = async (Data)=>{
     const res = apiRequest("auth", {
       method: "POST",
       data: Data,
       headers: {
         "Content-Type": "application/json",
       },
     });
      return res;
}

export const DeleteUserByAdmin = async (dispatch, id)=>{

    const res = apiRequest(`users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(DeleteUser(id));
    return res;

} 




