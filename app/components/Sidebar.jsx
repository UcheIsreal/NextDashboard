import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx"
import { FiSettings } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi"

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-[20vw] sm:w-[10vw] h-screen border-r-[1px] bg-white flex flex-col justify-between fixed">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white mt-10 p-2 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-300 w-[60%] p-2 "></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer mt-10 p-2 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer mt-10 p-2 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer mt-10 p-2 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-300 cursor-pointer mt-10 p-2 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar