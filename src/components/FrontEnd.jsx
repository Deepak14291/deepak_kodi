import { Link } from "react-router-dom";

export default function FrontEnd() {
    return (<div>
        <div className="mt-4 grid grid-cols-12 custom-font gap-6">

            <div className="col-start-2 col-end-11 col-span-9 bg-stone-50 drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-row gap-2 ">
                    <div>
                        <img src="/assets/images/project_images/project_1/sample1.jpg" width="400" height="400" />
                    </div>
                    <div className="pl-4 flex flex-col justify-around">
                        <p className="project-name font-bold">
                            Mazda
                        </p>
                        <p className="project-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius tempore dolorem laboriosam,
                            exercitationem dolores, non ducimus voluptates sequi consectetur dolorum rem. Error neque nisi dolores
                            itaque asperiores quisquam. Excepturi?
                        </p>
                        <div className="flex flex-row justify-between py-2">
                            <div className="flex flex-row text-sm gap-2 pt-2">
                                <div className="font-bold content-center">Tech Stack:</div>
                                <div className="font-medium py-1 px-4 blue-color">HTML</div>
                                <div className="font-medium py-1 px-4 blue-color">CSS</div>
                                <div className="font-medium py-1 px-4 blue-color">JavaScript</div>
                            </div>
                            <Link to="mazda" className="mr-4 font-bold text-sm text-end hover:text-[#0166B1] content-end">
                                VIEW
                                PROJECT</Link>
                        </div>

                    </div>
                </div>
            </div>


            <div className="col-start-2 col-end-11 col-span-9 drop-shadow-lg shadow-[0px_-14px_21px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex flex-row gap-2 bg-stone-50">
                    <div>
                        <img src="/assets/images/project_images/project_1/sample1.jpg" width="400" height="400" />
                    </div>
                    <div className="pl-4 flex flex-col justify-around">
                        <p className="project-name font-bold">
                            Tesla
                        </p>
                        <p className="project-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eius tempore dolorem laboriosam,
                            exercitationem dolores, non ducimus voluptates sequi consectetur dolorum rem. Error neque nisi dolores
                            itaque asperiores quisquam. Excepturi?
                        </p>
                        <div className="flex flex-row justify-between py-2">
                            <div className="flex flex-row text-sm gap-2 pt-2">
                                <div className="font-bold content-center">Tech Stack:</div>
                                <div className="font-medium py-1 px-4 blue-color">HTML</div>
                                <div className="font-medium py-1 px-4 blue-color">CSS</div>
                                <div className="font-medium py-1 px-4 blue-color">JavaScript</div>
                            </div>
                            <Link to="tesla" className="mr-4 font-bold text-sm text-end hover:text-[#0166B1] content-end">
                                VIEW
                                PROJECT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}