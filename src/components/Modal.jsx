import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";

import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
    const dispatch = useDispatch();
    return (
        <div className="absolute top-0 h-screen w-screen backdrop-filter backdrop-blur grid grid-cols-12 grid-rows-6">
            <div className="col-start-4 col-end-10 col-span-7 row-start-2 row-end-6 row-span-4 items-center flex ">
                <aside className=' bg-gray-200 px-10 pb-10 pt-5'>
                    <div className="flex justify-between">
                        <p className="mb-3 text-center text-base font-medium">AWS Certified Cloud Practitioner</p>
                        <IconContext.Provider value={{ size: "2rem", className: "icon-style" }} >
                            <div className="mb-3 hover:cursor-pointer flex justify-end" onClick={() => {
                                dispatch(closeModal());
                            }}>
                                <IoIosCloseCircle />
                            </div>
                        </IconContext.Provider>
                    </div>

                    <img src="assets/images/skills/AWS CCP.jpg" alt="AWS certification" width="600" height="600" />
                    <div className="flex justify-end">
                        <button type='button' className='mt-3 py-3 px-6 bg-gray-400 justify-end hover:bg-[#0166B1] hover:text-white' onClick={() => {
                            dispatch(closeModal());
                        }}>
                            Cancel
                        </button>
                    </div>
                </aside >
            </div >
        </div>
    );
};
export default Modal;