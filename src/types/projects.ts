export type Tech = {
    id: number,
    techName: string,
    svg: string,
}

export type Images = {
    id: number,
    image_name: string,
    image_url: string
}

export type Project = {
    id: number;
    slug: string;
    type: string;
    name: string;
    images: Images[]
    alt: string;
    desc: string;
    sub: string;
    tech: Tech[];
};