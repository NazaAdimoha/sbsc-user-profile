import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authSchema } from "../../pages/auth/authSchema";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";


const RegisterForm = () => {
  const navigate = useNavigate();
  const { state, register: authRegister } = useContext(AuthContext)

  
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
    if (state.token) {
      navigate("/content");
    }
  }, [state.token, navigate])
  
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
