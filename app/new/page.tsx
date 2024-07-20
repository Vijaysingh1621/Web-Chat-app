"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { UserCard } from "./_components/user-card";

const New = () => {
    const otherUsers = useQuery(api.users.listOthers, {});

    if (otherUsers === undefined) return <div>Loading...</div>;

    return (
        <main className="flex flex-col sm:w-full bg-gray-800 min-h-[92vh]">
            <h1 className="text-4xl font-bold w-full text-center py-12 p-5 text-slate-200 ">Select a user to start a chat with.</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 p-5 overflow-y-auto">
                {otherUsers?.map((otherUser) => (
                    <UserCard key={otherUser._id} otherUser={otherUser} />
                ))}
            </div>
        </main>
    );
}

export default New;