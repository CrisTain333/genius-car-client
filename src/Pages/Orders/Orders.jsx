import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/Context";
import OrderRow from "./OderRow/OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user, singoutUser } = useContext(UserContext);

  useEffect(() => {
    fetch(` https://genius-car-server-nine-pi.vercel.app/orders?email=${user?.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('genius-token')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return singoutUser();
            }
            return res.json();
        })
        .then(data => {
            setOrders(data);
        })
}, [user?.email, singoutUser])

  const handleDelete = (id) => {
    fetch(` https://genius-car-server-nine-pi.vercel.app/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingOrders = orders.filter((o) => o._id !== id);
          setOrders(remainingOrders);
        }
      });
  };
  const handleStatusUpdate = (id) => {
    fetch(` https://genius-car-server-nine-pi.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="py-8">
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Total Orders : {orders?.length}
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Orders
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((e) => {
                    return (
                      <OrderRow
                        key={e._id}
                        handleDelete={handleDelete}
                        data={e}
                        handleStatusUpdate={handleStatusUpdate}
                      />
                    );
                  })}
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
