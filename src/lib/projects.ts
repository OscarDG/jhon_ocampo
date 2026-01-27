import type { Project } from "../types/projects.ts";

export const projects: Project[] = [
    {
        id: 1,
        slug: 'abuelaelina',
        type: 'Branding',
        name: 'Café Abuela Elina',
        images: [
            {id: 1, image_name: 'main_image', image_url: '/isologo_elina.webp'},
            {id: 2, image_name: 'second_imag', image_url: '/elina_taza.webp'},
            {id: 3, image_name: 'thirth_image', image_url: '/bolsa_negra.webp'},
            {id: 4, image_name: 'fourth_image', image_url: '/patron_azul_elina.webp'},
            {id: 5, image_name: 'fifth_image', image_url: '/elina_vaso.webp'},
            {id: 6, image_name: 'sixth_image', image_url: '/caja_elina.webp'},
        ],
        alt:'Abuela Elina',
        desc: 'Café Abuela Elina es una marca de café artesanal proveniente de las montañas cafeteras de Salento, Pasto. La identidad se construye a partir de la imagen de la abuela Elina, se hace una ilustración evocando elementos como las montañas de Salento e incluyendo piezas como las ramas, flores y granos de café, construyendo una narrativa a partir de lo natural y lo artesanal.',
        sub: 'Café Abuela Elina es una marca de café artesanal proveniente de las montañas cafeteras de Salento.',
        tech: [
            {id: 1, techName: 'Illustrator', svg: '/icons/illustrator.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    },
    {
        id: 2,
        slug: 'KarenJerez',
        type: 'Branding',
        name: 'Diseño de marca - Karen Jerez',
        images: [
            {id: 1, image_name: 'main_image', image_url: '/isologo_karen.webp'},
            {id: 2, image_name: 'second_image', image_url: '/mockup_redes2_karen.webp'},
            {id: 3, image_name: 'thirth_image', image_url: '/libreta_karen.webp'},
            {id: 4, image_name: 'fourth_image', image_url: '/pendon_karen.webp'},
            {id: 5, image_name: 'fifth_image', image_url: '/mockup_redes2_karen.webp'}
        ],
        alt: 'Karen jerez',
        desc: 'Karen Jerez es una marca creada para una microempresa dedicada a ofrecer asesorías financieras, enfocada en brindar acompañamiento claro, responsable y cercano a sus clientes. Su identidad visual se construye a partir de un monograma conformado por las letras K y J, diseñado como un símbolo sólido y elegante que refuerza el carácter profesional de la marca. Los elementos gráficos que lo componen evocan unidad, respaldo y compromiso, valores fundamentales que representan la confianza y el apoyo constante que Karen Jerez ofrece en la gestión y toma de decisiones financieras.',
        sub: 'Karen Jerez es una marca dedicada a ofrecer asesorías financieras.',
        tech: [
            {id: 1, techName: 'Illustrator', svg: '/icons/illustrator.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    },
    {
        id: 3,
        slug: 'JesicaStudio',
        type: 'Branding',
        name: 'Spa - Jesica Studio',
        images: [
            {id: 1, image_name:'main_image' , image_url: '/isologo_jesika.webp' },
            {id: 2, image_name:'second_image', image_url:'/mockup_crema_jesika.webp'},
            {id: 3, image_name:'thirth_image', image_url:'/jesika_studio_redes.webp'},
            {id: 4, image_name:'fourth_image', image_url:'/mockup_bolsa_jesica.webp'},
            {id: 5, image_name:'fifth_image', image_url:'/mockup_tarjeta_jesica.webp'},
            {id: 6, image_name:'sixth_image', image_url:'/mockup_letrero_jesica.webp'}
        ],
        alt: 'Jesica Studio',
        desc: 'Jesica studio es una marca encargada de brindar servicios de belleza, especializados en el cuidado de cabello y pestañas. Se realiza a mano alzada el dibujo del rostro de una mujer con líneas muy finas aludiendo a la delicadeza con elementos como una mariposa que evoca belleza y elegancia.',
        sub: 'Jesica studio - marca encargada de brindar servicios de belleza.',
        tech: [
            {id: 1, techName: 'Premiere', svg: '/icons/premiere.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    },
    {
        id: 4,
        slug: 'Recio',
        type: 'Branding',
        name: 'Recio - Estudio Creativo',
        images: [
            {id: 1, image_name: 'main_image', image_url: '/isologo_recio.webp'},
            {id: 2, image_name: 'second_image', image_url: '/isologo_redes_recio.webp'},
            {id: 3, image_name: 'thirth_image', image_url: '/mockup_bolsa_recio.webp'},
            {id: 4, image_name: 'fourth_image', image_url: '/mockup_camiseta_recio.webp'},
            {id: 5, image_name: 'fifth_image', image_url: '/mockup_chaqueta_recio.webp'}
        ],
        alt: 'Recio',
        desc: 'Recio es un estudio creativo dedicado al diseño gráfico, branding y diseño análogo. Para esta marca se crea el logo a partir de la imágen de un gato, que refleja las características de la personalidad de la marca, utilizando una ilustración con trazos fuertes y minimalistas que transmiten fuerza, rebeldía y libertad.',
        sub: 'Recio - Estudio Creativo dedicado al diseño gráfico, branding y diseño análogo.',
        tech: [
            {id: 1, techName: 'Illustrator', svg: '/icons/illustrator.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    },
        {
        id: 5,
        slug: 'PaolaOcampo',
        type: 'Branding',
        name: 'Paola Ocampo - Uñas con Estilo',
        images: [
            {id: 1, image_name: 'main_image', image_url: '/isologo_uñas.webp'},
            {id: 2, image_name: 'second_image', image_url: '/mockup_libreta_paola.webp'},
            {id: 3, image_name: 'thirth_image', image_url: '/mockup_esmalte_paola.webp'},
            {id: 4, image_name: 'fifth_image', image_url: '/mockup_tarjeta_paola.webp'},
            {id: 5, image_name: 'fourth_image', image_url: '/mockup_aviso_paola.webp'},
        ],
        alt: 'Paola_Uñas',
        desc: 'Spa de uñas Pola Ocampo nace de un emprendimiento basado en un servicio exclusivo de manicure; se construye un monograma minimalista a partir de la letra P, incluyendo elementos que simbolizan perfección, personalización y belleza. La unión entre sus componentes comunica un equilibrio entre elegancia y encanto.',
        sub: 'Paola Ocampo - Uñas con Estilo.',
        tech: [
            {id: 1, techName: 'Illustrator', svg: '/icons/illustrator.svg'},
            {id: 2, techName: 'Photoshop', svg: '/icons/photoshop.svg'}
        ]
    }
]
