import React from 'react';

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button 
      className='
      bg-[#3b4d57] w-52 h-12 border-solid rounded-full  text-base font-bold text-white
      hover:bg-[#2b383f] hover:text-lg
      '
      onClick={onClick} 
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;