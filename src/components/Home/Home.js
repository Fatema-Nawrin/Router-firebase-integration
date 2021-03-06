import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>Home page</h2>
            <p>{user ? user.displayName : "Nobody is logged in"}</p>
        </div>
    );
};

export default Home;