/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { AppFooter } from "../components/AppFooter";
import { AppNav } from "../components/AppNav";

import * as React from "react";

export function About() {

    return (<div className="flex flex-col h-screen">
        <AppNav />
        <div className="mt-20 pt-10 flex-grow grid grid-cols-12 gap-4 bg-white">
            <div className="col-start-2 col-end-4 col-span-2">
                <div>
                    <img src="/assets/images/my_photo/Deepak.jpg" width={500} height={500} />
                    <div className="mt-4 text-lg font-bold antialiased tracking-wide">DEEPAK KODI</div>
                    <div className="mt-2 custom-font text-base font-semibold antialiased ">Full Stack Web Developer</div>
                    <div className="mt-2 custom-font text-sm font-semibold underline text-[#0166B1]">
                        <a target="_blank" href="https://www.linkedin.com/in/deepak-kodi-uk/">Linkedin</a>
                    </div>
                    <div className="mt-2 custom-font text-sm font-semibold underline text-[#0166B1]">
                        <a target="_blank" className="mt-2" href="https://github.com/Deepak14291">Github</a>
                    </div>
                </div>
            </div>

            <div className="ml-8 antialiased text-color-gray leading-relaxed font-medium col-start-4 col-end-10 col-span-6 text-justify">
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
            </div>
        </div>

        <div className="ml-10 grid grid-cols-12 mb-11">
            <div className="col-start-4 col-end-11 col-span-9 mb-4 pb-10">
                <p className="font-medium">Recognition at my previous employer: Concentrix</p>
            </div>

            <div className="col-start-4 col-end-10 col-span-6 flex gap-6">
                <div className="flex flex-col gap-2 bg-stone-50 p-4 drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] justify-between">
                    <p className="text-justify">
                        "Thank you for extending the hours and managing the outage so well. Appreciate all the efforts in providing the required details to the clients that helped in mitigating the outage. You are always available and we are ever so thankful for the dedication"
                    </p>
                    <p className="font-semibold flex justify-end">
                        <span className="text-sm"> Preethi V - Team Lead at Concentrix</span>
                    </p>
                </div>

                <div className="drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)] justify-between">
                    <div className="flex flex-col gap-2 bg-stone-50 p-4">
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

        <AppFooter />
    </div>)
}