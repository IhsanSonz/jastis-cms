import { useState } from "react";

export default function UserData() {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    const getUserData = () => {
        const localUserData = localStorage.getItem('user-data');
        const userData = JSON.parse(localUserData);
        return userData?.data;
    };

    const [token, setToken] = useState(getToken());
    const [userData, setUserData] = useState(getUserData());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const saveUserData = loginData => {
        localStorage.setItem('user-data', JSON.stringify(loginData));
        setUserData(loginData.data);
    };

    const destroyToken = () => {
        localStorage.removeItem('token');
    }

    const destroyUserData = () => {
        localStorage.removeItem('user-data');
    }

    return {
        setToken: saveToken,
        token,
        destroyToken,
        setUserData: saveUserData,
        userData,
        destroyUserData,
    };
}