import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";

export function AppFooter() {
    const { isOpen } = useSelector((state) => state.modal);
    return (
        // shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] drop-shadow-md 
        <div className={`z-10 h-20 text-sm font-normal bg-gray-100 bg-opacity-30 backdrop-filter backdrop-blur ${isOpen ? "hidden" : ""}`} >
            <div className="flex text-sm justify-between px-6 py-6">
                <div className="w-50">Designed and Built by Deepak Kodi</div>
                <div className="hover:cursor-pointer">
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

