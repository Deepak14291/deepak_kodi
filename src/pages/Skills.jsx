import { useDispatch, useSelector } from "react-redux";
import { AppFooter } from "../components/AppFooter";
import { openModal } from "../features/modal/modalSlice";
import Modal from "../components/Modal";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion';


export function Skills() {


    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const [image, setImage] = useState("");

    let image1 = {
        name: "AWS Certified Cloud Practitioner",
        url: "assets/images/skills/AWS CCP.jpg"
    }

    let image2 = {
        name: "Msc Mobile Web Development",
        url: "assets/images/aboutme_readmore/MSc Degree.jpg"
    }

    let image3 = {
        name: "Bachelor of Engineering in Computer Science",
        url: "assets/images/education/Engineering degree certificate.jpg"
    }

    return (<div className="flex flex-col">
        {/* <AppNav /> */}

        <div className="mt-20 pt-10 flex-grow mb-10">
            <div className="grid grid-cols-12 font-bold text-lg">
                <div className="col-start-2 col-end-4 col-span-2">
                    Skills
                </div>
            </div>


            <div className="mt-6 grid grid-cols-12 antialiased text-color-gray leading-relaxed font-medium text-justify">
                <div className="col-start-2 col-end-10 col-span-8 ">
                    In addition to the modules covered in my master’s program, I have proactively pursued self-learning to stay ahead in the field of web development. I have completed several courses on platforms like Udemy, focusing on cutting-edge technologies and frameworks such as React.js, Vue.js, Node.js, Next.js, and Laravel. These experiences have enhanced my skills and provided me with hands-on knowledge of modern web development practices, empowering me to build robust and scalable applications.
                </div>
            </div>

            <div className="mt-6 ">
                <ul className="list-image-[url('/assets/images/skills/circle.png')] grid grid-cols-12 gap-3 text-sm font-medium">
                    <li className="ml-2 col-start-2 col-end-4 col-span-2">&nbsp;HTML & CSS</li>
                    <li className="col-start-4 col-end-5 col-span-2">&nbsp;React</li>
                    <li className="col-start-6 col-end-7 col-span-1">&nbsp;PHP</li>
                    <li className="col-start-8 col-end-9 col-span-1">&nbsp;Tailwind CSS</li>
                    <li className="ml-2 col-start-2 col-end-3 col-span-1">&nbsp;Javascript ES6</li>
                    <li className="col-start-4 col-end-5 col-span-1">&nbsp;Laravel</li>
                    <li className="col-start-6 col-end-7 col-span-1">&nbsp;Git</li>
                    <li className="col-start-8 col-end-9 col-span-1">&nbsp;SQL</li>
                    <li className="ml-2 col-start-2 col-end-3 col-span-1">&nbsp;Vue</li>
                    <li className="col-start-4 col-end-5 col-span-1">&nbsp;Symfony</li>
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
                    With the growing adoption of cloud-based infrastructure across industries, I have actively explored cloud computing technologies to enhance my expertise in this domain. I am proud to have earned the AWS Certified Cloud Practitioner certification, which validates my foundational understanding of AWS cloud services. Currently, I am further advancing my skills by preparing for the AWS Certified Developer – Associate certification, deepening my knowledge of AWS architecture, development, and deployment practices.
                </div>
            </div>

            <div className="mt-6 font-medium text-sm">
                <ul className="list-image-[url(/assets/images/skills/circle.png)]  grid grid-cols-12">
                    <li className="ml-2 col-start-2 col-end-5 col-span-3">
                        &nbsp;AWS Certified Cloud Practitioner
                    </li>
                    <AnimatePresence>
                        {isOpen && <Modal image={image} />}
                    </AnimatePresence>
                    <li
                        className="col-start-7 col-end-9 col-span-2 font-bold underline underline-offset-2 hover:cursor-pointer hover:text-[#0166B1]" onClick={() => {
                            setImage(image1);
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
                    My passion for IT, problem-solving, and computer programming has been the driving force behind my academic journey. I hold two degrees in Information Technology: a Bachelor of Engineering in Computer Science and a Master of Science in Mobile Web Development, where I graduated with distinction. These achievements have equipped me with a solid foundation in software engineering principles, and modern web development practices.
                </div>
            </div>

            <div className="mt-6 font-medium text-sm">
                <ul className="list-image-[url(/assets/images/skills/circle.png)]  grid grid-cols-12">
                    <li className="ml-2 col-start-2 col-end-5 col-span-3">
                        &nbsp;Master of Science in Mobile Web Development
                    </li>
                    <li
                        className="col-start-7 col-end-9 col-span-2 font-bold underline underline-offset-2 hover:cursor-pointer hover:text-[#0166B1]" onClick={() => {
                            setImage(image2);
                            dispatch(openModal());
                        }}>
                        &nbsp;VIEW CERTIFICATE
                    </li>
                    <li className="ml-2 mt-3 col-start-2 col-end-5 col-span-3 ">&nbsp;Bachelor of Engineering in Computer Science</li>
                    <li
                        className="mt-3 col-start-7 col-end-9 col-span-2 font-bold underline underline-offset-2 hover:cursor-pointer hover:text-[#0166B1]" onClick={() => {
                            setImage(image3);
                            dispatch(openModal());
                        }}>
                        &nbsp;VIEW CERTIFICATE
                    </li>
                </ul>
            </div>
        </div>
        <AppFooter />
    </div>)
}