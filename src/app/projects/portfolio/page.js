import Image from "next/image";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";


export default function Projects() {



    const techUsed = [
        {
            "mapValue": {
                "fields": {
                    "name": {
                        "stringValue": "Next.js"
                    },
                    "icon": {
                        "stringValue": "devicon-nextjs-plain colored"
                    }
                }
            }
        },
        
        // {
        //     "mapValue": {
        //         "fields": {
        //             "name": {
        //                 "stringValue": "Firebase"
        //             },
        //             "icon": {
        //                 "stringValue": "devicon-firebase-plain colored"
        //             }
        //         }
        //     }
        // },
        {
            "mapValue": {
                "fields": {
                    "icon": {
                        "stringValue": "devicon-tailwindcss-plain colored"
                    },
                    "name": {
                        "stringValue": "Tailwind"
                    }
                }
            }
        },
        {
            "mapValue": {
                "fields": {
                    "name": {
                        "stringValue": "Figma"
                    },
                    "icon": {
                        "stringValue": "devicon-figma-plain colored"
                    }
                }
            }
        },
        
    ]





    return (
        <>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <main className=" bg-white  min-h-[calc(100vh-64px)] flex flex-col justify-center py-4" >
                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="container bg-white h-full"
                >
                    <div className="flex flex-col items-center justify-evenly gap-y-4 lg:flex-row ">
                        <div className="  order-2 flex  flex-col items-center gap-y-1 text-center lg:order-1 lg:justify-center">
                            <h1 className=" text-primary font-bold text-4xl text-highlight md:text-5xl">

                                JohnnyHall.Dev
                            </h1>
                            <h2 className="text-lg ">

                            A showcase of my software development journey, built with:
                            </h2>
                            <div className="flex  flex-row flex-wrap justify-center gap-1.5 md:gap-2 ">

                                {techUsed.map((tech, index) => {
                                    return (
                                        <SkillCard label={tech.mapValue.fields.name.stringValue} icon={tech.mapValue.fields.icon.stringValue} key={index}>
                                        </SkillCard>
                                    );
                                })}
                            </div>
                        </div>

                        <Image
                            width="813"
                            height="577"
                            className="order-2 h-[248px] w-[350px]  sm:h-[376px] sm:w-[528px]"
                            alt="newsbuzz"
                            src="/images/projects/project_page/portfolio.jpg"
                        />
                    </div>
                    <div
                        color="blue-gray"
                        className="w-max-w mx-auto justify-center px-4 py-4 text-center sm:w-4/6 lg:text-lg"
                    >
                        NewsBuzz is a React web app in the style of Reddit, allowing users to view, vote and comment on articles hosted on my own backend and psql database. This was built as part of the amazing Northcoders Full-Stack Software Developer Bootcamp, with the aim of bringing together my front and back end skills under one project!
                    </div>

                    <div className="mx-auto mt-4 flex flex-col items-center justify-center gap-5 text-center  sm:flex-row  sm:gap-10">

                    

                        <a href="https://github.com/jbhall4291/next-portfolio" target="_blank">
                            <button className="btn text-white hover:bg-primary hover:border-primary">
                                GitHub Repo
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
