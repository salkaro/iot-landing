"use client"

import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const FAQ = () => {
    const router = useRouter();

    const faqs = [
        {
            question: "What types of devices can I connect to the platform?",
            answer:
                "You can connect a wide range of IoT devices such as water pumps, pressure sensors, smart switches, and other compatible sensors that support sending data via API requests.",
        },
        {
            question: "How do I send data from my sensors to the platform?",
            answer:
                "Our platform provides RESTful API endpoints where your sensors can send POST requests with data. You’ll find detailed documentation and code examples to help you integrate quickly.",
        },
        {
            question: "Can I control my devices remotely through the platform?",
            answer:
                "Yes, you can turn devices on or off, and manage device configurations directly from our dashboard or via the API.",
        },
        {
            question: "Is my data secure on your platform?",
            answer:
                "Absolutely. We use industry-standard encryption and secure API key management to ensure your data and device access remain protected at all times.",
        },
        {
            question: "How do I manage user permissions within my organization?",
            answer:
                "You can easily add and manage members within your organization, assigning roles and permissions to control who can view or control devices and access different parts of the platform.",
        },
        {
            question: "Do you provide real-time monitoring and alerts?",
            answer:
                "Yes, our platform offers real-time data updates and can be configured to send alerts based on custom thresholds you set for your devices.",
        },
        {
            question: "Is there a free trial or demo available?",
            answer:
                "Yes, we offer a free trial so you can explore our features and see how the platform works with your devices before committing.",
        },
        {
            question: "What kind of customer support do you provide?",
            answer:
                "We provide email and phone support, along with detailed online documentation and tutorials to help you get the most out of our platform.",
        },
    ];

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="flex gap-10 flex-col">
                        <div className="flex gap-4 flex-col">
                            <div>
                                <Badge variant="outline">FAQ</Badge>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                                    Frequently Asked Questions
                                </h4>
                                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                                    Have questions? We&apos;re here to help you understand how our IoT platform
                                    can streamline your device management and monitoring.
                                </p>
                            </div>
                            <div>
                                <Button className="gap-4" variant="outline" onClick={() => router.push("/contact")}>
                                    Any questions? Reach out <PhoneCall className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={"faq-" + index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
