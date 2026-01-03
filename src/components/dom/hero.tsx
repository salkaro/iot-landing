"use client";

import { BookText, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Globe from "../ui/globe";
import { useRouter } from "next/navigation";


export const Hero = () => {
    const router = useRouter();

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                    <div className="z-30 flex gap-4 flex-col">
                        <div>
                            <Badge variant="outline">We&apos;re live!</Badge>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                                IoT Platform for Real-Time Device Monitoring & Remote Control
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                Easily track sensor data, monitor connected devices, and control equipment remotely with our powerful cloud-based IoT platform. From water pressure monitoring to full sensor network management, streamline your operations in real time.
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Button size="lg" className="gap-4" variant="outline" onClick={() => router.push("https://docs.salkaro.com")}>
                                Documentation <BookText className="w-4 h-4" />
                            </Button>
                            <Button size="lg" className="gap-4">
                                Sign up here <MoveRight className="w-4 h-4" onClick={() => router.push("https://app.salkaro.com/sign-up")} />
                            </Button>
                        </div>
                    </div>
                    <div className="z-20 opacity-70 sm:opacity-100 top-10 border-0 border-red-500 lg:col-span-1 absolute sm:static w-full h-[500px] sm:top-0 left-0">
                        <Globe />
                    </div>
                </div>
            </div>
        </div>
    )
};