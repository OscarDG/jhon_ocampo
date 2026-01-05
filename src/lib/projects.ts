import type { Project } from "../types/projects.ts";

export const projects: Project[] = [
    {
        id: 1,
        slug: 'abuelaelina',
        type: 'Branding',
        name: 'Café Abuela Elina',
        image: '/branding.jpg',
        alt:'Abuela Elina',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        sub: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        tech: [
            {id: 1, techName: 'Illustrator', svg: '/icons/illustrator.svg'},
            {id: 2, techName: 'InDesign', svg: '/icons/indesign.svg'}
        ]
    },
    {
        id: 2,
        slug: 'alpina',
        type: 'Illustration',
        name: 'Renovación de imágen - Alpina',
        image: '/drawing.jpg',
        alt: 'Alpina',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        sub: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        tech: [
            {id: 1, techName: 'Illustrator', svg: '/icons/illustrator.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    },
    {
        id: 3,
        slug: 'paolaspa',
        type: 'Photography',
        name: 'Paola Ocampo - Spa de Uñas',
        image: '/photography.jpg',
        alt: 'Paola Spa',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        sub: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        tech: [
            {id: 1, techName: 'Premiere', svg: '/icons/premiere.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    }
]
