import { Badge } from "@/components/ui/badge";

export const metadata = {
    title: "Careers at Salkaro – Help Build the Future of IoT",
    description:
        "Join the team at Salkaro and help shape the tools that power the future of connected devices. We're hiring engineers, designers, and creatives passionate about IoT.",
    keywords: [
        "Salkaro careers",
        "IoT jobs",
        "hardware jobs",
        "embedded systems",
        "firmware engineering",
        "tech startup jobs",
        "join our team",
        "Salkaro hiring",
        "connected devices",
        "remote tech jobs",
    ],
    openGraph: {
        title: "Careers at Salkaro – Build the Future of IoT",
        description:
            "Be part of the team simplifying how connected devices are built and managed. Explore career opportunities at Salkaro.",
        url: "https://salkaro.com/careers",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png", // update this if you have a careers-specific image
                width: 2523,
                height: 1439,
                alt: "Careers at Salkaro",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Join Salkaro – Careers in IoT and Connected Devices",
        description:
            "We’re building tools for developers working with embedded hardware. Come shape the future of connected tech with us.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};


export default function Careers() {
    return (
        <div className="w-full bg-background">
            <div className="container sm:mx-auto">
                {/* Hero */}
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <Badge variant="outline">Careers</Badge>
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                        Join Us in Building the Future of IoT
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                        We’re on a mission to give businesses real‑time control and insights over
                        their devices. If you’re passionate about IoT, data, and building scalable
                        SaaS products, we’d love to hear from you.
                    </p>
                </div>

                {/* Why Work With Us */}
                <section className="px-2 sm:px-0 py-20 lg:py-40 bg-muted rounded-lg">
                    <h2 className="text-3xl md:text-5xl font-regular mb-6 text-center">
                        Why You’ll Love It Here
                    </h2>
                    <ul className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-3 text-center">
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Flexible Remote Work</h3>
                            <p className="text-muted-foreground">
                                Work from anywhere with a schedule that fits your life.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Cutting‑Edge Tech</h3>
                            <p className="text-muted-foreground">
                                Build and scale a real‑time cloud IoT platform used worldwide.
                            </p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                            <p className="text-muted-foreground">
                                Join a tight‑knit team that values ownership and continuous learning.
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Call to action */}
                <section className="py-20 lg:py-40 text-center">
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don’t see your role listed? We’re always looking for talented people.
                        Send your resume to{" "}
                        <a href="mailto:careers@salkaro.com" className="text-primary underline">
                            careers@salkaro.com
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}
