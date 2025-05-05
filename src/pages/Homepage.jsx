
// import { AppFooter } from "../components/AppFooter";


export function Homepage() {
    return (
        <div className="flex flex-col h-screen">
            {/* <AppNav /> */}
            <div className="mt-20 pt-4 flex-grow">
                <div className="pt-6 grid grid-cols-12">
                    <p className="mt-10 col-start-4 col-end-10 col-span-6 text-center index-font font-light font-['spectral'] leading-normal">
                        Hi there, I’m Deepak.<br />
                        Full stack <span className="text-[#0166B1]">web developer</span>,<br />
                        Currently volunteering at Scottish tech army <br />
                        Based in Bristol, England
                        {/* focused on creating <i className="font-extralight">beautiful</i> and
                        minimalistic web applications. */}
                    </p>
                </div>

                <div
                    className="mt-12 col-start-4 col-end-10 col-span-6 text-center text-lg font-light font-['spectral'] leading-normal">
                    <a href="mailto:deepak.kodi@icloud.com"><button
                        className="bg-gray-700 hover:bg-[#0166B1] text-white italic py-2 px-4 rounded">
                        Get in
                        touch
                    </button>
                    </a>
                </div>
            </div>
            {/* <AppFooter /> */}
        </div>
    )
}