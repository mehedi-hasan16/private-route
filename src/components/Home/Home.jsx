import React, { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';

const Home = () => {
    const {user} = useContext(authContext);
    return (
        <div className='text-5xl'>
            Hi, user email is:  { user && user.email}
        </div>
    );
};

export default Home;