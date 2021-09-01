import axios from 'axios';
import { API_URL, API_HEADERS } from './Config';

function AuthServices() {

    const userLogin = async (credentials) => {
        console.log(`Sending request`);
        return axios.post(`${API_URL}/login`,
            JSON.stringify(credentials),
            { headers: API_HEADERS }
        ).then(res => res.data);
    }

    const userLogout = async (token) => {
        console.log(`Sending request`);
        return axios.post(`${API_URL}/logout?token=${token}`,
            {
                headers: {
                    ...API_HEADERS,
                    "Authorization": `Bearer ${token}`,
                }
            }).then(res => res.data);
    }

    return {
        userLogin,
        userLogout
    }
}

export default AuthServices
