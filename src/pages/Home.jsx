import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import { authSchema } from "./auth/authSchema";
import ErrorMessage from "../components/common/ErrorMessage";
import Navbar from "../components/common/Navbar";

const Home = () => {
  const { authRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (data) => {
    authRegister(data);
  };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 gap-x-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-[3em] mb-1 font-medium title-font">
              Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  {...register("email")}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>

                <input
                  {...register("password")}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <ErrorMessage message={errors.password?.message} />
              </div>

              <div className="flex justify-between">
                <input
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                />
                <Link to="/Login" className="ml-10 mt-2">
                  Login
                </Link>
              </div>
            </form>
          </div>
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"></div>
        </div>
      </section>
    </>
  );
};

export default Home;