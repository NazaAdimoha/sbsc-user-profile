import React from 'react';
import AuthLeft from '../../components/loginAuth/authLeft';
import AuthRight from '../../components/loginAuth/authRight';


const Login = () => {
  return (
    <div>
    <div style={{display: "flex", width: "100%", height: "100%"}}>
      <div
        style={{
          flex: "5",
          padding: "3rem",
        }}
      >
        <AuthLeft />
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

export default Login