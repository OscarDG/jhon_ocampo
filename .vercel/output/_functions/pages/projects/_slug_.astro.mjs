import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, k as renderComponent } from '../../chunks/astro/server_CwpX-9t9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B4YzAzfr.mjs';
import { $ as $$SecondNav } from '../../chunks/SecondNav_BbwAJK3a.mjs';
import { p as projects } from '../../chunks/projects_CXpuk_ib.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Bento = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Bento;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative grid grid-cols-3 gap-3 w-full max-w-300 max-h-vh h-auto p-5"> ${images.map((image) => renderTemplate`<img${addAttribute(image.image_url, "src")} loading="lazy" class="bento_image w-full h-fit max-h-130 rounded-2xl">`)} </div>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/Bento.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const typeBgClass = {
    Branding: "bg-sandibrown",
    Illustration: "bg-jasmine",
    Photography: "bg-verdigris"
  };
  const bgClass = typeBgClass[project.type] ?? "bg-gray-200";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": project.name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center w-full h-auto min-h-secreen pt-10"> <div class="md:w-full w-full h-auto md:mt-10 mt-20 z-1"> ${renderComponent($$result2, "SecondNav", $$SecondNav, { "labels": [{ name: "Projects", href: "/projects" }, { name: `${project.name}`, href: "" }], "back_anchor": "/" })} </div> <div class="flex md:flex-row flex-col items-center justify-center w-full h-full gap-5 mt-10 mb-10"> <div class="flex flex-col justify-baseline items-baseline md:w-[40%] w-full h-[90%] font-poppins p-3 pl-5"> <div class="flex flex-col justify-center md:w-auto max-w-[90%] h-auto mb-5 gap-5"> <h1${addAttribute(`md:text-center text-left text-2xl font-bold w-full text-mainblue`, "class")}>${project.name}</h1> <span class="w-full h-0.5 bg-jasmine rounded-full"></span> </div> <span${addAttribute(["w-auto h-auto p-3 rounded-2xl font-bold text-sm text-white mb-5", bgClass], "class:list")}>${project.type}</span> <p class="w-[90%] h-auto mt-5">${project.desc}</p> <div class="flex flex-col justify-center items-baseline w-full h-auto gap-2 mt-10"> <h2 class="font-bold">Herramientas</h2> <div class="flex flex-row w-auto gap-2"> ${project.tech.map((tech) => renderTemplate`<div class="flex flex-col text-white font-poppins bg-charcoalblue p-2 border-lightblue border-2 rounded-lg"> <img class="w-8 h-8"${addAttribute(tech.svg, "src")}${addAttribute(tech.techName, "alt")} loading="lazy"> </div>`)} </div> </div> </div> <div class="flex flex-col justify-center items-center w-[55%] h-[90%]"> <div class="w-100 h-120 overflow-hidden"> <img class="w-full h-full object-cover rounded-2xl"${addAttribute(project.images[0].image_url, "src")}${addAttribute(project.alt, "alt")} loading="lazy"> </div> </div> </div> <div class="w-full h-auto"> ${renderComponent($$result2, "Bento", $$Bento, { "images": project.images })} </div> </main> ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
