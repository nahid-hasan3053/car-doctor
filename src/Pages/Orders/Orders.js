import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {

    const {user} = useContext(AuthContext)
    const [orders, setOrder] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[user?.email])

    const handleDelete = id =>{
        const agree = window.confirm('are you sure to delelte this service')
        if(agree){
            fetch(`http://localhost:5000/service/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
            })
            .catch(error => console.log(error))

        }

    }

    return (
        <div>
            <h1>You have{orders.length} order</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <button className='btn btn-ghost'>X</button>
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} handleDelete={handleDelete} order={order}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;