import React from 'react';
import AuthRight from '../../components/authRight/AuthRight';
import RegisterForm from '../../components/form/RegisterForm';

const Register = () => {
  return (
    <div>
    <div style={{display: "flex", width: "100%", height: "100%"}}>
      <div
        style={{
          flex: "5",
          padding: "3rem",
        }}
      >
        <RegisterForm />
      </div>
      <div
        style={{
          flex: "7",
        }}
      >
        <AuthRight />
      </div>
    </div>
  </div>
  )
}

export default Register