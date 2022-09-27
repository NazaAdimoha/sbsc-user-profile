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

export const loginUser = async (formDetails) => {
  
    fetch(`${url}/api/login`, {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
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
