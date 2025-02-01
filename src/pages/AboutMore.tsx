import * as React from "react";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { Button } from "../components/ui/button";
// import { AppFooter } from "../components/AppFooter";

export default function AboutMore() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="flex flex-col h-screen">
            {/* <AppNav /> */}
            <div className="flex-grow">
                <div className="mt-20 pt-10 grid grid-cols-12 ">
                    <p className="col-start-2 col-end-10 col-span-8 font-semibold"> Recognition and Awards received:</p>
                </div>
                <div className="mt-5 pt-6 mx-auto mb-20">
                    <Carousel setApi={setApi} className="h-full  ">
                        <CarouselContent className="h-full w-full">
                            <CarouselItem className="flex w-full h-full justify-center items-center">
                                <img src="/assets/images/aboutme_readmore/feedback.jpg" alt="" width={1000} height={1000} />
                            </CarouselItem>
                            <CarouselItem className="flex w-full h-full justify-center items-center">
                                <img src="/assets/images/aboutme_readmore/Deepak_K_(100895613).jpg" alt="" width={1000} height={1000} />
                            </CarouselItem>

                            <CarouselItem className="flex w-full h-full  justify-center items-center">
                                <img src="/assets/images/aboutme_readmore/Loyalty Award.jpg" alt="" width={600} height={500} />
                            </CarouselItem>
                            <CarouselItem className="flex w-full h-full justify-center items-center">
                                <img src="/assets/images/aboutme_readmore/MSc Degree.jpg" alt="" width={600} height={500} />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <div className="mt-3 flex gap-3 justify-center">
                        <Button className="bg-gray-700 hover:bg-[#0166B1] text-white py-2 px-10 rounded" onClick={() => api?.scrollTo(current - 1)}>Previous</Button>
                        <Button className="bg-gray-700 hover:bg-[#0166B1] text-white py-2 px-10 rounded" onClick={() => api?.scrollTo(current + 1)}>Next</Button>
                    </div>
                </div>
            </div>
            {/* <AppFooter /> */}
        </div>
    )
}