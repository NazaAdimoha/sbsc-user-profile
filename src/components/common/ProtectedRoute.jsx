import { React } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getToken } from "../../utils/token";


function PrivateRoute({ children }) {
const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

PrivateRoute.propTypes = {
  //   component: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default PrivateRoute