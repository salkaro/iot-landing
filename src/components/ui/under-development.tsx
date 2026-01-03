"use client";

import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";


const UnderDevelopment = () => {
    const router = useRouter();
    return (
        <div className="w-full min-h-screen">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <div>
                        <Button variant="secondary" size="sm" className="gap-2" onClick={() => router.push("/releases")}>
                            Read our launch update <MoveRight className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
                            This page is under development
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                            We&apos;re actively building this part of the Salkaro platform. In the meantime, feel free to explore our current features or reach out if you have questions.
                        </p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Button size="lg" className="gap-2" variant="outline" onClick={() => router.push("/contact")}>
                            Contact our team <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-2">
                            Explore the platform <MoveRight className="w-4 h-4" onClick={() => router.push("/")} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderDevelopment;
