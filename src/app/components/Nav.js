"use client";
import { useState } from 'react'
import NavLink from './NavLink';
import { VscMenu, VscClose } from "react-icons/vsc";
import Image from 'next/image';

import logo from '../../../public/images/logo.svg';

function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className='flex bg-white p-3 md:p-0 justify-between items-end mb-8'>
      <div>
        <Image src={logo} alt='Logo' width={50} height={50} />
      </div>
      <div className="md:hidden">
        <button
          className=" flex items-end text-veryDarkBlue outline-none"
          onClick={() => setNavbar(!navbar)}
        >
          <div className="w-[50px] h-[50px]">
            <VscMenu className="text-veryDarkBlue w-full h-full hover:text-softRed" />
          </div>
        </button>
      </div>
      <div  className={`bg-veryDarkBlue opacity-70 w-full md:w-auto fixed right-0 top-0 h-full md:hidden ${navbar ? 'block' : 'hidden'}`}></div>
        <div className={`bg-white w-[250px] md:w-auto absolute right-0 top-0 h-full md:static md:flex md:items-end ${navbar ? 'block animate-openmenu' : 'animate-closemenu hidden'}`}>
          <ul className=' bg-white justify-center md:flex md:space-x-6 md:space-y-0'>
            <div className='flex bg-white p-3 justify-end items-end mb-12'>
              <button
                className="flex items-end outline-none md:hidden"
                onClick={() => setNavbar(!navbar)}
              >
                <div className="w-[50px] h-[50px]">
                  <VscClose className="text-veryDarkBlue w-full h-full hover:text-softRed" />
                </div>
              </button>
            </div>
            <NavLink link={"/"} desc={"Home"} />
            <NavLink link={"/"} desc={"New"} />
            <NavLink link={"/"} desc={"Popular"} />
            <NavLink link={"/"} desc={"Trending"} />
            <NavLink link={"/"} desc={"Categories"} />
          </ul>
        </div>
    </nav>
  )
}

export default Nav;