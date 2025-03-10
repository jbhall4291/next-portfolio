import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Projects() {
    return (
        <main className=" bg-white  min-h-[calc(100vh-64px)] flex flex-col justify-center py-4 gap-8 lg:gap-20" >
            {/* <VideoModal
          showModal={showModal}
          setShowModal={setShowModal}
          videoToPlay={videoToPlay}
        /> */}


            <div
                color="blue-gray"
                className="w-max-w mx-auto justify-center px-5 text-center sm:w-4/6 lg:text-lg "
            >
                These projects are the culmination of my journey on the amazing{" "}
                <a className="text-highlight" href="https://northcoders.com/">
                    Northcoders bootcamp
                </a>
                , and continue to be developed, polished & refactored as I continue to
                learn.
            </div>

            <div className="mx-auto flex flex-col flex-wrap items-center justify-center gap-x-20 sm:flex-row gap-y-8  ">

                <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                    <figure className="h-[160px] md:h-auto">
                        <img

                            src="/images/projects/cards/project_newsbuzz.webp"
                            alt="NewsBuzz" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">NewsBuzz</h2>
                        <p>A reddit-style social news aggregation web app, built with React.</p>
                        <div className="card-actions justify-between mt-4">


                            <a href="https://www.youtube.com/watch?v=CnuN6rD8j8w&ab_channel=JHall" target="_blank">
                                <button className="btn btn-primary">Watch Video Demo</button>
                            </a>
                            <a href="/projects/newsbuzz">
                                <button className="btn btn-secondary">Learn More
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" /></svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                    <figure className="h-[160px] md:h-auto">
                        <img
                            src="/images/projects/cards/project_fanfinder.webp"
                            alt="Fan Finder" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">Fan Finder</h2>
                        <p>A location-based social networking app for iOS & Android, built with React Native.</p>
                        <div className="card-actions justify-between mt-4">


                            <a href="https://www.youtube.com/watch?v=kQ7weiOZzHM&ab_channel=JHall" target="_blank">
                                <button className="btn btn-primary">Watch Video Demo</button>
                            </a>


                            <a href="/projects/fanfinder">
                                <button className="btn btn-secondary">Learn More
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" /></svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-80 md:w-96 shadow-xl">
                    <figure className="h-[160px] md:h-auto">
                        <img
                            src="/images/projects/cards/project_portfolio.webp"
                            alt="Fan Finder" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title">JohnnyHall.Dev</h2>
                        <p>A showcase of my software development journey, built with Next.js.</p>
                        <div className="card-actions justify-end mt-4">
                            {/* <button className="btn btn-primary">Watch Video Demo</button> */}
                            <a href="/projects/portfolio">
                                <button className="btn btn-secondary">Learn More
                                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" /></svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>







                {/* {projectList.map((project) => (
            <ProjectCard
              setVideoToPlay={setVideoToPlay}
              setShowModal={setShowModal}
              key={project.title}
              youtubeURL={project.youtubeURL}
              title={project.title}
              image={project.cardScreenshotURL}
              description={project.cardTagline}
              learnMorePage={`/projects/${project.title}`}
              displayName={project.displayName}
              githubRepo={project.githubRepo}
            />
          ))} */}
            </div>
        </main>
    );
}
