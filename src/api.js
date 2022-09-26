import { alertRegisterSuccess, registerFailureAlert, registerSuccessAlert } from "./utils/alert";

let url = process.env.REACT_APP_BASE_URL;

export const registerUser =  (formDetails) => {
  return fetch(`${url}/api/register`, {
    method: "POST",
    body: JSON.stringify(formDetails),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
}

// export const registerUser = async (formDetails) => {
//   try {
//     const response = await fetch(`${url}/api/register`, {
//       method: "POST",
//       body: JSON.stringify(formDetails),
//       headers: {
//         "Content-type": "application/json",
//         Accept: "application/json",
//       },
//     });

//     // store response in local storage
//     const data = await response.json();
//     const { token, id } = data;
//     localStorage.setItem("token", token);
//     localStorage.setItem("id", id);
//     registerSuccessAlert();
//     console.log("response", response);
//     // return response.json();
//   } catch (error) {
//     registerFailureAlert();
//   }
// };

export const loginUser = async (formDetails) => {
  try {
    let response = await fetch(`${url}/api/login`, {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${token}`
      },
    });
    
    const data = await response.json();
    const { token } = data;
    localStorage.setItem("token", token);
    localStorage.setItem("user-info", JSON.stringify(response));
  } catch (error) {
    return error.json();
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${url}/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: ``,
      },
    });
    localStorage.removeItem("token");
    return await response.json();
  } catch (error) {
    return "";
  }
};
