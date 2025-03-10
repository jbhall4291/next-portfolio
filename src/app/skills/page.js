import Image from "next/image";
import SkillCard from "@/components/SkillCard";




export default function Skills() {
    return (
        <>
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <main className=" bg-white  min-h-[calc(100vh-64px)] flex flex-col justify-center  py-4" >




                <div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    id="skills"
                    className="container mx-auto flex flex-col px-5 gap-10 lg:px-10 text-prose justify-center"
                >
                    <p className=" text-left lg:text-lg max-w-[75ch] self-center">

                        I started my journey as a software developer at the amazing {" "}
                        <a className="text-highlight" href="https://northcoders.com/">
                            Northcoders bootcamp
                        </a>, where I immersed myself in full-stack development. Over a thirteen-week bootcamp, I worked on solo and pair-programmed sprints that introduced me to the fundamentals of web development. Since joining the industry, I’ve continued to grow and apply my skills through real-world projects, further refining my expertise.


                    </p>

                    <div className="flex flex-col justify-center items-center ">
                        <div className="text-left w-fit pb-2">⚙️ Languages & Frameworks</div>
                        <div className="flex flex-row flex-wrap  gap-5 justify-center w-fit">
                            <SkillCard label="C#" icon="devicon-csharp-plain colored" />
                            <SkillCard label=".NET" icon="devicon-dot-net-plain colored" />
                            <SkillCard label="React" icon="devicon-react-original colored" />
                            <SkillCard label="JavaScript" icon="devicon-javascript-plain colored" />
                            <SkillCard label="Node.js" icon="devicon-nodejs-plain colored" />
                            <SkillCard label="Next.js" icon="devicon-nextjs-plain colored" />
                            <SkillCard label="Express.js" icon="devicon-express-original colored" />
                            <SkillCard label="Vue.js" icon="devicon-vuejs-plain colored" />
                        </div>
                    </div>


                    <div className="flex flex-col justify-center items-center ">
                        <div className="text-left w-fit pb-2">🗄️ Databases</div>
                        <div className="flex flex-row flex-wrap  gap-5">
                            <SkillCard label="Firebase" icon="devicon-firebase-plain colored" />
                            <SkillCard label="PostgreSQL" icon="devicon-postgresql-plain colored" />
                            <SkillCard label="MongoDB" icon="devicon-mongodb-plain colored" />
                            <SkillCard label="SQL Server" icon="devicon-microsoftsqlserver-plain colored" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center ">
                        <div className="text-left w-fit pb-2">☁️ Cloud & Tools</div>
                        <div className="flex flex-row flex-wrap  gap-5">
                            <SkillCard label="Azure" icon="devicon-azure-plain colored" />
                            <SkillCard label="Git" icon="devicon-git-plain colored" />
                            <SkillCard label="Jest" icon="devicon-jest-plain colored" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center ">
                        <div className="text-left w-fit pb-2">🎨 Styling & UI</div>
                        <div className="flex flex-row flex-wrap  gap-5">
                            <SkillCard label="Tailwind" icon="devicon-tailwindcss-plain colored" />
                            <SkillCard label="Bootstrap" icon="devicon-bootstrap-plain colored" />
                            <SkillCard label="HTML5" icon="devicon devicon-html5-plain colored" />
                            <SkillCard label="CSS3" icon="devicon devicon-css3-plain colored" />
                            <SkillCard
                                label="Figma"
                                icon="devicon-figma-plain colored text-2xl md:text-5xl "
                            />
                        </div>
                    </div>
                </div>

                {/* <p className="  text-center lg:text-lg">
                        But my learning journey doesn&apos;t stop here! I&apos;ve been expanding my tech
                        arsenal ever since, and I&apos;m currently delving into the fundamentals of
                        Python and exploring the possibilities of the Three.js library.
                    </p> */}

            </main >
        </>
    );
}
