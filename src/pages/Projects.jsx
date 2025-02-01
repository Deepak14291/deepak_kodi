import { Link } from "react-router-dom";
import { AppFooter } from "../components/AppFooter";
import FrontEnd from "../components/FrontEnd";
import { useState } from "react";
import FullStack from "../components/FullStack";

export function Projects() {
    const [isFrontend, setIsFrontend] = useState(true);
    const [isFullstack, setIsFullstack] = useState(false);

    function handleOnChangeOfFrontend() {
        if (isFullstack == true) {
            setIsFullstack(!isFullstack);
        }
        setIsFrontend(!isFrontend);
    }
    function handleOnChangeOfFullStack() {
        if (isFrontend == true) {
            setIsFrontend(!isFrontend);
        }
        setIsFullstack(!isFullstack);
    }

    return (<div className="flex flex-col h-screen">
        {/* <AppNav /> */}
        <div className="mt-20 mb-8 pt-10 flex-grow">
            <div className="grid grid-cols-12 custom-font">
                <div className="col-start-2 col-end-10 col-span-2 ">
                    <p className="font-extrabold text-lg">Projects</p>
                    <p className="pt-4 text-justify"> I’m always keeping myself busy with something new—whether it’s building apps, exploring new technologies, or contributing to exciting collaborations. Feel free to check out some of the projects I’ve worked on and see what I’ve been up to!”</p>
                </div>

                <div className="col-start-2 col-end-4 col-span-2">
                    <div className="mt-5 flex custom-font gap-4  items-center">
                        <label className="inline-block ">Frontend </label>
                        <input type="checkbox" name="front"
                            checked={isFrontend}
                            onChange={handleOnChangeOfFrontend} />
                        <label className="inline-block ">Full-stack  </label>
                        <input type="checkbox" name="fullstack" checked={isFullstack}
                            onChange={handleOnChangeOfFullStack} />
                    </div>
                </div>
            </div>

            {isFrontend && <FrontEnd />}

            {isFullstack && <FullStack />}


            {/* Current project  */}
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-end-10 col-span-8">
                    <div className="mt-6 col-start-2 col-end-10 col-span-8">
                        <p className="font-extrabold text-lg">Coming Soon!</p>
                    </div>
                    <div className="mt-6 col-start-2 col-end-10 col-span-8 bg-stone-50 drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)]">
                        <div className="flex flex-row gap-2 ">

                            <img src="/assets/images/project_images/weather_vista/weather_vista.png" width={400} height={400} />

                            <div className="pl-4 flex flex-col flex-grow justify-around">
                                <p className="project-name font-bold">
                                    Weather Vista
                                </p>
                                <p className="project-description">
                                    A weather application that provides 7 day forecast based on user input.
                                </p>
                                <div className="flex flex-row justify-between py-2">
                                    <div className="flex flex-row text-sm gap-2 pt-2">
                                        <div className="font-bold content-center">Tech Stack:</div>
                                        <div className="font-medium py-1 px-4 blue-color">HTML</div>
                                        <div className="font-medium py-1 px-4 blue-color">CSS</div>
                                        <div className="font-medium py-1 px-4 blue-color">JavaScript</div>
                                    </div>
                                    <Link to="weather-vista" className="mr-4 font-bold text-sm text-end hover:text-[#0166B1] content-end">
                                        VIEW PROJECT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mt-6 font-bold custom-font text-sm grid grid-cols-12">
                <Link className="col-start-2 col-end-4 col-span-2" href="/">VIEW MORE PROJECTS</Link>
            </div>
        </div>
        <AppFooter />
    </div>)
}