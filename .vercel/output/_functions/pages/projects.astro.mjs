import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_CwpX-9t9.mjs';
import { $ as $$SecondNav } from '../chunks/SecondNav_BbwAJK3a.mjs';
import { $ as $$Layout } from '../chunks/Layout_B4YzAzfr.mjs';
import { p as projects } from '../chunks/projects_CXpuk_ib.mjs';
export { renderers } from '../renderers.mjs';

const $$ImagesGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GridMotion", null, { "client:only": true, "gradientColorA": "#e76f51", ",": true, "gradientColorB": "#e76f51", "client:component-hydration": "only", "client:component-path": "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/GridMotion.tsx", "client:component-export": "default" })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/ImagesGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="relative flex flex-col justify-center items-center w-full md:min-h-dvh h-full mb-20"> <div class="w-full h-auto md:mt-26 mt-30"> ${renderComponent($$result2, "SecondNav", $$SecondNav, { "labels": [{ name: "Project", href: "/projects" }], ",": true, "back_anchor": "/" })} </div> <h1 class="md:w-150 w-full text-center text-3xl font-playwrite text-sandibrown mt-10">Mis Proyectos</h1> <div class="flex md:flex-row flex-col justify-center items-center w-[95%] md:h-auto mt-10 mb-20"> <ul class="flex flex-wrap md:flex-row flex-col justify-center items-center w-full gap-10"> ${projects.map((project) => renderTemplate`<a${addAttribute(`projects/${project.slug}`, "href")}> <li class="group relative flex flex-col justify-center items-center w-85 h-100 rounded-2xl shrink-0 overflow-hidden transition-all"> <img${addAttribute(project.images[0].image_url, "src")}${addAttribute(project.alt, "alt")} class="w-full h-full object-cover rounded-2xl shadow-md group-hover:duration-350 group-hover:scale-108"> <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-2xl"></div> <div class="absolute bottom-5 flex flex-col p-3"> <span class="flex w-5 h-0.5 rounded-full bg-white mb-2"></span> <h2 class="flex flex-col w-auto h-auto mb-3 text-md font-bold font-poppins text-white">${project.name}</h2> <p class="flex w-[80%] text-[0.7em] font-poppins text-white">${project.sub}</p> </div> </li> </a>`)} </ul> </div> </section> ${renderComponent($$result2, "ImagesGrid", $$ImagesGrid, {})} </main> ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
