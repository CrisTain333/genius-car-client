import React from "react";

const OrderRow = ({data,handleDelete}) => {
  const { serviceName, img, price , _id} = data;
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <button className="btn btn-circle btn-error mr-2 lg:mr-5" onClick={()=>{handleDelete(_id)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="w-24">
              <img src={img} className=" rounded" alt={serviceName} />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap font-semibold">{serviceName}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">${price}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-red-500  rounded-full"
            ></span>
            <span className="relative text-white">Pending</span>
          </span>
        </td>
      </tr>
    </>
  );
};

export default OrderRow;
