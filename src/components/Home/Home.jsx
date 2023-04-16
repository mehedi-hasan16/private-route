import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

const Home = () => {
    const user = useContext(authContext);
    return (
        <div>
            this is home { user && user.fullname}
        </div>
    );
};

export default Home;