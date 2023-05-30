import React , {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"


function Navbar() {
    const [nav, setNav] = useState (false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className="bg-pink-300 fixed w-full z-40">
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold hidden md:flex">
          <a href="/">Amm Day 🎉🎉</a></h1>
        <ul className="font-mono hidden md:flex">
            <li className="p-6 ">
             <a href="/A"> A</a></li>
             <li className="p-6 ">
             <a href="/M"> M</a></li>
             <li className="p-6 ">
             <a href="/R"> M</a></li>
        </ul>


        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} className="cursor-pointer"/> : <AiOutlineMenu size={20} className="cursor-pointer" />}
        </div>
        <div className={nav ? "fixed right-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-pink-300 ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-sans px-5 py-5">
          <a href="/">Amm Day</a></h1>
          <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-100">
             <a href="/A"> A</a></li>
             <li className="p-4 border-b border-gray-100">
             <a href="/M"> M</a></li>
             <li className="p-4 border-b border-gray-100">
             <a href="/R"> M</a></li>
             
          </ul>
        </div>
     </div>
     </div>
     
  );
}

export default Navbar;