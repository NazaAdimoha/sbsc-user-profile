import React, { useState, useEffect } from 'react';
import AuthInput from '../authInput/AuthInput';
import AuthForm from '../form/AuthForm';
import axios from 'axios';
import Swal from 'sweetalert';
import AuthButton from '../authButton/AuthButton';

const AuthLeft = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
      e.prevent.default();
    };

  return (
    <div>
      <AuthForm onSubmit={handleSubmit}>
        <AuthInput 
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />
      </AuthForm>
      <AuthButton text="Register" />
    </div>
  )
}

export default AuthLeft