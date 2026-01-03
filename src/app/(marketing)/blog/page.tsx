// Showcase blogs
import { blog1 } from "@/components/blogs/how-to-manage-100+-iot-devices-efficiently-with-salkaro";
import BlogCard from "@/components/ui/blog-card";
import { blog2 } from "@/components/blogs/monitoring-real-time-sensor-data-use-cases-best-practices";

export const metadata = {
    title: "Salkaro Blog – Insights on IoT, Device Management & Real-Time Monitoring",
    description:
        "Keep up with the latest in IoT solutions—explore tutorials, best practices, and deep dives on sensor integration, firmware updates, and scalable device networks from the Salkaro team.",
    keywords: [
        "Salkaro blog",
        "IoT tutorials",
        "sensor integration",
        "device management blog",
        "firmware update guide",
        "real-time monitoring tips",
        "IoT best practices",
        "ESP32 tutorial",
        "Raspberry Pi IoT",
        "cloud IoT platform",
    ],
    openGraph: {
        title: "Salkaro Blog – Deep Dive into IoT & Device Management",
        description:
            "Discover expert content on building and scaling IoT networks—sensor guides, firmware tips, platform insights, and more from the Salkaro team.",
        url: "https://salkaro.com/blog",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro Blog",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salkaro Blog – Your IoT Resource Hub",
        description:
            "From sensor setup to platform scaling, get the latest insights and guides on building successful IoT systems on the Salkaro blog.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};

export default function Blog() {
    return (
        <div className="w-full py-20 lg:py-40 mb-96">
            <div className="container max-w-4xl mx-auto flex flex-col gap-14">
                <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
                    <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                        Latest articles
                    </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2">
                        <BlogCard
                            slug="how-to-manage-100+-iot-devices-efficiently-with-salkaro"
                            post={blog1}
                        />
                    </div>
                    <BlogCard
                        slug="monitoring-real-time-sensor-data-use-cases-best-practices"
                        post={blog2}
                    />
                </div>
            </div>
        </div>
    );
}
