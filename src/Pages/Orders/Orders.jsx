
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Contexts/Context';
import OrderRow from './OderRow/OrderRow';

const Orders = () => {
    const [orders,setOrders]=useState([])
const {user} = useContext(UserContext); 

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user?.email])

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remainingOrders = orders.filter(o => o._id !== id)
                setOrders(remainingOrders);
            }
        })
    }


    return (
        <div>
            <div className="container mx-auto">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Total Orders : {orders.length}</h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Orders
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Price
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(e=>{
                                    return(
                                        <OrderRow key={e._id} handleDelete={handleDelete} data={e}/>
                                    )
                                })
                                
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Orders;