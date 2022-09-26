import React, { useState, useEffect } from "react";
import AuthInput from "../authInput/AuthInput";
import AuthForm from "../form/AuthForm";
import Swal from "sweetalert2";
import AuthButton from "../authButton/AuthButton";
import { register } from "../../api";

const AuthLeft = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.prevent.default();
    if (password !== confirmPassword) { 
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and confirm password do not match!",
      });
      
    }
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long!",
      });
      return;
    }
    if (password.length > 20) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at most 20 characters long!",
      });
      
    }
    if (email.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email must be at least 6 characters long!",
      });
      
    }
    if (email.length > 20) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email must be at most 20 characters long!",
      });
      
    }
    if(!email.includes("@")){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email must be valid!",
      });
      
    }
    if (password.includes(" ")) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must not contain spaces!",
      });
      
    }
    if (email.includes(" ")) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email must not contain spaces!",
      });
      return;
    }
    if(!email.includes(".")){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email must be valid!",
      });
    
    }

    try {
      const resp = await register(
        formData.email,
        formData.password,
        formData.confirmPassword,
      );
      const result = await resp.json();
      console.log(result);
      if (result.status === "success") {
        Swal.fire({
          position: "top",
          title: "Success",
          icon: "success",
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: "Signup successful",
          denyButtonColor: "#93d413",
          html: "Signup successful",
          footer: `<a href="/login">Go to login</a>`,
        });
      } else {
        Swal.fire({
          position: "top",
          title: "Error",
          icon: "error",
          showConfirmButton: false,
          showDenyButton: true,
          denyButtonText: "Something went wrong",
          denyButtonColor: "#93d413",
          html: "Signup failed",
          footer: `<a href="/login">Go to login</a>`,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top",
        title: "Error",
        icon: "error",
        showConfirmButton: false,
        showDenyButton: true,
        denyButtonText: "Something went wrong",
        denyButtonColor: "#93d413",
        html: "Signup failed",
        footer: `<a href="/login">Go to login</a>`,
      });
    }
  };

  return (
    <div>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your email"
        />
        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your password"
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
          placeholder="Confirm your password"
        />
        <AuthButton text="Register" />
      </AuthForm>
    </div>
  );
};

export default AuthLeft;
