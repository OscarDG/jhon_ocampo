import { useState } from "react";
import { projects } from "../lib/projects";
import type { Project } from "../types/projects.ts"

export default function Projects (){

    const [index, setIndex] = useState<number>(0);
    
      const prev = () => 
        setIndex((i) => (i === projects.length - 1 ? 0 : i + 1))
    
    
      const next = () =>
        setIndex((i) => (i > 0 ? i - 1 : 0));

      const current: Project = projects[index]

return(

    <section id="projects" className="relative flex flex-col md:flex-row justify-around items-center w-full h-auto md:h-lvh bg-[#f5f5f4] py-2">
            {/*Backgound*/}
        <div className="order-2 md:order-1 relative flex flex-col justify-between items-center md:items-baseline w-full md:w-[50%] h-auto p-10 md:mt-0 mt-10">
            <div className="title flex flex-col justify-baseline items-center md:items-baseline w-fit max-w-full">
                <h2 className="font-bold text-verdigris text-center md:text-left text-3xl font-poppins pb-2">{current.name}</h2>
                <span className="w-full h-0.5 rounded-full bg-jasmine"></span>
            </div>
            <div className="flex flex-col md:justify-baseline justify-center items-baseline w-[90%] h-auto p-4 mt-5 mb-15 md:mb-0">
                <p className="text-gray-900 md:text-1xl lg:tex-3xl text-center md:text-left font-poppins">{current.desc}</p>
            </div>
            <div className="flex flex-row justify-around items-center w-[90%] h-auto">
                    <div className="flex flex-row justify-around w-auto p-3 gap-5">
                        {
                            current.tech.map((tech) => (
                                <div className="flex flex-col text-white font-poppins bg-charcoalblue/90 p-2 border rounded-lg">
                                    <img src={tech.svg} alt={tech.techName} loading="lazy"/>
                                </div>
                            ))
                        }
                    </div>
                    <a className='group flex flex-row items-center gap-3 w-auto h-[70%] pl-6 pr-4 pt-2 pb-2 rounded-2xl bg-jasmine' href={`/projects/${current.slug}`}>
                        <span className="w-auto h-auto text-sandibrown font-bold font-poppins">Explorar</span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" height="20" viewBox="0 0 24 24" 
                        fill="none" stroke="#f4a261" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" 
                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right transition-transform duration-300 group-hover:translate-x-2">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </a>
            </div>
        </div>
        {/* Carousel */}
        <div className="order-1 md:order-2 relative flex flex-col justify-center items-center overflow-hidden w-full md:w-150 h-auto gap-6 md:mt-0 mt-15">
            <div className="relative flex flex-row justify-baseline w-80 md:w-full rounded-2xl">
                {/* Slides */}
                <div className="flex w-80 h-90 gap-6 transition-transform duration-500 pr-5" 
                style={{ transform: `translateX(-${index * 100}%)` }}>
                    {projects.map((slide: any, i: any) => (
                    <div key={i} className="relative flex flex-col w-full shrink-0">
                        <img
                        src={slide.images[0].image_url}
                        alt={slide.alt}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl shadow-md"/>
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-5 flex flex-col p-3">
                            <span className="flex w-5 h-0.5 rounded-full bg-white mb-2"></span>
                            <h2 className="flex flex-col w-auto h-auto mb-3 text-md font-bold font-poppins text-white">{slide.name}</h2>
                            <p className="flex w-[80%] text-[0.7em] font-poppins text-white">{slide.sub}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* Controls */}
            <div className="flex flex-row justify-between w-50 md:w-70 h-10">
                <div onClick={next} className="flex flex-row justify-center items-center w-10 h-10 rounded-full border-2 border-sandibrown hover:bg-jasmine/70">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="#f4a261" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" 
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left cursor-pointer">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 6l-6 6l6 6" />
                    </svg>
                </div>
                <div onClick={prev} className="flex flex-row justify-center items-center w-10 h-10 rounded-full border-2 border-sandibrown hover:bg-jasmine/70">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="#f4a261" stroke-width="2" 
                    stroke-linecap="round" stroke-linejoin="round" 
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left cursor-pointer rotate-180">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 6l-6 6l6 6" />
                    </svg>
                </div>
            </div>
        </div>
    </section>
    );

}