import Image from "next/image";
//import { Typography } from "@material-tailwind/react";
//import { motion } from "framer-motion";

export default function About() {
    return (

        <main className=" bg-white  min-h-[calc(100vh-64px)] flex flex-col justify-center py-4" >




            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                id="skills"
                className="container mx-auto flex flex-col px-5 lg:px-10 text-prose"
            >


                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">1984</time>
                            <div className="text-lg font-black">Brief IT, then backpacking</div>
                            As a lifelong learner and outgoing individual with a diverse range of
                            experiences, I spent several years working in the IT industry before
                            taking time off to travel and explore the world. During my travels, I
                            had the opportunity to meet new people & experience different cultures
                            which enabled me to develop as an individual. Having got as far as
                            Australia, I decided it was probably time to start heading back!

                            <Image
                                src="/images/about/sydney.jpeg"
                                width={500}
                                height={288}
                                className="  col-span-1 rounded shadow-2xl md:order-none order-2 "
                                alt="johnny hall by sydney opera house"
                                loading="eager"
                                priority={true} />
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">1998</time>
                            <div className="text-lg font-black">Return</div>
                            Upon returning to the UK, I wanted to challenge myself in new ways and
                            so undertook the famous &apos;Knowledge of London&apos; exam. Subsequently, I
                            worked as a black cab driver, navigating the bustling streets of London
                            while honing my communication and problem-solving skills. However, my
                            passion for technology & programming soon resurfaced as I found myself
                            delving into the Unity engine, as well as Unreal and Blender. I then
                            expanded my horizons by exploring HTML and CSS, and was thrilled to
                            discover the seemingly endless possibilities of JavaScript, which
                            quickly became my focus.

                            <Image
                                src="/images/about/cab.jpeg"
                                width={500}
                                height={288}
                                className="col-span-1 rounded shadow-2xl md:order-none order-4"
                                alt="johnny hall by his old cab"
                                loading="eager"
                                priority={true}
                            />


                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2001</time>
                            <div className="text-lg font-black">iPod</div>
                            Dabbling at the weekends with JavaScript wasn&apos;t cutting it anymore, so I
                            enrolled in the Northcoders Coding Bootcamp to kickstart a new career in
                            software development. The amazing course covered so much ground, and I
                            was able to build on my existing knowledge to develop a deep
                            understanding of web development. By the end of the course, I was
                            pitching, planning, and then building full-stack apps! When I&apos;m not
                            working on my latest programming project, you can find me enjoying a
                            delicious slice of pizza or spending time with my beloved pug Ivy in the
                            great outdoors.

                            <Image
                                src="/images/about/ivy.jpeg"
                                width={500}
                                height={288}
                                className="col-span-1 rounded shadow-2xl md:order-none order-6"
                                alt="johnny hall with ivy the pug"
                                loading="eager"
                                priority={true}
                            />


                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2007</time>
                            <div className="text-lg font-black">iPhone</div>
                            As a lifelong learner and outgoing individual with a diverse range of
                            experiences, I spent several years working in the IT industry before
                            taking time off to travel and explore the world. During my travels, I
                            had the opportunity to meet new people & experience different cultures
                            which enabled me to develop as an individual. Having got as far as
                            Australia, I decided it was probably time to start heading back!

                            <Image
                                src="/images/about/sydney.jpeg"
                                width={384}
                                height={288}
                                className="  col-span-1 rounded shadow-2xl md:order-none order-2 "
                                alt="johnny hall by sydney opera house"
                                loading="eager"
                                priority={true}
                            />


                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2015</time>
                            <div className="text-lg font-black">Apple Watch</div>
                            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness
                            tracking, health-oriented capabilities, and wireless telecommunication, and integrates with
                            iOS and other Apple products and services
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    );
}
