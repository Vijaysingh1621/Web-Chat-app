import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <div className="h-[75px] flex justify-end items-center px-8 bg-[#1a202c]">
            <UserButton />
        </div>
    )
}