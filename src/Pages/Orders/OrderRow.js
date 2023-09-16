import React, { useEffect, useState } from 'react';

const OrderRow = ({order, hadnleDelete}) => {

    const {serviceName, customer, phone, price, email, _id, service} = order
    const [orderService, setOrderService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    },[service])

    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button onClick={()=> hadnleDelete(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="w-32 rounded">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="" />
                            }
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br/>
                    <span className="badge badge-ghost badge-sm">${price}</span>
                </td>
                    <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default OrderRow;