/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { AppFooter } from "../components/AppFooter";
import Lenis from 'lenis'
import * as React from "react";

export function About() {
    // const lenis = new Lenis({
    //     autoRaf: true,
    // });

    return (<div className="flex flex-col h-screen ">
        {/* <AppNav /> */}
        <div className="grid grid-cols-12 mb-6">

            <div className="items-start col-start-2 col-end-10 col-span-8 flex-grow flex bg-white">
                <div className=" flex-none sticky w-60 top-20 pt-10">
                    <div>
                        <img src="/assets/images/my_photo/Deepak.jpg" width={500} height={500} />
                        <div className="mt-4 text-lg font-bold antialiased tracking-wide">DEEPAK KODI</div>
                        <div className="mt-2 custom-font text-base font-semibold antialiased ">Full Stack Web Developer</div>
                        <div className="mt-2 custom-font text-sm font-semibold underline text-[#0166B1]">
                            <a target="_blank" href="https://www.linkedin.com/in/deepak-kodi/">Linkedin</a>
                        </div>
                        <div className="mt-2 custom-font text-sm font-semibold underline text-[#0166B1]">
                            <a target="_blank" className="mt-2" href="https://github.com/Deepak14291">Github</a>
                        </div>
                    </div>
                </div>

                <div className="ml-8 mt-20 pt-10 flex-grow antialiased text-color-gray leading-relaxed font-medium text-justify">
                    <div >
                        Hello! I'm Deepak Kodi, a recent masters graduate in mobile and web development from the
                        university of the west of scotland. My passion for technology and problem-solving stems from my 7 years
                        of experience at Concentrix, where I worked as a senior subject matter expert on the Microsoft outlook
                        in-app support team.
                    </div>

                    <div className="mt-4 ">
                        During my time at Concentrix, I specialised in troubleshooting technical issues, assisting my
                        team
                        with
                        complex
                        cases, and working closely with microsoft outlook's engineering team to identify and resolve
                        product
                        bugs. I
                        also contributed by providing suggestions for articles and blogs to help reduce repeated support
                        cases
                        on
                        common
                        issues.
                    </div>
                    <div className="mt-4">
                        My curiosity about the inner workings of software development and the desire to understand how
                        bugs
                        were
                        fixed
                        and how features were created, drove me to transition into the field of software engineering.
                        Now,
                        with
                        a
                        solid
                        foundation in web and mobile development, I'm excited to take on new challenges, not just
                        supporting
                        applications in post production but in the creation of software application.
                    </div>
                    <div className="mt-4">
                        <Link className="font-bold" to="readmore">READ MORE</Link>
                    </div>

                    <div className="mb-6 pt-8 flex flex-col">
                        <div className="mb-4 pb-5">
                            <p className="font-semibold">Recognition at my previous employer: Concentrix</p>
                        </div>
                        {/* drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] */}
                        <div className="flex  gap-6">
                            <div className="flex flex-col gap-2 bg-stone-50/20 p-4 drop-shadow-md backdrop-blur-sm justify-between ">
                                <p className="text-justify">
                                    "Thank you for extending the hours and managing the outage so well. Appreciate all the efforts in providing the required details to the clients that helped in mitigating the outage. You are always available and we are ever so thankful for the dedication"
                                </p>
                                <p className="font-semibold flex justify-end">
                                    <span className="text-sm"> Preethi V - Team Lead at Concentrix</span>
                                </p>
                            </div>
                            {/* drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)]  */}
                            <div className="justify-between bg-stone-50/20 drop-shadow-md backdrop-blur-sm">
                                <div className="flex flex-col gap-2  p-4 ">
                                    <p className="text-justify">
                                        "Thank you Deepak for the awesome commitment and zeal. You have always adapted yourself instantly to any changes requested, be it helping the team, taking care of the process requirements or training.
                                        It is not easy to conduct back to back training sessions for a large number of members and we have heard nothing but good feedback from the trainees. Thank you for sharing your expertise and knowledge that has helped the team grow.
                                    </p>
                                    <p className="font-semibold flex justify-end">
                                        <span className="text-sm"> Preethi V - Team Lead at Concentrix</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] */}
                    <div className="pt-2 mb-2 drop-shadow-md backdrop-blur-sm justify-between">
                        <div className="flex flex-col gap-2 bg-stone-50/20 p-4  ">
                            <p className="text-justify">
                                "Deepak has been very efficient in handling trending issues, product bugs and deflection. His product
                                knowledge and attention to details are commendable. Has received several appreciation from clients
                                for his involvement with Desktop Engineering team and for his suggestion and value adds."
                            </p>
                            <p className="font-semibold flex justify-end">
                                <span className="text-sm">Mohammed Ali - Operations Manager at Concentrix</span>
                            </p>
                        </div>
                    </div>


                    <div className=" mb-6 pt-8">
                        <div className="mb-4 pb-5">
                            <p className="font-semibold">Recognition from Client: Microsoft</p>
                        </div>
                        {/* drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] */}
                        <div className="drop-shadow-md backdrop-blur-sm  justify-between">
                            <div className="flex flex-col gap-2 bg-stone-50/20 p-4 ">
                                <p className="text-justify">
                                    "Deepak, you had great contribution and impact in this role. You did exemplary work that we all
                                    depended on. Be proud of what you accomplished and let that carry over to the future. Thank you
                                    for the great work and making a difference above and beyond the expectations. I hope to see you
                                    back at Microsoft soon."
                                </p>
                                <p className="font-semibold flex justify-end">
                                    <span className="text-sm"> Gabriel B - Program Manager at Microsoft</span>
                                </p>
                            </div>
                        </div>
                        {/* drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)]  */}
                        <div className="mt-6 drop-shadow-md backdrop-blur-sm justify-between">
                            <div className="flex flex-col gap-2 bg-stone-50/20 p-4">
                                <p className="text-justify">
                                    "Thank you very much @Deepak K (CONCENTRIX CORPORATION) for your long list of contributions
                                    as CNX point person for years now. As the saying goes,
                                    “if water cover 2/3 of the world, then Deepak
                                    \ Nitish cover the rest with In-App support coverage” 😉
                                    I’m not the best at writing these types of messages, but I hope you know that you are a valued
                                    member of the team and you had a very positive impact on our shared success. CNX has been\is a
                                    mature support escalation partner team thanks to amazing leads such as yourself. Its been a
                                    pleasure working with you and appreciate your grace on the random ‘off-the-wall’ escalations we
                                    threw your way to help chase down.
                                    Wish you great success in your advanced education endeavors.
                                    "
                                </p>
                                <p className="font-semibold flex justify-end">
                                    <span className="text-sm"> Darrell S - Senior Technical Support Engineer at Microsoft</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>




        {/* <AppFooter /> */}
    </div>)
}