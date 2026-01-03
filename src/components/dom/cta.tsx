"use client"

import { BookText, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const CTA = () => {
    const router = useRouter();

    return (
        <div className="w-full py-20 lg:py-40 bg-muted">
            <div className="container mx-auto">
                <div className="flex flex-col text-center py-14 gap-4 items-center">
                    <div>
                        <Badge>Get started</Badge>
                    </div>
                    <div className="flex flex-col gap-2 px-4 sm:px-0">
                        <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                            Try our IoT platform today!
                        </h3>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                            Connect, monitor, and control your devices seamlessly with real-time data insights and powerful API integrations. Start optimizing your operations now with our easy-to-use platform built for businesses of all sizes.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="gap-4" variant="outline" onClick={() => router.push("https://docs.salkaro.com")}>
                            Documentation <BookText className="w-4 h-4" />
                        </Button>
                        <Button className="gap-4">
                            Sign up here <MoveRight className="w-4 h-4"  onClick={() => router.push("https://app.salkaro.com/sign-up")}/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};
