import React from "react";

const ErrorMessage = ({ message }) => {

  if (!message) return <></>
  
  return <p className="text-red-600 text-sm">{message}</p>;
};

export default ErrorMessage;
