import UnderDevelopment from "@/components/ui/under-development";

export const metadata = {
    title: "Service Level Agreement (SLA) – Salkaro",
    description:
        "Review Salkaro’s SLA to understand our uptime commitments, support response times, and the performance standards you can expect from our IoT platform.",
    keywords: [
        "Salkaro SLA",
        "service level agreement",
        "IoT uptime guarantee",
        "platform performance",
        "service commitments",
        "response times",
        "support SLAs",
        "IoT reliability",
        "Salkaro service terms",
    ],
    openGraph: {
        title: "Service Level Agreement – Salkaro",
        description:
            "Explore the service guarantees Salkaro provides, including system uptime, incident response times, and support availability for our IoT solutions.",
        url: "https://salkaro.com/sla",
        siteName: "Salkaro",
        images: [
            {
                url: "https://i.imgur.com/2UakBhJ.png",
                width: 2523,
                height: 1439,
                alt: "Salkaro SLA",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Salkaro SLA – Our Service Commitments",
        description:
            "Understand the uptime guarantees and performance expectations laid out in Salkaro’s Service Level Agreement for IoT services.",
        images: ["https://i.imgur.com/2UakBhJ.png"],
    },
};

export default function SLA() {
    return (
        <UnderDevelopment />
    );
}
