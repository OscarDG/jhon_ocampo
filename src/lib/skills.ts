import type { Skills, PersonalSkills, Languages, Courses } from "../types/skills"

export const skills: Skills[] = [
    {
    id:1,
    name: 'Ilustración Digital',
    level: 3,
    img_url: '/illustration.webp',
    desc: 'Desarrollo ilustraciones digitales originales que combinan precisión técnica, sensibilidad visual y un enfoque conceptual claro. Utilizo herramientas profesionales para crear piezas que comunican ideas con fuerza, coherencia y personalidad, adaptadas a las necesidades de cada proyecto. Mi trabajo en ilustración aporta valor a marcas, campañas y productos que buscan diferenciarse a través de un lenguaje visual propio y consistente.',
    svg: '/icons/illustration.svg'
},
{
    id: 2,
    name: 'Fotografía',
    level: 3,
    img_url: '/photography.webp',
    desc: 'Concibo la fotografía como una herramienta estratégica de comunicación visual. Trabajo la imagen desde la composición, la luz y el color para construir narrativas visuales alineadas con la identidad de cada marca. Mi enfoque combina técnica y criterio estético para producir contenido fotográfico profesional, auténtico y funcional, pensado para contextos comerciales, editoriales y digitales.',
    svg: '/icons/photo.svg'
},
{
    id: 3,
    name: 'Dibujo Análogo',
    level: 5,
    img_url: '/drawing.webp',
    desc: 'El dibujo análogo es una base fundamental en mi proceso creativo. A través del trazo manual exploro ideas, estructuras y conceptos que luego se traducen en soluciones visuales sólidas y coherentes. Esta práctica fortalece mi capacidad de observación, síntesis y expresión gráfica, aportando profundidad conceptual y carácter a cada proyecto de diseño.',
    svg: '/icons/drawing.svg'
},
{
    id: 4,
    name: 'Branding',
    level: 3,
    img_url: '/branding.webp',
    desc: 'Trabajo el branding desde una perspectiva estratégica y conceptual, desarrollando identidades de marca claras, coherentes y con sentido. Integro análisis, concepto y diseño visual para construir sistemas de marca que conectan con las audiencias y responden a objetivos reales de negocio. Mi enfoque busca crear marcas auténticas, funcionales y preparadas para crecer en entornos competitivos y digitales.',
    svg: '/icons/branding.svg'
}
]

export const personalSkills: PersonalSkills[] = [
    {
        id: 1,
        name: 'Creatividad',
        svg: '/icons/creativity.svg'
    },
    {
        id: 2,
        name: 'Pensamiento Crítico',
        svg: '/icons/brain.svg'
    },
    {
        id: 3,
        name: 'Dinamismo',
        svg:'/icons/dinamic.svg'
    }
]

export const languages : Languages[] = [
    {
        id: 1,
        name: 'English',
        level: 'Básico'
    },
    {
        id: 2,
        name: 'Español',
        level: 'Nativo'
    }
]

export const courses : Courses[] = [
    {
        id: 1,
        name: 'Marketing Digital',
        institution: 'SENA'
    }
]