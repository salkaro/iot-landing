interface IBlog {
    title: string;
    description: string;
    date: string; // MMM dd, yyyy
    image: string // Route or Link
    sections: ISection[];
};

interface ISection {
    title: string;
    image?: string;
    description?: string;
    paragraphs: string[];
    link?: string;
    linkTitle?: string;
}

export type { IBlog }