import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext)

    const handlePlaceOrder = event =>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregisterd'
        const message = form.message.value;
        const phone = form.phone.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            email,
            customer: name,
            phone,
            message
        }
        fetch('http://localhost:5000/orders',{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
        
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('order placed successfully')
                form.reset();
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handlePlaceOrder}>
            <h3 className='text-4xl text-center font-semibold'>You are about to order: <br />{title}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 mt-6'>
                <input name="firstName" placeholder="First Name" className="input input-bordered input-info w-full" />
                <input name="lastName" placeholder="Last Name" className="input input-bordered input-info w-full" />
                <input name="email" placeholder="Enter Your Email" defaultValue={user?.email} className="input input-bordered input-info w-full" />
                <input name="phone" placeholder="Enter Your Phone" className="input input-bordered input-info w-full" />
            </div>
            <textarea name="message" placeholder='Enter your message' className='input input-bordered' id="" cols="30" rows="10"></textarea>
            <br />
            <button className='btn btn-primary text-white mt-6 mb-10'>Place Your Order</button>
        </form>
    );
};

export default Checkout;