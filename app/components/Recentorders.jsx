import React from 'react'
import { data } from '@/Data/Data.js'
import { FaShoppingBag } from 'react-icons/fa'

const Recentorders = () => {
  return (
    <div className="md:absolute left-[57vw] sm:w-[39vw] w-[70vw] col-span-1  lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800" />
            </div>
            <div className="pl-4 ">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
              <p className="lg:hidden sm:hidden  md:absolute right-6 text-sm ">
                {order.date}
              </p>
            </div>
            <p className="lg:flex sm:hidden hidden md:absolute right-6 text-sm ">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recentorders