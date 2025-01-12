import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

export function AppFooter() {
    return (
        <div className="h-20 inset-x-0 bottom-0 text-sm font-normalbg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] drop-shadow-md backdrop-invert-0">
            <div className="flex place-items-end text-m justify-between px-6 py-6">
                <div className="w-50">Designed and Built by Deepak Kodi</div>
                <div className=" hover:cursor-pointer">
                    <IconContext.Provider value={{ size: "2rem", className: "icon-style" }} >
                        <div>
                            <FaReact />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="flex gap-4">
                    <div><a target="_blank" href="https://github.com/Deepak14291" className="hover:text-[#0166B1]">Github</a></div>
                    <div><a target="_blank" href="https://www.linkedin.com/in/deepak-kodi-uk/" className="hover:text-[#0166B1]">Linkedin</a></div>
                </div>
            </div>
        </div >
    )
}

