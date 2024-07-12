import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <div className="w-[200px] h-full flex justify-center items-end pb-8 bg-zinc-200">
          
            <UserButton />
        </div>
    )
}