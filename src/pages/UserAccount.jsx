import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";


const UserAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const user = async () => {
      const response = await fetch("https://reqres.in/api/users/2", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });

      // console.log(response);

      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setFirstName(data.data.first_name);
        setLastName(data.data.last_name);
        setEmail(data.data.email);
        setImage(data.data.avatar);
      }
    };
    user();
  }, [firstName, lastName, email, image]);

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <h1 className="text-3xl text-neutral-700 font-medium ml-12">User Account</h1>
        <div className="container px-5 py-24 gap-x-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="w-1/3">
            <img src={image} alt="avatar" className="rounded-md w-full" />
          </div>
          <form>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                value={email}
                onChange={() => {}}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                value={firstName + " " + lastName}
                onChange={() => {}}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </form>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default UserAccount;
