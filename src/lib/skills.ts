import type { Skills, PersonalSkills, Languages, Courses } from "../types/skills"

export const skills: Skills[] = [
    {
    id:1,
    name: 'Ilustración Digital',
    level: 3,
    img_url: '/illustration.webp',
    desc: 'Desarrollo ilustraciones digitales originales con enfoque conceptual, precisión técnica y sensibilidad visual. Creo piezas visuales coherentes y con personalidad, orientadas a fortalecer marcas, campañas y productos mediante un lenguaje gráfico claro y diferenciador.',
    svg: '/icons/illustration.svg'
},
{
    id: 2,
    name: 'Fotografía',
    level: 3,
    img_url: '/photography.webp',
    desc: 'Utilizo la fotografía como herramienta de comunicación visual, trabajando composición, luz y color para crear imágenes alineadas con la identidad de marca. Produzco contenido fotográfico profesional, auténtico y funcional para entornos comerciales, editoriales y digitales.',
    svg: '/icons/photo.svg'
},
{
    id: 3,
    name: 'Dibujo Análogo',
    level: 5,
    img_url: '/drawing.webp',
    desc: 'El dibujo análogo es la base de mi proceso creativo: a través del trazo exploro ideas y estructuras que se transforman en soluciones visuales sólidas. Esta práctica fortalece mi observación, síntesis y expresión gráfica, aportando claridad conceptual y carácter a cada proyecto.',
    svg: '/icons/drawing.svg'
},
{
    id: 4,
    name: 'Branding',
    level: 3,
    img_url: '/branding.webp',
    desc: 'Desarrollo branding desde una perspectiva estratégica y conceptual, creando identidades de marca claras y coherentes. Integro análisis, concepto y diseño visual para construir sistemas de marca funcionales, auténticos y orientados a resultados en entornos digitales y competitivos.',
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