import React, { useContext, useEffect } from "react";
import { registerUser } from "../../api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../../pages/auth/authSchema";
import { getToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";


const RegisterForm = () => {
  const navigate = useNavigate();
  const { state, register: authRegister } = useContext(AuthContext)
  const token = getToken();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (data) => {
    authRegister(data)
  }
  ;
  useEffect(() => {
    if (token) {
      navigate("/content");
    }
  }, [token, navigate])
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
        <input {...register("password")} />
        <p className="red">{errors.password?.message}</p>
        <input type="submit" />

      </form>
    </div>
  );
};

export default RegisterForm;
