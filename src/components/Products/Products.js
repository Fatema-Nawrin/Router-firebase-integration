import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2> {user ? `This is the product list of ${user.displayName}` : "Nobody is logged in"}</h2>

        </div>
    );
};

export default Products;