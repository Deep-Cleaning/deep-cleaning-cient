import React from 'react';
import clsx from 'clsx';

const ButtonPrimary = ({ children, onClick, style }) => {
  return (
    <button 
    className={clsx(
      "bg-[#1e282d] border-solid rounded-full text-base font-bold text-white",
      "hover:bg-[#2b383f] hover:text-lg",
      style,
      onClick={onClick} 
    )}>
      {children}
    </button>
  );
};

export default ButtonPrimary;