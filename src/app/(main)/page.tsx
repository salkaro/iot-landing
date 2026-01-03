import { Cases } from "@/components/dom/cases";
import { CodeExample } from "@/components/dom/code-example";
import { CTA } from "@/components/dom/cta";
import { FAQ } from "@/components/dom/faqs";
import { Hero } from "@/components/dom/hero";
import { OrganisationManagement } from "@/components/dom/organisation-management";
import { Pricing } from "@/components/dom/pricing";
import { SensorInfo } from "@/components/dom/sensor-info";


export const metadata = {
    title: "Salkaro – Connect and Manage Your IoT Devices Effortlessly",
    description:
        "Salkaro helps you connect, manage, and interact with internet-enabled devices like sensors and microcontrollers with ease. Scalable, secure, and ready for deployment.",
    keywords: [
        "IoT",
        "device management",
        "sensors",
        "microcontrollers",
        "API",
        "firmware",
        "Salkaro",
        "ESP32",
        "Raspberry Pi",
        "real-time monitoring",
    ],
    openGraph: {
        title: "Salkaro – Manage Your IoT Devices",
        description:
            "Connect and interact with internet-enabled devices seamlessly. Salkaro simplifies how you manage firmware, monitor data, and scale your IoT network.",
        url: "https://salkaro.com",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro Hero Banner",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salkaro – Connect and Manage IoT Devices",
        description:
            "Streamline your IoT device network with Salkaro. Manage sensors, push firmware, and get real-time data with ease.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};

export default function Home() {
    return (
        <>
            <Hero />
            <Cases />
            <SensorInfo />
            <OrganisationManagement />
            <CodeExample />
            <Pricing />
            <CTA />
            <FAQ />
        </>
    );
}
