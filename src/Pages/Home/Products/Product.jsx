import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
  const [data,setData]= useState([]);
  useEffect(()=>{
    fetch(' https://genius-car-server-nine-pi.vercel.app/products')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
    return (
      <>
        <div className='py-5'>
        <p className="text-center  py-2 text-lg font-bold text-red-500">
        Popular Products{" "}
        </p>
        <h3 className="text-center text-3xl font-bold py-2">Browse Our Products</h3>
        <p className="text-base text-center text-gray-400 py-3">
          the majority have suffered alteration in some form, <br /> by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        </div>
        <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
            data.map(e=>{
              return(
          <ProductCard key={e._id} data={e}/>

              )
            })
          }
        </div>
        </div>

        </>
    );
};

export default Product;