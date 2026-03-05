import React from 'react';
import Image from 'next/image';

const RetroWindow = ({ title, width, height, className = '', children }) => {
  return (
    <div 
      className={`border border-[#6D6D6D] bg-[#EDEDED] flex flex-col ${className}`}
      style={{ width, height }}
    >
      {/* Title Bar */}
      <div className="h-[27px] w-full bg-gradient-to-r from-[#2E2C39] to-[#807B9F] border-b border-[#6D6D6D] flex justify-between items-center px-[8px]">
        {title && (
          <span className="text-white text-[10px] font-bold tracking-tighter uppercase" style={{ fontFamily: "'Dogica Pixel', sans-serif" }}>
            {title}
          </span>
        )}
        {/* Close Button */}
        <button className="w-[19px] h-[19px] bg-[#D9D9D9] border border-[#6D6D6D] text-[#4F4F4F] text-[11px] font-bold flex items-center justify-center pb-[2px]">
          x
        </button>
      </div>
      
      {/* Window Content */}
      <div className="flex-1 relative">
        {children}
      </div>
    </div>
  );
};

export default RetroWindow;