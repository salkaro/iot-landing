import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const SensorInfo = () => (
    <div id="sensor-info" className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="relative flex flex-col lg:flex-row gap-10 lg:items-center">
                <div className="flex gap-4 flex-col flex-1">
                    <div>
                        <Badge>Platform</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                            Connect, Track & Visualize Your Sensors in Real Time
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                            Connect pressure, temperature, flow, and custom sensors to our IoT platform using simple API requests. Monitor live sensor data, receive updates instantly, and make smarter decisions—all from a centralized dashboard.
                        </p>
                    </div>
                </div>
                <div className="lg:absolute lg:right-[-500px] xl:right-[-420px] 2xl:right-[-300px]">
                    <Image src="/landing/sensor.svg" alt="Sensor dashboard" width={1000} height={1000} />
                </div>
            </div>
        </div>
    </div>
);