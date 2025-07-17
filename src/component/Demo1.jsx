import React, { useEffect, useState } from 'react';
import axios from "axios"

function Demo1() {
  const [data, setData] = useState([]); // Correct useState syntax

  useEffect(() => {

    axios.get('https://dummyjson.com/products')
    .then((response)=>{
      const products = response.data.products;
      const randomIndex = Math.floor(Math.random()*products.length)
      const randomProducts = products[randomIndex];      
       setData(randomProducts)
    })

  }, []);

  return (
    <> 
          <div className=" w-[700px] border mx-auto mt-50 p-5 rounded-2xl ">
            <div className="text-center mt-4">
          <h2 className="text-3xl font-bold">{data.title}</h2>
          <p className='text-xl mt-2 text-neutral-500'>{data.description}</p>
          <img src={data.thumbnail} alt={data.title} className="mx-auto w-48 rounded" />
          <p className="text-green-600 font-semibold">Price: ${data.price}</p>
          <div className=" flex justify-center gap-10 mt-5">
            <button className='bg-black  px-4 py-2 text-white border-none rounded-lg cursor-pointer'>Buy Now</button>
              <button className='bg-black  px-4 py-2 text-white border-none rounded-lg cursor-pointer'>Add to Cart</button>

          </div>

        </div>  
          </div>
    </>
  )
}

export default Demo1;
