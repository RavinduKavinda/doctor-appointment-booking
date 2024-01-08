/* eslint-disable react/prop-types */
import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const ProtectRoute = ({ children, allowedroles }) => {

    const { token, role } = useContext(authContext);
    const isAllowed = allowedroles.includes(role);

    const accessRoute = 
        token && isAllowed ? children : <Navigate to="/login" replace={true} />

  return accessRoute;
}

export default ProtectRoute;