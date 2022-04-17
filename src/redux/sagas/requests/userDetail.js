import axios from "axios";
import { API_URL, API_HEADERS } from "../../../services/Config";

export function requestGetUserDetail({id}) {
    console.log("Making request");
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return axios.get(`${API_URL}/user/${id}`, {
        headers: { ...API_HEADERS, "Authorization": `Bearer ${userToken.token}` }
    })
}