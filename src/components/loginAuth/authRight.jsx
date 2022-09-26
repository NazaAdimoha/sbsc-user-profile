import React from "react";
import profile from "../../assets/black.avif"

const AuthRight = (props) => {
  return (
    <div className="right">
      <div>
        <img
          src={profile}
          alt=""
          style={{
            height: "100vh",
            width: "100%",
            // top: "-75px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default AuthRight;