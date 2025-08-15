export interface Welcome {
    title: string;
    description: Description;
    slug: string;
    isFeatured: boolean;
    order: number;
    date: Date;
    hero: Hero;
    sections: Section[];
}

export enum Description {
    Text = "text",
}

export interface Hero {
    heading: Heading;
    description: string;
    metadata: string[];
    bgImg: string;
    prev: Next;
    next: Next;
}

export interface Heading {
    bold: string;
    light: string;
}

export enum Next {
    URL = "url",
}

export interface Section {
    sectionType: string;
    heading?: Heading;
    text?: string;
    visual: Visual;
}

export interface Visual {
    kind: string;
    caption: string;
    src?: string;
    alt?: string;
    images?: After[];
    before?: After;
    after?: After;
}

export interface After {
    src: Next;
    alt: Description;
}
