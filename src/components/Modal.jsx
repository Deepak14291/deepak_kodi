/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { motion } from 'framer-motion';

const Modal = ({ image }) => {
    // console.log(motion);
    const dispatch = useDispatch();
    return (

        <motion.div className="z-20 absolute top-0 h-screen pb-10 w-screen backdrop-filter backdrop-blur grid grid-cols-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className="col-start-4 col-end-10 col-span-7 items-center flex "
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <aside className=' bg-gray-200 px-10 pb-10 pt-5'>
                    <div className="flex justify-between">
                        <p className="mb-3 text-center text-base font-medium">{image.name}</p>
                        <IconContext.Provider value={{ size: "2rem", className: "icon-style" }} >
                            <div className="mb-3 hover:cursor-pointer flex justify-end" onClick={() => {
                                dispatch(closeModal());
                            }}>
                                <IoIosCloseCircle />
                            </div>
                        </IconContext.Provider>
                    </div>

                    <img src={image.url} alt="AWS certification" width="600" height="600" />
                    <div className="flex justify-end">
                        <button type='button' className='mt-3 bg-gray-700 hover:bg-[#0166B1] text-white py-2 px-10 rounded justify-end ' onClick={() => {
                            dispatch(closeModal());
                        }}>
                            Cancel
                        </button>
                    </div>
                </aside >
            </motion.div >
        </motion.div>

    );
};
export default Modal;