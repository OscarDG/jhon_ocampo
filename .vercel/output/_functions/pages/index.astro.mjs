import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, l as renderSlot, h as createAstro, k as renderComponent, n as Fragment } from '../chunks/astro/server_CwpX-9t9.mjs';
import { $ as $$Layout } from '../chunks/Layout_B4YzAzfr.mjs';
/* empty css                                 */
import { s as skills } from '../chunks/skills_DmJUU0ru.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { p as projects } from '../chunks/projects_CXpuk_ib.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="main_hero relative flex flex-col md:flex-row justify-center items-center w-full h-full min-h-190"> <div class="absolute inset-0 bg-[url(../../public/hero_bg.webp)] bg-cover bg-center" aria-hidden="true"></div> <div class="absolute inset-0 bg-black/40 "></div> <div class="relative flex flex-col justify-end items-center order-2 md:order-1 w-[85%] md:w-2xl h-auto z-1 mt-10 md:mt-0 mb-10"> <h1 class="font-extrabold text-3xl md:text-7xl text-white text-center font-playwrite leading-normal mb-2">JHON OCAMPO</h1> <p class="w-full text-white text-center font-bold mb-10">Diseñador Gráfico en formación | Identidad Visual & Diseño Digital</p> <p class="w-full md:w-md text-white text-sm text-center font-poppins mb-10">Profesional en formación con un enfoque en soluciones visuales funcionales, identidad de marca y diseño digital.</p> <a class="hero-cta relative flex flex-col justify-center items-center w-35 h-15 box-border border border-transparent bg-jasmine rounded-4xl text-burntpeach font-bold font-poppins hover:border-sandibrown hover:bg-transparent hover:text-sandibrown hover:border" href="#projects">Ver portafolio</a> </div> <div class="relative flex flex-col justify-end items-center order-1 md:order-2 md:w-2xl w-full h-auto mb-10 mt-40 md:mt-0"> <div class="w-90 h-110 overflow-hidden rounded-2xl"> <img class="w-full h-full object-cover" src="/profile_img.webp" alt="hero_image" loading="lazy"> </div> </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$SkillCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillCard;
  const { name, level, img_url, desc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flip-card"> <div${addAttribute(`flip-card-inner`, "class")}> <div class="flip-card-front flex flex-row bg-cover bg-center shadow-md"${addAttribute(`background-image: url(${img_url})`, "style")}> <div class="overlay"> <div class="flex flex-row w-full h-auto p-2 items-center"> <h1 class="font-bold">${name}</h1> <span class="absolute bottom-5 right-5 flex flex-col justify-center items-center w-8 h-8 bg-white/50 rounded-full"> ${renderSlot($$result, $$slots["icon"])} </span> </div> </div> </div> <div class="flip-card-back"> <p class="text-sm text-center">${desc}</p> </div> </div> </div>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/Skill_card.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center w-full h-auto bg-[#F5F5F4]"> <div class="flex flex-col justify-center items-center w-full h-auto pt-10"> <h1 class="mb-10 font-poppins text-3xl md:text-5xl text-charcoalblue">Mis competencias</h1> </div> <div class="flex flex-row justify-center self-center flex-wrap p-10 gap-y-10 gap-x-10 w-[90%] h-auto"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "SkillCard", $$SkillCard, { "id": skill.id, "name": skill.name, "level": skill.level, "img_url": skill.img_url, "desc": skill.desc }, { "icon": ($$result2) => renderTemplate`<img${addAttribute(skill.svg, "src")}${addAttribute(skill.name, "alt")} class="w-5 h-5">` })}`)} </div> </section>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/Skills.astro", void 0);

function Projects() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => i === projects.length - 1 ? 0 : i + 1);
  const next = () => setIndex((i) => i > 0 ? i - 1 : 0);
  const current = projects[index];
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "relative flex flex-col md:flex-row justify-around items-center w-full h-auto md:h-lvh bg-cover bg-no-repeat bg-center py-2", style: { backgroundImage: `url(${current.images[0].image_url})` }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
    /* @__PURE__ */ jsxs("div", { className: "order-2 md:order-1 relative flex flex-col justify-between items-center md:items-baseline w-full md:w-[50%] h-auto p-10 md:mt-0 mt-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "title flex flex-col justify-baseline items-center md:items-baseline w-fit max-w-full", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-white text-center md:text-left text-3xl font-poppins pb-2", children: current.name }),
        /* @__PURE__ */ jsx("span", { className: "w-full h-0.5 rounded-full bg-jasmine" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col md:justify-baseline justify-center items-baseline w-[90%] h-auto p-4 mt-5 mb-15 md:mb-0", children: /* @__PURE__ */ jsx("p", { className: "text-white md:text-1xl lg:tex-3xl text-center md:text-left font-poppins", children: current.desc }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-around items-center w-[90%] h-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-row justify-around w-auto p-3 gap-5", children: current.tech.map((tech) => /* @__PURE__ */ jsx("div", { className: "flex flex-col text-white font-poppins bg-charcoalblue/90 p-2 border rounded-lg", children: /* @__PURE__ */ jsx("img", { src: tech.svg, alt: tech.techName, loading: "lazy" }) })) }),
        /* @__PURE__ */ jsxs("a", { className: "group flex flex-row items-center gap-3 w-auto h-[70%] pl-6 pr-4 pt-2 pb-2 rounded-2xl bg-jasmine", href: `/projects/${current.slug}`, children: [
          /* @__PURE__ */ jsx("span", { className: "w-auto h-auto text-sandibrown font-bold font-poppins", children: "Explorar" }),
          /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "20",
              height: "20",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "#f4a261",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-right transition-transform duration-300 group-hover:translate-x-2",
              children: [
                /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                /* @__PURE__ */ jsx("path", { d: "M9 6l6 6l-6 6" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 md:order-2 relative flex flex-col justify-center items-center overflow-hidden w-full md:w-150 h-auto gap-6 md:mt-0 mt-15", children: [
      /* @__PURE__ */ jsx("div", { className: "relative flex flex-row justify-baseline w-80 md:w-full rounded-2xl", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex w-80 h-90 gap-6 transition-transform duration-500 pr-5",
          style: { transform: `translateX(-${index * 100}%)` },
          children: projects.map((slide, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col w-full shrink-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: slide.images[0].image_url,
                alt: slide.alt,
                loading: "lazy",
                className: "w-full h-full object-cover rounded-2xl shadow-md"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-2xl" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-5 flex flex-col p-3", children: [
              /* @__PURE__ */ jsx("span", { className: "flex w-5 h-0.5 rounded-full bg-white mb-2" }),
              /* @__PURE__ */ jsx("h2", { className: "flex flex-col w-auto h-auto mb-3 text-md font-bold font-poppins text-white", children: slide.name }),
              /* @__PURE__ */ jsx("p", { className: "flex w-[80%] text-[0.7em] font-poppins text-white", children: slide.sub })
            ] })
          ] }, i))
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-50 md:w-70 h-10", children: [
        /* @__PURE__ */ jsx("div", { onClick: next, className: "flex flex-row justify-center items-center w-10 h-10 rounded-full border-2 border-sandibrown hover:bg-jasmine/70", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#f4a261",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-left cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M15 6l-6 6l6 6" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { onClick: prev, className: "flex flex-row justify-center items-center w-10 h-10 rounded-full border-2 border-sandibrown hover:bg-jasmine/70", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "#f4a261",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: "icon icon-tabler icons-tabler-outline icon-tabler-chevron-left cursor-pointer rotate-180",
            children: [
              /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M15 6l-6 6l6 6" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}

const techs = [
  {
    id: 1,
    name: "Figma",
    icon: "/icons/figma.svg"
  },
  {
    id: 2,
    name: "Illustrator",
    icon: "/icons/illustrator.svg"
  },
  {
    id: 3,
    name: "Photoshop",
    icon: "/icons/photoshop.svg"
  },
  {
    id: 4,
    name: "Premiere",
    icon: "/icons/premiere.svg"
  }
];

const $$TechCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative flex flex-row justify-center overflow-hidden w-full h-50 bg-gray-100" data-astro-cid-fw5apbe5> <div class="animate-carousel flex flex-row justify-around items-center w-full h-auto md:gap-50 gap-20" data-astro-cid-fw5apbe5> ${techs.map((tech) => renderTemplate`<div class="flex flex-col justify-center items-center md:w-25 w-30 md:h-25 h-30" data-astro-cid-fw5apbe5> <div class="flex flex-col md:w-14 w-18 md:h-14 h-18 p-2 mb-2 bg-deepteal/50 rounded-full" data-astro-cid-fw5apbe5> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} loading="lazy" data-astro-cid-fw5apbe5> </div> <span class="text-prusianblue font-poppins" data-astro-cid-fw5apbe5>${tech.name}</span> </div>`)} ${techs.map((tech) => renderTemplate`<div class="flex flex-col justify-center items-center md:w-25 w-30 md:h-25 h-30" data-astro-cid-fw5apbe5> <div class="flex flex-col md:w-14 w-18 md:h-14 h-18 p-2 mb-2 bg-deepteal/50 rounded-full" data-astro-cid-fw5apbe5> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} loading="lazy" data-astro-cid-fw5apbe5> </div> <span class="text-prusianblue font-poppins" data-astro-cid-fw5apbe5>${tech.name}</span> </div>`)} </div> </div> `;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/TechCarousel.astro", void 0);

const $$SectionProjects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Projects", Projects, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/Projects", "client:component-export": "default" })}${renderComponent($$result2, "TechCarousel", $$TechCarousel, {})}` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/SectionProjects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "SectionProjects", $$SectionProjects, {})} </main> ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
