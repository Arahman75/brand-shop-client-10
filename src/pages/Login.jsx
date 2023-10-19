import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                // console.log(result);
                toast.success('User login successfully');

                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                // console.log(result);
                toast.success('User login successfully');
                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <button onClick={handleGoogleLogin} type='submit' className="btn btn-primary">Google</button>
                        </div>

                        <p className='mt-4'>Are you new Automotive? Please <Link className='text-blue-600 font-semibold' to="/signup">Sign Up</Link></p>

                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;