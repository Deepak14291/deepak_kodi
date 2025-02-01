import { Link } from "react-router-dom";
import { AppNav } from "../../components/AppNav";
import { AppFooter } from "../../components/AppFooter";

export function Mazda() {
    return (
        <>
            <AppNav />
            <div className="mb-10 pb-10">
                <div className="mt-20 pt-10 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-4 col-span-2 font-extrabold text-2xl">
                        Mazda
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-12 mulish-font text-sm leading-relaxed font-semibold">
                    <div className="col-start-2 col-end-9 col-span-7">
                        Apart from the modules included in my masters programme, I have also completed few courses on udemy such as
                        APIs
                        in PHP from basic to advanced, Master Laravel, vue3, inertia (VILT stack) 2024 and Vue3 in action: 7
                        projects to
                        master the framework and I am currently working on
                    </div>
                </div>
                <div className="mt-4 grid grid-cols-12">
                    <div className="col-start-2 col-end-7 col-span-5 mulish-font text-sm leading-relaxed font-bold">
                        LIVE <span className="text-[#0166B1] ml-2 font-extrabold"><a
                            target="_blank" href="https://deepak14291.github.io/mazda.com/">View
                            Site</a></span>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-12">
                    <div className="col-start-2 col-end-11 col-span-9">
                        <img src="/assets/images/project_images/mockups/mazda-mockups/Mazda-Safari-Light.png" alt="" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-5 col-span-3 font-extrabold text-2xl">
                        Project Purpose and Goal
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-12 mulish-font text-sm leading-relaxed font-semibold">
                    <div className="col-start-2 col-end-9 col-span-7">
                        Apart from the modules included in my masters programme, I have also completed few courses on udemy such as
                        APIs
                        in PHP from basic to advanced, Master Laravel, vue3, inertia (VILT stack) 2024 and Vue3 in action: 7
                        projects to
                        master the framework and I am currently working on
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-12">
                    <div className="col-start-2 col-end-11 col-span-9">
                        <img src="/assets/images/project_images/mazda/MazdaCars.png" alt="" />
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-5 col-span-3 font-extrabold text-2xl">
                        Web Stack and Explanation
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-12 mulish-font text-sm leading-relaxed font-semibold">
                    <div className="col-start-2 col-end-9 col-span-7">
                        Apart from the modules included in my masters programme, I have also completed few courses on udemy such as
                        APIs
                        in PHP from basic to advanced, Master Laravel, vue3, inertia (VILT stack) 2024 and Vue3 in action: 7
                        projects to
                        master the framework and I am currently working on
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-12">
                    <div className="col-start-2 col-end-11 col-span-9">
                        <img src="/assets/images/project_images/mazda/mazda-service.png" alt="" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-5 col-span-3 font-extrabold text-2xl">
                        Problems and Thought Process
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-12 mulish-font text-sm leading-relaxed font-semibold">
                    <div className="col-start-2 col-end-9 col-span-7">
                        Apart from the modules included in my masters programme, I have also completed few courses on udemy such as
                        APIs
                        in PHP from basic to advanced, Master Laravel, vue3, inertia (VILT stack) 2024 and Vue3 in action: 7
                        projects to
                        master the framework and I am currently working on
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-4 col-span-2 font-extrabold text-2xl">
                        Other projects
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-12 mulish-font">
                        <div className="col-start-2 col-end-6 col-span-4 ">
                            <img src="/assets/images/project_images/tesla/tesla-thumbnail.png" alt="" width="400" height="400" />
                            <div className="mt-4 font-extrabold text-2xl">Tesla</div>
                            <div className="mt-4 text-sm">
                                A tool design to help web developers to build live,
                                <br /> custom templates & export code
                            </div>
                            <div className="mt-4 font-bold text-sm">
                                <Link to="/projects/tesla">VIEW PROJECT</Link>
                            </div>
                        </div>
                        <div className="col-start-7 col-end-11 col-span-4">
                            <img src="/assets/images/project_images/weather_vista/weather_vista.png" alt="" width="400" height="400" />
                            <div className="mt-4 font-extrabold text-2xl">Weather Vista</div>
                            <div className="mt-4 text-sm">
                                A tool design to help web developers to build live,
                                <br /> custom templates & export code
                            </div>
                            <div className="mt-4 font-bold text-sm">
                                <Link to="/projects/weather-vista">VIEW PROJECT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </>
    )
}