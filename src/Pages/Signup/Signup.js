import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target;
        const email  = form.email.value;
        const password= form.password.value;
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 lg:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-14">
                    <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-success' type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link className='font-bold text-orange-600' to='/login'>please login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;