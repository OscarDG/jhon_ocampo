import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, k as renderComponent } from './astro/server_CwpX-9t9.mjs';

const $$Astro$1 = createAstro();
const $$Breadscrum = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Breadscrum;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadscrum" class="w-auto"> <ol class="flex flex-wrap items-center gap-2 text-sm text-mainblue"> ${items.map((item, index) => {
    const isLast = index === items.length - 1;
    return renderTemplate`<li class="flex items-center gap-2"> ${!isLast ? renderTemplate`<a${addAttribute(item.href, "href")} class="text-prusianblue hover:text-white transition-colors"> ${item.label} </a>` : renderTemplate`<span class="font-medium text-jasmine" aria-current="page"> ${item.label} </span>`} ${!isLast && renderTemplate`<span class="text-mainblue">/</span>`} </li>`;
  })} </ol> </nav>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/Breadscrum.astro", void 0);

const $$Astro = createAstro();
const $$SecondNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SecondNav;
  const { labels, back_anchor } = Astro2.props;
  const breadscrum = [
    { label: "Home", href: "/" },
    ...labels.map((labeled) => ({ label: `${labeled.name}`, href: `${labeled.href}` }))
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="flex md:flex-row flex-col justify-between items-center w-full h-auto font-bold md:pl-10 pl-6 md:pr-10 pr-6 md:gap-0 gap-5"> <a${addAttribute(back_anchor, "href")} class="group relative flex flex-row w-10 h-10 p-2 ml-0 md:mb-0 text-white font-poppins rounded-full overflow-hidden bg-jasmine shadow-md shadow-black-200 transition-[width, border-radius] duration-500 ease[cubic-bezier(0.87, 0.04, 1, 1)] group-hover:duration hover:w-31 hover:rounded-4xl active:translate-x-0.5 active:translate-y-0.5 md:order-1 order-2"> <img src="/icons/rowback.svg" alt="back" class="w-full rounded-full transition group-hover:duration-500 delay-75 group-hover:w-10 z-10"> <span class="absolute -right-10 top-2 w-19 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:w-19 group-hover:right-1">Go back</span> </a> <div class="flex flex-col w-auto h-auto mr-0 md:order-2 order-1"> ${renderComponent($$result, "Breadscrum", $$Breadscrum, { "items": breadscrum })} </div> </nav>`;
}, "C:/Users/espar/OneDrive/Escritorio/Programming/Jhon Ocampo Portfolio/src/components/SecondNav.astro", void 0);

export { $$SecondNav as $ };
