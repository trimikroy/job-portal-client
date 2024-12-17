import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogIn = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='p-6'>
            <div className="divider">OR</div>
            <button onClick={handleWithGoogle} className='btn w-full'>Sign In With Google</button>
        </div>
    );
};

export default SocialLogIn;