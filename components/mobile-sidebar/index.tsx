// components/Sidebar.tsx
import React from 'react';
import { ChatList } from '../sidebar/chatList';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform md:hidden lg:hiddne${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-2xl">
          &times;
        </button>
      </div>
      <div className="fixed top-0 left-0 flex flex-col w-[300px] h-full bg-gray-800">
            <ChatList />
        </div>
    </div>
  );
};

export default MobileSidebar;
