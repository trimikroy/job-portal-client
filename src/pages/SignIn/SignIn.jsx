import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import signInLottieData from '../../assets/lottie/SignIn.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogIn from '../shared/SocialLogIn';
import { useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';


    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //password validation : 

        signInUser(email, password)
        .then(result => {
            console.log('sign In', result.user)
            navigate(from);
        })
        .catch(error => {
            console.log(error);
        })

       
       
    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signInLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-4xl font-bold ml-7 mt-4">Sign-In Now </h1>

                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SingIn</button>
                        </div>
                    </form>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default SignIn;