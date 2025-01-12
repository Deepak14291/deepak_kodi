import { Link } from "react-router-dom";
import { AppFooter } from "../components/AppFooter";
import { AppNav } from "../components/AppNav";
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
        <AppNav />
        <div className="mt-20 pt-10 flex-grow">
            <div className="grid grid-cols-12 custom-font">
                <div className="col-start-2 col-end-4 col-span-2 font-extrabold text-2xl">
                    Projects
                </div>
                <div className="col-start-2 col-end-4 col-span-2">
                    <div className="mt-5 flex custom-font gap-8">
                        <label className="inline-block ">Front end <input type="checkbox" name="front"
                            checked={isFrontend}
                            onChange={handleOnChangeOfFrontend} /></label>
                        <label className="inline-block ">Full stack <input type="checkbox" name="fullstack" checked={isFullstack}
                            onChange={handleOnChangeOfFullStack} /></label>
                    </div>
                </div>
            </div>

            {isFrontend && <FrontEnd />}

            {isFullstack && <FullStack />}

            <div className="mt-6 font-bold custom-font text-sm grid grid-cols-12">
                <Link className="col-start-2 col-end-4 col-span-2" href="/">VIEW MORE PROJECTS</Link>
            </div>
        </div>
        <AppFooter />
    </div>)
}