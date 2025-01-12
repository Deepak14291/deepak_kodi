import { useDispatch, useSelector } from "react-redux";
import { AppFooter } from "../components/AppFooter";
import { AppNav } from "../components/AppNav";
import { openModal } from "../features/modal/modalSlice";

import Modal from "../components/Modal";



export function Skills() {
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    return (<div className="flex flex-col h-screen">
        <AppNav />



        <div className="mt-20 pt-10 flex-grow">
            <div className="grid grid-cols-12 font-bold text-lg">
                <div className="col-start-2 col-end-4 col-span-2">
                    Skills
                </div>
            </div>


            <div className="mt-6 grid grid-cols-12 antialiased text-color-gray leading-relaxed font-medium text-justify">
                <div className="col-start-2 col-end-10 col-span-8 ">
                    Apart from the modules included in my masters programme, I have also completed few courses on udemy such as
                    APIs
                    in PHP from basic to advanced, Master Laravel, vue3, inertia (VILT stack) 2024 and Vue3 in action: 7
                    projects to
                    master the framework and I am currently working on
                </div>
            </div>

            <div className="mt-6 ">
                <ul className="list-image-[url('/assets/images/skills/circle.png')] grid grid-cols-12 gap-3 text-sm font-medium">
                    <li className="ml-2 col-start-2 col-end-4 col-span-2">&nbsp;HTML & CSS</li>
                    <li className="col-start-4 col-end-5 col-span-2">&nbsp;Laravel</li>
                    <li className="col-start-6 col-end-7 col-span-1">&nbsp;PHP</li>
                    <li className="col-start-8 col-end-9 col-span-1">&nbsp;Tailwind CSS</li>
                    <li className="ml-2 col-start-2 col-end-3 col-span-1">&nbsp;Javascript</li>
                    <li className="col-start-4 col-end-5 col-span-1">&nbsp;Vue</li>
                    <li className="col-start-6 col-end-7 col-span-1">&nbsp;Git</li>
                    <li className="col-start-8 col-end-9 col-span-1">&nbsp;SQL</li>
                    <li className="ml-2 col-start-2 col-end-3 col-span-1">&nbsp;Symfony</li>
                    <li className="col-start-4 col-end-5 col-span-1">&nbsp;Docker</li>
                    <li className="col-start-6 col-end-7 col-span-1">&nbsp;AWS</li>
                </ul>
            </div>


            <div className="mt-6 grid grid-cols-12 ">
                <hr className="col-start-2 col-end-10 col-span-8 border-solid border-t-2" />
            </div>

            <div className="mt-6 grid grid-cols-12 font-bold text-lg">
                <div className="col-start-2 col-end-10 col-span-8">
                    Certifications
                </div>
            </div>

            <div className="mt-6 grid grid-cols-12 antialiased text-color-gray leading-relaxed font-medium text-justify">
                <div className="col-start-2 col-end-10 col-span-8">
                    As many companies are transitioning to cloud based infrastructure, I have explored the cloud computing
                    technology and I have completed and passed couple of AWS certifications such as AWS certified cloud
                    practitioner and AWS certified developer associate.
                </div>
            </div>

            <div className="mt-6 font-medium text-sm">
                <ul className="list-image-[url(/assets/images/skills/circle.png)]  grid grid-cols-12">
                    <li className="ml-2 col-start-2 col-end-5 col-span-3">
                        &nbsp;AWS certified cloud practitioner
                    </li>
                    {isOpen && <Modal />}
                    <li
                        className="col-start-7 col-end-9 col-span-2 font-bold underline underline-offset-2 hover:cursor-pointer hover:text-[#0166B1]" onClick={() => {
                            dispatch(openModal());
                        }}>
                        &nbsp;VIEW CERTIFICATE
                    </li>
                </ul>
            </div>

            <div className="mt-6 grid grid-cols-12 ">
                <hr className="col-start-2 col-end-10 col-span-8 border-solid border-t-2" />
            </div>



            <div className="mt-6 grid grid-cols-12 font-bold text-lg ">
                <div className="col-start-2 col-end-10 col-span-8">
                    Education
                </div>
            </div>

            <div className="mt-6 grid grid-cols-12 antialiased text-color-gray leading-relaxed font-medium text-justify">
                <div className="col-start-2 col-end-10 col-span-8">
                    As many companies are transitioning to cloud based infrastructure, I have explored the cloud computing
                    technology and I have completed and passed couple of AWS certifications such as AWS certified cloud
                    practitioner and AWS certified developer associate.
                </div>
            </div>

            <div className="mt-6 font-medium text-sm">
                <ul className="list-image-[url(/assets/images/skills/circle.png)]  grid grid-cols-12">
                    <li className="ml-2 col-start-2 col-end-5 col-span-3">
                        &nbsp;Master of Science in Mobile Web Development
                    </li>
                    <li
                        className="col-start-7 col-end-9 col-span-2 font-bold underline underline-offset-2 hover:cursor-pointer hover:text-[#0166B1]">
                        &nbsp;VIEW CERTIFICATE
                    </li>
                    <li className="ml-2 mt-3 col-start-2 col-end-5 col-span-3 ">&nbsp;Bachelor of Engineering in Computer Science</li>
                    <li
                        className="mt-3 col-start-7 col-end-9 col-span-2 font-bold underline underline-offset-2 hover:cursor-pointer hover:text-[#0166B1]">
                        &nbsp;VIEW CERTIFICATE
                    </li>
                </ul>
            </div>
        </div>
        <AppFooter />
    </div>)
}