import { Link } from "react-router-dom";
import { AppFooter } from "../../components/AppFooter";
import { AppNav } from "../../components/AppNav";

export default function WeatherVista() {
    return (<div>
        <>
            <AppNav />
            <div className="mb-6">
                <div className="mt-20 pt-10 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-4 col-span-2 font-extrabold text-2xl">
                        Weather Vista
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
                            target="_blank" href="https://react-js-weather-app-theta.vercel.app/">View
                            Site</a></span>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-12">
                    <div className="col-start-2 col-end-11 col-span-9">
                        <img src="/assets/images/project_images/weather_vista/weather-homepage.png" alt="" />
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-12 mulish-font">
                    <div className="col-start-2 col-end-4 col-span-2 font-extrabold text-2xl">
                        Decore
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
                        <img src="/assets/images/project_images/project_1/chrome2.jpg" alt="" />
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
                        <img src="/assets/images/project_images/project_1/chrome3.jpg" alt="" />
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
                            <img src="/assets/images/project_images/project_1/sample1.jpg" alt="" width="400" height="400" />
                            <div className="mt-4 font-extrabold text-2xl">Decore</div>
                            <div className="mt-4 text-sm">
                                A tool design to help web developers to build live,
                                <br /> custom templates & export code
                            </div>
                            <div className="mt-4 font-bold text-sm">
                                <Link to="/viewproject">VIEW PROJECT</Link>
                            </div>
                        </div>
                        <div className="col-start-7 col-end-11 col-span-4">
                            <img src="/assets/images/project_images/project_1/sample2.png" alt="" width="400" height="400" />
                            <div className="mt-4 font-extrabold text-2xl">Decore</div>
                            <div className="mt-4 text-sm">
                                A tool design to help web developers to build live,
                                <br /> custom templates & export code
                            </div>
                            <div className="mt-4 font-bold text-sm">
                                <Link href="/viewproject">VIEW PROJECT</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <AppFooter />
        </>
    </div>)
}