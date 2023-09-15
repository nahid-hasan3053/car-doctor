import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
    }

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 lg:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Submit" />
                            </div>
                        </form>
                        <p className='text-center'>New to this site? <Link className='font-bold text-orange-600' to='/signup'>please signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;