import { NavLink } from "react-router-dom";
import AnimatedNavLink from "./ui/AnimatedNavLink";
// import FlipLink from "./ui/FlipLink";

export function AppNav() {

    return (
        // shadow - xl
        <nav className="h-16 fixed w-full top-0 z-10">
            <ul className="flex h-full text-sm justify-between font-normal bg-gray-100 bg-opacity-30  backdrop-filter backdrop-blur">
                <li className="h-full content-center hover:cursor-pointer">
                    <NavLink className="pl-3 text-sm font-medium" to="/"> DEEPAK KODI</NavLink>
                    {/* <AnimatedNavLink to="/">DEEPAK KODI</AnimatedNavLink> */}
                </li>

                <span className="pr-3 flex text-sm space-x-3">
                    <li className="h-full content-center hover:cursor-pointer ">
                        {/* <NavLink className={({ isActive }) => (isActive ? "px-4 py-8 text-[#0166B1] border-b-2 border-b-[#0166B1]" : "px-4 py-8")} to="/"> Home </NavLink> */}
                        {/* <FlipLink to="/">HOME</FlipLink> */}
                        <AnimatedNavLink to="/">HOME</AnimatedNavLink>
                    </li>
                    <li className="h-full content-center hover:cursor-pointer">
                        {/* <NavLink className={({ isActive }) => (isActive ? "px-4 py-8 text-[#0166B1] border-b-2 border-b-[#0166B1]" : "px-4 py-8")} to="/about"> About </NavLink> */}
                        <AnimatedNavLink to="/about">ABOUT</AnimatedNavLink>
                    </li>
                    <li className=" h-full content-center hover:cursor-pointer">
                        {/* <NavLink className={({ isActive }) => (isActive ? "px-4 py-8 text-[#0166B1] border-b-2 border-b-[#0166B1]" : "px-4 py-8")} to="/experience"> Experience </NavLink> */}
                        <AnimatedNavLink to="/experience">EXPERIENCE</AnimatedNavLink>
                    </li>
                    <li className=" h-full content-center hover:cursor-pointer">
                        {/* <NavLink className={({ isActive }) => (isActive ? "px-4 py-8 text-[#0166B1] border-b-2 border-b-[#0166B1]" : "px-4 py-8")} to="/skills"> Skills </NavLink> */}
                        <AnimatedNavLink to="/skills">SKILLS</AnimatedNavLink>
                    </li>
                    <li className=" h-full content-center hover:cursor-pointer">
                        {/* <NavLink className={({ isActive }) => (isActive ? "px-4 py-8 text-[#0166B1] border-b-2 border-b-[#0166B1]" : "px-4 py-8")} to="/projects"> Projects </NavLink> */}
                        <AnimatedNavLink to="/projects">PROJECTS</AnimatedNavLink>
                    </li>
                </span>
                {/* <li className=" h-full content-center hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/contact"> Contact </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

