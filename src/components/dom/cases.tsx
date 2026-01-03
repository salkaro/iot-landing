"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Cases = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const deviceLogos = [
        "raspberry-pi.svg",
        "esp.svg",
        "arduino.svg",
        "st-microelectronics.svg",
        "silicon-labs-2015.svg",
        "renesas.svg",
        "nxp.svg",
        "nordic-semiconductor.svg",
    ] // 7

    useEffect(() => {
        if (!api) {
            return;
        }

        setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 1000);
    }, [api, current]);

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="flex flex-col  gap-10">
                    <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                        Common devices used by our customers
                    </h2>
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {deviceLogos.map((logo, index) => (
                                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                                        <Image src={logo.includes("https") ? logo : `/landing/cases/${logo}`} alt="Device logo" width={70} height={70} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
