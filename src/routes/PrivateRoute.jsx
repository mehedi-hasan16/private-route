import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user } = useContext(authContext);
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to='/login' replace={true}></Navigate>
        </div>
    );
};

export default PrivateRoute;