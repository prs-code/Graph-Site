import React from 'react';
//icons
import { BsArrowUpSquare } from 'react-icons/bs';

const TopMove = () => {
  return (
    <div 
      className="fixed bottom-5 right-5"
      onClick={
        () => window.scrollTo(0, 0)
        }>

      <BsArrowUpSquare  className="text-4xl font-black text-[#cd2122] cursor-pointer"/>
    </div>
  )
}

export default TopMove;