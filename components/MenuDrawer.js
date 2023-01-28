import React, { useState } from 'react';
import Link from 'next/link';

const MenuDrawer = () => {
  //state to keep track of whether the menu drawer is open or closed
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div>
      {/* button to open the menu drawer */}
      <button
        onClick={() => setIsOpen(true)}
        className='px-[16.5px] py-5 space-y-[4px] bg-gradient-to-t from-black to-gray-600 rounded-[10px] drop-shadow-lg'
      >
        <span className='block w-[21px] h-0.5 bg-white rounded-xl'></span>
        <span className='block w-[21px] h-0.5 bg-white rounded-xl'></span>
        <span className='block w-[21px] h-0.5 bg-white rounded-xl'></span>
      </button>

      {/* menu drawer overlay */}
      <div 
        className={`overlay fixed inset-0 z-1 ${isOpen ? 'overlay-open' : 'overlay-closed'}`}
        // close the menu drawer when clicked anywhere outside of the menu drawer
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false)
        }} 
        >

        <div className={`h-full menu-drawer absolute top-0 w-[280px] bg-white z-20 drop-shadow-lg ${isOpen ? 'open' : 'closed'}`}>
          {/* links inside the menu drawer */}
            <div className="menu-drawer__menu flex flex-col items-end p-[42px] py-[27px]">
              <Link href="#" className='leading-[52px] text-[28px] text-[#104568] font-bold'>Home</Link>
              <Link href="#" className='leading-[52px] text-[28px] text-[#104568] font-bold'>Shop</Link>
              <Link href="#" className='leading-[52px] text-[28px] text-[#104568] font-bold'>About</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDrawer;