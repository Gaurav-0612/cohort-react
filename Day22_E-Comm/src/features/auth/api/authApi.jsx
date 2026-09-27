import { api } from "../../../config/api"

export const loginUserApi =async (credentials)=>{
    try {
        let res = await api.post("/auth/login",credentials)
        return res.data;
    } catch (error) {
        console.log("error is ", error)
    }
}