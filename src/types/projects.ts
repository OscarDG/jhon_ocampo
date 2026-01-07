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
    main_image: string;
    second_image: string;
    thirth_image: string;
    fourth_image?: string;
    fifth_image?: string;
    sixth_image?: string,
    alt: string;
    desc: string;
    sub: string;
    tech: Tech[];
};