"use client";

import { useState } from 'react';
import { ChatList } from "./chatList";
import { FaBars, FaTimes } from 'react-icons/fa';

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button onClick={toggleSidebar}>
                    {isOpen ? <FaTimes size={24} color="black" /> : <FaBars size={24} color="black" />}
                </button>
            </div>
            <div className={`fixed top-0 left-0 flex flex-col w-[300px] h-full bg-gray-800  transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                <ChatList />
            </div>
        </>
    );
};
