export type Tech = {
    id: number,
    techName: string,
    svg: string,
}

export type Project = {
    id: number;
    slug: string;
    type: string;
    name: string;
    image: string;
    alt: string;
    desc: string;
    sub: string;
    tech: Tech[];
};