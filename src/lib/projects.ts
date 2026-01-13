import type { Project } from "../types/projects.ts";

export const projects: Project[] = [
    {
        id: 1,
        slug: 'abuelaelina',
        type: 'Branding',
        name: 'Café Abuela Elina',
        images: [
            {id: 1, image_name: 'main_image', image_url: '/elina_vaso.webp'},
            {id: 2, image_name: 'second_imag', image_url: '/elina_taza.webp'},
            {id: 3, image_name: 'thirth_image', image_url: '/bolsa_negra.webp'},
            {id: 4, image_name: 'fourth_image', image_url: '/mockup_bolsa3.webp'},
            {id: 5, image_name: 'fifth_image', image_url: '/elina_vaso.webp'}
        ],
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
        images: [
            {id: 1, image_name: 'main_image', image_url: '/illustration.webp'},
            {id: 2, image_name: 'second_image', image_url: '/pallete.webp'},
            {id: 3, image_name: 'thirth_image', image_url: '/hero_bg.webp'},
        ],
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
        images: [
            {id: 1, image_name:'main_image' , image_url: '/photography.webp' },
            {id: 2, image_name:'second_image', image_url:'/branding.webp'},
            {id: 3, image_name:'thirth_image', image_url:'/drawing.webp'}
        ],
        alt: 'Paola Spa',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        sub: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        tech: [
            {id: 1, techName: 'Premiere', svg: '/icons/premiere.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    }
]
