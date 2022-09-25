import React from "react";
import AuthLeft from "../components/authLeft/AuthLeft";
import AuthRight from "../components/authRight/AuthRight";
import "./AuthBody.css";

const AuthBody = () => {
  return (
    <div>
      <div>
        <div
          style={{
            flex: "1",
            margin: "2rem 4rem",
          }}
        >
          <AuthLeft />
        </div>
        <div
          style={{
            flex: "1",
          }}
        >
          <AuthRight />
        </div>
      </div>
    </div>
  );
};

export default AuthBody;
