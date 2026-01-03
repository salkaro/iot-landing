import { Badge } from "@/components/ui/badge";
import CodeBlockExample from "../ui/code-block";

export const CodeExample = () => (
    <div id="post" className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="bg-muted rounded-md max-w-xl h-full">
                    <CodeBlockExample />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
                    <div>
                        <Badge>API Integration</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                            Simple API Requests to Connect Your Devices
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                            Easily send sensor data and control commands to your devices using our RESTful API. Our well-documented endpoints and examples make integration fast and hassle-free, so you can start monitoring and managing your IoT devices in minutes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);