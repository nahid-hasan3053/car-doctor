import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id, title, price, img} = service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='' src={img} alt="" /></figure>
                <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">{title}</h2>
                        <p className='text-2xl mt-4 font-semibold text-orange-600'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-primary' type="button"> <Link to={`/checkout/${_id}`}>Checkout</Link></button>
                    </div>
                </div>
        </div>
    );
};

export default ServiceCard;