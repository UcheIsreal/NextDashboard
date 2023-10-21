import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/Data/Data.js'

const customers = () => {
  return (
  
    
   
    <div className='bg-gray-100 min-h-screen'>
       <div className='flex justify-between p-4 items-center ml-20 sm:ml-24 lg:ml-36'>
        <h2>Customers</h2>
        <h2>Welcome Back, Uche</h2>
       </div>
       <div className='p-4'>
        <div className='sm:w-[80%] w-[83%] mx-16 sm:mx-28 lg:mx-44 rounded-lg bg-white overflow-y-auto'>
          <div className=' sm:ml-12 lg:ml-24 my-3 p-2 grid sm:grid-cols-4 grid-cols-2  cursor-pointer'>
            <span className='px-2 text-xs '>Name</span>
            <span className='px-2 text-xs sm:text-left text-right'>Email</span>
            <span className='px-2 text-xs hidden sm:grid'>Last Order</span>
            <span className='px-2 text-xs hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) =>(
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'> 
                <div className='flex items-center '>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-2 text-sm'>
                    {order.name.first+ ' '+ order.name.last}
                  </p>
                </div>
                <p className='text-gray-600 sm:text-left text-right '>
                  {order.name.first}@gmail.com
                </p>
                <p className='hidden sm:flex pl-2'>
                  {order.date}
                </p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            )
            )}
          </ul>
        </div>
       </div>
    </div>
  )
  
}

export default customers