import { NavLink } from "react-router-dom";

export function AppNav() {
    return (
        <nav className="h-20 shadow-xl fixed w-full top-0">
            <ul className="flex h-full text-sm font-normal justify-center bg-gray-100 bg-opacity-30  backdrop-filter backdrop-blur">
                {/* <li className="h-full content-center hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/"> Home </NavLink>
                </li> */}
                <li className="h-full content-center  hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/about"> About </NavLink>
                </li>
                <li className=" h-full content-center hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/experience"> Experience </NavLink>
                </li>
                <li className=" h-full content-center hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/skills"> Skills </NavLink>
                </li>
                <li className=" h-full content-center hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/projects"> Projects </NavLink>
                </li>
                <li className=" h-full content-center hover:bg-gray-300 hover:cursor-pointer">
                    <NavLink className="px-4 py-8" to="/contact"> Contact </NavLink>
                </li>
            </ul>
        </nav>
    )
}

