import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/Data/Data'

const orders = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-8 sm:px-20 pt-4'>
        <h2 className='pl-16 sm:pl-32'>Orders</h2>
        <h2 className='sm:pr-8'>Welcome Back, Uche</h2>
      </div>
      <div className='p-4'>
        <div className='sm:w-[80%] w-[76%] ml-20 sm:ml-32 lg:ml-44 sm:m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
          <span>Order</span>
          <span className='sm:text-left text-right'>Status</span>
          <span className='hidden md:grid'>Last Order</span>
          <span className='hidden md:grid'>Method</span>
        </div>
        <ul>
          {data.map((order, id) =>(
            <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
              <div className='flex'>
                <div className='bg-purple-100 p-3 rounded-lg'>
                  <FaShoppingBag className='text-purple-800' />
                </div>
                <div className='pl-4'>
                  <p className='text-gray-800 font-bold'>${order.total}</p>
                  <p className='text-gray-800 text-sm'>{order.name.first}</p>
                </div>
              </div>
              <p className='text-gray-600 sm:text-left text-right'>
                <span className={
                  order.status==='Processing' ? 'bg-green-200 p-2 text-xs rounded-lg' : order.status==='Completed' ? 'bg-blue-200 text-xs p-2 rounded-lg' : 'bg-yellow-200 text-xs p-2 rounded-lg'
                }>{order.status}</span>
              </p>
              <p className='hidden sm:flex'>{order.date}</p>
              <div className='sm:flex hidden justify-between items-center'>
                <p>{order.method}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
          </div>
      </div>
    </div>
  )
}

export default orders