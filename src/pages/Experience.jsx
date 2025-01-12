import { AppFooter } from "../components/AppFooter";
import { AppNav } from "../components/AppNav";

export function Experience() {
    return (
        <div className="flex flex-col h-screen">

            <AppNav />
            <div className="mb-20 mt-20 pt-4 flex-grow">
                <div className="mt-10 grid grid-cols-12">
                    <div className="col-start-3 col-end-8 col-span-5 font-bold">
                        Work Experience
                    </div>
                </div>

                <div className=" antialiased font-medium mt-10 grid grid-cols-12 leading-relaxed text-color-gray  ">
                    <div className="col-start-3 col-end-10 col-span-7 flex gap-6 border-solid border-b-2 pb-5">
                        <img src="/assets/images/work/STA.png" alt="STA image" className="w-30 h-12 self-center" />
                        <div className="flex flex-col gap-2">
                            <p className="text-justify">STA is a volunteer-driven organization based in Scotland that leverages the expertise of technology professionals to address societal challenges and support community initiatives.  </p>
                            <div className="flex justify-between">
                                <p className="font-semibold">Position: React Developer</p>
                                <p className="font-semibold text-sm">Date: 2024 - Current</p>
                            </div>

                            <ul className="list-disc list-inside ">
                                <li>Helped in migrating from font awesome to react icons.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="antialiased font-medium mt-10 grid grid-cols-12 leading-relaxed  text-color-gray  ">
                    <div className="col-start-3 col-end-10 col-span-7 flex gap-6">
                        <img src="/assets/images/work/concentrix.webp" alt="Concentrix image" className="w-30 h-16 " />
                        <div className="flex flex-col gap-2">
                            <p className="text-justify">An IT Services and IT Consulting firm with ~145,000 employees and $6.47B in revenues with over 100 fortune global 500 clients.</p>
                            <div className="flex justify-between">
                                <p className="font-semibold">Position: Senior Subject Matter Expert</p>
                                <p className="font-semibold text-sm">Date: 2017 - 2022</p>
                            </div>
                            <ul className="list-disc list-outside text-justify">
                                <li>Providing excellent customer support to consumers and business users of Microsoft Outlook via in-app chat support. Played a key role in expanding the business from a team of 5 to ~85 people by meeting the quality requirements of the client and for being proactive in reporting bugs to engineering team.</li>
                                <li>Was responsible for solving Outlook technical issues, which involved analyzing appropriate logs such as (ETL) event trace logs, incoming and outgoing logs, add-in logs and then asking right scoping question to understand the problem before proceeding to troubleshooting steps. It also involved testing the feature/software on the same build as the customer to confirm if the issue was re-producible.</li>
                                <li>Assisting external users and Microsoft Office 365 business users such as employees working in large organizations and admins with their Outlook technical issues. Provided white glove service to large organizations like tesla and Microsoft MVP’s.</li>
                                <li>Attending daily team meetings with Microsoft Outlook engineering team to report bugs and known issues observed while handling tickets and sharing product updates and bug status updates from the meeting back to our support team. Experience working with Microsoft Outlook engineering team on aged cases or tickets which are active or open for a long time.</li>
                                <li>Provided feedback to Microsoft on areas of improvement on Outlook like article updates or deflections and improved the customer experience for outlook users.</li>
                                <li>Trained 70+ new employees on Outlook and troubleshooting tools used like Timber and RAVE Diagnostics, ensured smooth transition from training to handling customers technical issues. Was also responsible for conducting triages and up-skilling the team on new Outlook features.</li>
                            </ul>

                            <div className="flex justify-between">
                                <p className="font-semibold">Position: Escalation Engineer</p>
                                <p className="font-semibold text-sm">Date: 2016 - 2017</p>
                            </div>
                            <ul className="list-disc list-outside text-justify ">
                                <li>Providing (Tier 2) technical support to customers on Microsoft Office products via phone support.</li>
                                <li>Handled escalation calls from Microsoft Tier 1 Office support team. Was responsible for resolving office activation, installation, application launch and crash issues. This role involved speaking to customers over phone to understand the scope of the problem and then resolving the technical issue over remote access.</li>
                            </ul>

                            <div className="flex justify-between">
                                <p className="font-semibold">Position: Technical Support Engineer</p>
                                <p className="font-semibold text-sm">Date: 2015 - 2016</p>
                            </div>
                            <ul className="list-disc list-outside text-justify">
                                <li>Assisted customers on troubleshooting and resolving various Windows and Office issues posted on Microsoft Answers forum such as: Unable to install Windows and Office updates, Windows and Office activation issues, Unable to launch office applications like Word, Excel and PowerPoint etc.,</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <AppFooter />
        </div>
    )
}