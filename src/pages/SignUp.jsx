import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // validation
        if (password.length < 6) {
            toast.success("password should be at least 6 character.")
            return;
        }

        createUser(email, password)
            .then(result => {
                // console.log(result);
                toast.success('User create successfully');
                navigate('/');
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                // console.log(result.user);
                toast.success('User login successfully');
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Sign Up</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                            <button type='submit' className="btn btn-primary">Sing Up</button>
                        </div>

                        <div>
                            <button onClick={handleGoogleLogin} type='submit' className="btn btn-primary">Google</button>
                        </div>

                        <p className='mt-4'>Already have an account? Please <Link className='text-blue-600 font-semibold' to="/login">Login</Link></p>

                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default SignUp;