import Image from "next/image";
//import { Typography } from "@material-tailwind/react";
//import { motion } from "framer-motion";

export default function About() {
    return (
        <main className=" bg-green-100  min-h-[calc(100vh-64px)]" >
            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: "easeOut" }}
                className="container mx-auto flex grid-rows-3 flex-col items-center gap-x-8 gap-y-8 px-5 md:grid md:grid-cols-4 lg:px-10"> */}
            <p
                color="blue-gray"
                className="text-md col-span-3 flex items-center text-justify  lg:text-lg order-1 md:order-none"
            >
                As a lifelong learner and outgoing individual with a diverse range of
                experiences, I spent several years working in the IT industry before
                taking time off to travel and explore the world. During my travels, I
                had the opportunity to meet new people & experience different cultures
                which enabled me to develop as an individual. Having got as far as
                Australia, I decided it was probably time to start heading back!
            </p>


            <Image
                src="/images/about/sydney.jpeg"
                width={384}
                height={288}
                className="  col-span-1 rounded shadow-2xl md:order-none order-2 "
                alt="johnny hall by sydney opera house"
                loading="eager"
                priority={true}
            />





            <Image
                src="/images/about/cab.jpeg"
                width={384}
                height={288}
                className="col-span-1 rounded shadow-2xl md:order-none order-4"
                alt="johnny hall by his old cab"
                loading="eager"
                priority={true}
            />


            <p
                variant="h5"
                color="blue-gray"
                className=" text-md col-span-3 flex items-center text-justify  lg:text-lg md:order-none order-3"
            >
                Upon returning to the UK, I wanted to challenge myself in new ways and
                so undertook the famous &apos;Knowledge of London&apos; exam. Subsequently, I
                worked as a black cab driver, navigating the bustling streets of London
                while honing my communication and problem-solving skills. However, my
                passion for technology & programming soon resurfaced as I found myself
                delving into the Unity engine, as well as Unreal and Blender. I then
                expanded my horizons by exploring HTML and CSS, and was thrilled to
                discover the seemingly endless possibilities of JavaScript, which
                quickly became my focus.
            </p>

            <p
                variant="h5"
                color="blue-gray"
                className="text-md  col-span-3 flex items-center text-justify md:order-none order-5 lg:text-lg"
            >
                Dabbling at the weekends with JavaScript wasn&apos;t cutting it anymore, so I
                enrolled in the Northcoders Coding Bootcamp to kickstart a new career in
                software development. The amazing course covered so much ground, and I
                was able to build on my existing knowledge to develop a deep
                understanding of web development. By the end of the course, I was
                pitching, planning, and then building full-stack apps! When I&apos;m not
                working on my latest programming project, you can find me enjoying a
                delicious slice of pizza or spending time with my beloved pug Ivy in the
                great outdoors.
            </p>




            <Image
                src="/images/about/ivy.jpeg"
                width={384}
                height={288}
                className="col-span-1 rounded shadow-2xl md:order-none order-6"
                alt="johnny hall with ivy the pug"
                loading="eager"
                priority={true}
            />



            {/* </motion.div> */}



        </main>
    );
}
