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

    <section id="projects" className="relative flex flex-col w-full h-lvh bg-cover bg-no-repeat bg-center py-2" style={{backgroundImage: `url(${current.image})`}}>
        <div className="absolute inset-0 bg-black/40"></div>
        {/*Backgound*/}
        <div className="relative flex flex-col justify-center items-center w-[50%] h-full">
            <div className="absolute flex flex-col justify-baseline items-baseline top-40 left-10">
                <h2 className="flex flex-row justify-center items-center font-bold text-white text-2xl font-poppins p-2">{current.name}</h2>
                <span className="w-full h-0.5 rounded-full bg-deepteal"></span>
            </div>
            <div className="absolute left-10 bottom-45 flex flex-col justify-baseline align-middle w-120 h-auto">
                <p className="text-white font-poppins">{current.desc}</p>
            </div>
            <div className="absolute bottom-20 left-10 flex flex-row justify-around w-auto p-3 gap-5">
            {
                    current.tech.map((tech) => (
                        <div className="flex flex-col text-white font-poppins bg-prusianblue/50 p-2 border rounded-lg">
                            <img src={tech.svg} alt={tech.techName} />
                        </div>
                    ))
                }
            </div>
            <a className='absolute bottom-24 right-50 flex flex-row items-center gap-3 text-jasmine w-auto h-auto pl-6 pr-4 pt-2 pb-2 rounded-2xl bg-deepteal' href={`/projects/${current.slug}`}>
                <span className="w-auto h-auto">Explorar</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" viewBox="0 0 24 24" 
                fill="none" stroke="currentColor" stroke-width="2" 
                stroke-linecap="round" stroke-linejoin="round" 
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
                </svg>
            </a>
        </div>
        {/* Carousel */}
        <div className="absolute bottom-30 right-5 flex flex-row justify-center items-center w-150 h-70">
            <div className="relative flex flex-row justify-baseline w-2xl overflow-hidden rounded-2xl">
            {/* Slides */}
                <div className="flex w-80 h-90 gap-5 transition-transform duration-500" 
                style={{ transform: `translateX(-${index * 100}%)` }}>
                    {projects.map((slide: any, i: any) => (
                    <div key={i} className="relative flex flex-col w-full shrink-0">
                        <img
                        src={slide.image}
                        alt={slide.alt}
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
            <div className="absolute -bottom-22 flex flex-row w-100 h-10">
                <svg onClick={prev} xmlns="http://www.w3.org/2000/svg" 
                    width="40" height="40" viewBox="0 0 24 24" 
                    fill="#ffffff" className=" absolute left-5 top-1/2 -translate-y-1/2 icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-left cursor-pointer">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                </svg>

                <svg onClick={next} xmlns="http://www.w3.org/2000/svg" 
                    width="40" height="40" viewBox="0 0 24 24" 
                    fill="#ffffff" className="absolute right-5 top-1/2 -translate-y-1/2 icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-right cursor-pointer">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" />
                </svg>
            </div>
        </div>
    </section>
    );

}