import React from 'react';
import { SideNavItem } from '../../types/Types';

interface SidebarItemProps {
  item: SideNavItem;
  isMinimized: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, isMinimized }) => {
  return (
    <div className="flex flex-row items-center justify-start w-full">
      <div className={`flex items-start min-h-[40px] text-[#717075] w-full group hover:bg-slate-100 rounded-e-2xl hover:text-[#464241] mb-5 hover:py-0 hover:items-center`}>
        
        
        <div className='hidden group-hover:block bg-[#317770] relative mr-3 text-sm h-[39px]'>|</div>
        
        
        <div className='flex flex-row items-center'>
          <div className='group-hover:text-[#317770]'>{item.icon}</div>
          {/* Show the title only if the sidebar is not minimized */}
          {!isMinimized && <div className="ml-3">{item.title}</div>}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
