import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_CwpX-9t9.mjs';
import { $ as $$Layout } from '../chunks/Layout_B4YzAzfr.mjs';
import { $ as $$SecondNav } from '../chunks/SecondNav_BbwAJK3a.mjs';
import { p as personalSkills, l as languages, c as courses } from '../chunks/skills_DmJUU0ru.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col w-full h-auto min-h-lhv mb-10"> <div class="flex flex-row justify-center w-full md:mt-20 mt-30 z-1"> ${renderComponent($$result2, "SecondNav", $$SecondNav, { "labels": [{ name: "About", href: "/about" }], "back_anchor": "/" })} </div> <section class="relative flex flex-col justify-center items-center w-full h-full"> <h1 class="md:absolute md:top-0 md:left-45 text-burntpeach font-playwrite md:text-6xl text-5xl mt-20">Sobre mi</h1> <div class="intro flex flex-col md:flex-row justify-around items-center mt-10 mb-20 gap-15 w-full"> <div class="flex flex-col justify-center items-center md:w-[40%] w-[80%] gap-5 md:mt-30 md:order-1 order-2"> <p class="md:w-[90%] md:text-2xl text-lg md:text-left text-center font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et nulla cursus, condimentum nibh sed, posuere felis. 
                    In viverra fermentum odio quis ornare. Quisque et laoreet orci. Duis ut laoreet lacus, at tempor eros. 
                    Curabitur tempus aliquet leo, ac consequat ligula suscipit in. 
                    Proin id ullamcorper tellus. Curabitur nec risus lectus.
</p> </div> <div class="md:w-100 w-90 md:h-110 h-100 overflow-hidden rounded-2xl md:order-2 order-1"> <img class="w-full h-full object-cover" src="./profile_img.jpg" alt="profile_image" loading="lazy"> </div> </div> <div class="skills flex md:flex-row flex-col justify-around md:items-baseline items-center md:w-[95%] w-full md:gap-10"> <div class="flex flex-col md:justify-between justify-center items-center gap-5 md:w-[50%] w-[90%] h-auto font-poppins"> <h2 class="text-2xl font-medium text-verdigris mb-10">Personal skills</h2> <ul class="flex md:flex-row flex-col justify-between items-center w-auto gap-5 mb-10"> ${personalSkills.map((skill) => renderTemplate`<li class="flex flex-row w-auto h-auto p-3 gap-3 bg-jasmine rounded-full"> ${skill.name} <img${addAttribute(skill.svg, "src")}${addAttribute(skill.name, "alt")}> </li>`)} </ul> <h2 class="text-2xl font-medium text-verdigris">Idiomas</h2> <ul class="flex flex-row justify-between items-center w-auto gap-5 mb-15"> ${languages.map((languaje) => renderTemplate`<li class="flex flex-col justify-center items-center w-auto h-auto p-5 gap-1 bg-jasmine rounded-4xl"> <p class="font-bold">${languaje.name}</p> <span class="font-extralight text-[12px]">${languaje.level}</span> </li>`)} </ul> </div> <div class="flex flex-row md:justify-around justify-center items-center w-[50%] h-full"> <div class="flex flex-col justify-between items-center gap-5 w-full h-auto font-poppins"> <h2 class="text-2xl font-medium text-verdigris">Otros estudios</h2> <ul class="flex flex-col justify-center items-around w-auto gap-5 mb-10"> ${courses.map((course) => renderTemplate`<li class="w-auto h-auto"> <p class="w-auto font-bold border-b border-gray-100 mb-2">${course.name}</p> <span>${course.institution}</span> </li>`)} </ul> </div> </div> </div> </section> </main> ` })}`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/about/index.astro", void 0);

const $$file = "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
