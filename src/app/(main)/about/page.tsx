import { Badge } from "@/components/ui/badge";


export const metadata = {
    title: "About Salkaro – Our Mission and Vision for IoT Innovation",
    description:
        "Learn about Salkaro’s mission to simplify IoT device management. Discover how we empower developers and businesses to build scalable, secure IoT solutions.",
    keywords: [
        "Salkaro",
        "About",
        "IoT innovation",
        "mission",
        "vision",
        "device management",
        "technology",
        "scalability",
        "security",
        "IoT platform",
    ],
    openGraph: {
        title: "About Salkaro – Empowering IoT Device Management",
        description:
            "Discover Salkaro’s story, mission, and commitment to making IoT device management seamless, secure, and scalable for developers and businesses.",
        url: "https://salkaro.com/about",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro About Us",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Salkaro – Our IoT Mission",
        description:
            "Explore how Salkaro is revolutionizing IoT device management with secure, scalable solutions designed for developers and enterprises.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};


export default function About() {
    return (
        <div className="w-full min-h-screen bg-background">
            <div className="container mx-auto">
                {/* Hero */}
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <Badge variant="outline">About Us</Badge>
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                        Powering Smarter Operations with Real‑Time IoT Insights
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                        Our cloud‑based platform transforms sensor data into actionable insights,
                        giving you the freedom to monitor, control, and optimize your devices
                        from anywhere in the world.
                    </p>
                </div>

                {/* Our Story */}
                <section className="py-20 lg:py-40">
                    <h2 className="text-3xl md:text-5xl font-regular mb-6 text-center">
                        Our Story
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto text-center">
                        Founded in 2024 by engineers frustrated with siloed device data and
                        manual monitoring, we set out to build a unified IoT dashboard that’s
                        powerful, easy to use, and fully API‑driven. What started as a side
                        project quickly evolved into a platform trusted by startups and
                        enterprises alike to streamline their operations.
                    </p>
                </section>

                {/* Mission & Values */}
                <section className="py-20 mb-48 lg:py-40 bg-muted rounded-lg">
                    <div className="max-w-4xl mx-auto grid gap-16 lg:grid-cols-3 text-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To democratize real‑time device monitoring and control, empowering
                                teams of all sizes to make data‑driven decisions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
                            <p className="text-muted-foreground">
                                A world where connected devices seamlessly communicate insights,
                                enabling proactive maintenance, efficiency, and innovation.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>🔒 Security First</li>
                                <li>⚡ Real‑Time Performance</li>
                                <li>🤝 Customer Obsession</li>
                                <li>💡 Continuous Innovation</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
