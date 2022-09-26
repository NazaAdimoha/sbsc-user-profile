import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

export const register = async (
    email,
    password,
    confirmPassword) => {

    try{
        const formDetails = {
            email,
            password,
            confirmPassword
        }
        const response = await axios.post(`${url}/api/register`, formDetails);
        // store response in local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, password) => {
    
    try {
        const response = await axios.post(`${url}/api/login`, {
            headers: {
                "Content-type": "application/json",
                // Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({
                email,
                password
              }),
        });
        return response.json();
    } catch (error) {
        return error.json();
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
