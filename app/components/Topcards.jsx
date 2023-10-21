import React from 'react'

const Topcards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 ml-[20vw] sm:ml-[10vw] mt-[10vh] sm:w-[88.5%]">
      <div className=" lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg">
        <div className='flex justify-between  w-full pb-4'>
            <div className='flex flex-col'>
            <p className='text-2xl font-bold '>$7,846</p>
            <p className='text-gray-600'>Daily Revenue</p>
            </div>
            <div className='flex'>
        <p className='bg-green-200 flex items-center  px-2 py-0 rounded-lg'>
            <span>18%</span>
        </p>
            </div>
        </div>
      </div>
      <div className=" lg:col-span-2 col-span-1 bg-white justify-between w-full border p-4 rounded-lg">
        <div className='flex justify-between  w-full pb-4'>
            <div className='flex flex-col'>
            <p className='text-2xl font-bold '>$1,463,000</p>
            <p className='text-gray-600'>YTD Revenue</p>
            </div>
            <div className='flex'>
        <p className='bg-green-200 flex items-center  px-2 py-0 rounded-lg'>
            <span>11%</span>
        </p>
            </div>
        </div>
      </div>
      <div className="  bg-white justify-between w-full border p-4 rounded-lg">
        <div className='flex justify-between  w-full pb-4'>
            <div className='flex flex-col'>
            <p className='text-2xl font-bold '>17,846</p>
            <p className='text-gray-600'>Customers</p>
            </div>
            <div className='flex'>
        <p className='bg-green-200 flex items-center  px-2 py-0 rounded-lg'>
            <span>7%</span>
        </p>
            </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default Topcards