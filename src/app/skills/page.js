import Image from "next/image";
import SkillCard from "@/components/SkillCard";




export default function Skills() {
    return (
        <>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <main className=" bg-white  min-h-[calc(100vh-64px)] flex flex-col justify-center py-4" >




                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    id="skills"
                    className="container mx-auto flex flex-col px-5 lg:px-10 text-prose"
                >
                    <p className=" text-center lg:text-lg ">
                        The following skills have been honed during my journey on the amazing{" "}
                        <a className="text-highlight" href="https://northcoders.com/">
                            Northcoders bootcamp
                        </a>
                        , where I immersed myself in solo and pair-programmed sprints over a
                        thirteen week period, mastering the fundamentals of full-stack
                        development and culminating in the fully-featured projects presented in
                        this portfolio.
                    </p>



                    <div className="flex flex-wrap justify-center gap-1.5 py-5  md:m-auto md:w-5/6 md:gap-9 md:py-20">
                        <SkillCard label="React" icon="devicon-react-original colored" />
                        <SkillCard label="Next.js" icon="devicon-nextjs-plain colored" />
                        <SkillCard label="JavaScript" icon="devicon-javascript-plain colored" />
                        <SkillCard label="Node.js" icon="devicon-nodejs-plain colored" />
                        <SkillCard label="Firebase" icon="devicon-firebase-plain colored" />
                        <SkillCard label="PostgreSQL" icon="devicon-postgresql-plain colored" />
                        <SkillCard label="MongoDB" icon="devicon-mongodb-plain colored" />
                        <SkillCard label="express.js" icon="devicon-express-original colored" />
                        <SkillCard label="Jest" icon="devicon-jest-plain colored" />
                        <SkillCard label="Git" icon="devicon-git-plain colored" />
                        <SkillCard label="Tailwind" icon="devicon-tailwindcss-plain colored" />
                        <SkillCard label="HTML5" icon="devicon devicon-html5-plain colored" />
                        <SkillCard label="CSS3" icon="devicon devicon-css3-plain colored" />
                        <SkillCard
                            label="Figma"
                            icon="devicon-figma-plain colored text-2xl md:text-5xl "
                        />
                    </div>
                    <p className="  text-center lg:text-lg">
                        But my learning journey doesn&apos;t stop here! I&apos;ve been expanding my tech
                        arsenal ever since, and I&apos;m currently delving into the fundamentals of
                        Python and exploring the possibilities of the Three.js library.
                    </p>
                </div>


            </main>
        </>
    );
}
