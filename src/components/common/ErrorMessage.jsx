import React from "react";

const ErrorMessage = ({ message }) => {

  if (!message) return <></>
  
  return <p className="">{message}</p>;
};

export default ErrorMessage;
