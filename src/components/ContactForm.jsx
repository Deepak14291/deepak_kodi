export function ContactForm() {
    return (
        <>
            <div className="mt-20 pt-10 flex-grow">
                <div className="grid grid-cols-12 custom-font">
                    <div className="col-start-3 col-end-6 col-span-2 font-bold text-2xl">
                        Contact
                    </div>
                </div>

                <div className="mt-10 text-sm custom-font font-bold">
                    <form >
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-start-3 col-end-5 col-span-2">
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="col-start-5 col-end-8 col-span-3">
                                <input id="name" type="text" className="text-sm" />
                            </div>
                            <div className="col-start-3 col-end-5 col-span-2">
                                <label htmlFor="email">Email address</label>
                            </div>
                            <div className="col-start-5 col-end-8 col-span-3">
                                <input id="email" type="text" className="text-sm" />
                            </div>
                            <div className="col-start-3 col-end-5 col-span-2">
                                <label htmlFor="message">Message</label>
                            </div>
                            <div className="col-start-5 col-end-8 col-span-3">
                                <textarea id="message" rows="10" cols="50" className="text-sm" />
                            </div>
                            <div className="mt-4 justify-items-center col-start-5 col-end-7 col-span-3">
                                <div>
                                    <button className="bg-gray-700 hover:bg-[#0166B1] text-white font-semibold py-2 px-4 rounded">
                                        Send
                                        message
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div >

                <div className="mt-3 justify-items-center custom-font font-bold text-sm grid grid-cols-12 text-gray-400">
                    <div className="col-start-5 col-end-7 col-span-2">or</div>
                </div>

                <div className="mt-3 custom-font font-bold text-sm grid grid-cols-12 text-gray-400 ">
                    <div className="col-start-5 col-end-8 col-span-3">

                        <a href="mailto:deepak.kodi@icloud.com" className="hover:text-[#0166B1]">Contact using your default email
                            client</a>
                    </div>
                </div>
            </div>
        </>
    )
}