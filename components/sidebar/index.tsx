"use client";
import { UserButton } from "@clerk/clerk-react";

import { ChatList } from "./chatList";

export const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 flex flex-col w-[300px] h-full pb-[100px] bg-gray-800">
            <div className=" flex  justify-center items-start pt-5  ">
          
          <UserButton />
      </div>
            <ChatList />
            
        </div>
    );
};