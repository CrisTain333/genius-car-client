import React from 'react'
import { FaStar } from "react-icons/fa";
const ProductCard = (props) => {
    const {name,img,price} =  props.data
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
    <article className="overflow-hidden rounded-lg shadow-lg ">
      <div className='p-3'>
      <img
        alt="ServiceImage"
        className="block w-full rounded-md h-60"
        src={img}
      />
      </div>
      <div  className="flex items-center justify-center text-yellow-400" >
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      </div>
      <header className="flex items-center justify-center leading-tight ">
        <h1 className="text-lg font-bold ">{name}</h1>
      </header>
      <footer className="flex items-center justify-center leading-none p-1 md:p-2">
        <p className="ml-2 text-base font-semibold  text-red-500">
          Price : ${price}
        </p>
      </footer>
    </article>
  </div>
  )
}

export default ProductCard