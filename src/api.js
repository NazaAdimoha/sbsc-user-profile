import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

export const register = async (
    email,
    password,
    confirmPassword) => {
    try{
        const response = await axios.post(`${url}/api/register`, {
            headers: {
                "Content-type": "application/json",
                // authorization: token
              },
              body: JSON.stringify({
                email,
                password,
                confirmPassword
              }),

        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, password) => {
    let token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${url}/api/login`, {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                email,
                password
              }),
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const logout = async () => {
    try {
        const response = await axios.post(`${url}/api/logout`, {
           headers: {
                "Content-type": "application/json",
                Authorization: ``
           } 
        });
        return await response.json();
    } catch (error) {
        return ""
    }
};
