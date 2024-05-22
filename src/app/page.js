import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/hero-desktop.jpg"
          width={460}
          height={460}
          className="hidden md:block rounded-lg"
          alt="headshot of johnny hall"
          loading="eager"
          priority={true}
        />
        <Image
          src="/images/hero-mobile.jpg"
          width={400}
          height={400}
          className="block md:hidden rounded-lg"
          alt="headshot of johnny hall"
          loading="eager"
          priority={true}
        />
        <div>
          <h1 className="text-5xl font-bold text-primary">Hi, I&apos;m Johnny.</h1>
          <p className="py-6">Full-stack software developer by day, and a devoted pizza enthusiast{" "}
            <RoughNotation
              color="#fe003a"
              strokeWidth="5"
              type="crossed-off"
              show={true}
              animationDelay="1500"
              multiline="true"
            >
              by night
            </RoughNotation>
            .<br />



            <RoughNotation
              color="#fe003a"
              strokeWidth="5"
              type="underline"
              show={true}
              animationDelay="3000"
              multiline="true"
              padding={[0, 0, 0, 0]}
            >
              I love building cool stuff
            </RoughNotation>{" "}
            and learning new technologies.
            <br />
            <br />Whether it&apos;s front-end or back-end, I&apos;m always{" "}
            <RoughNotation
              type="box"
              multiline="true"
              strokeWidth="5"
              show={true}
              animationDelay="4500"
              color="#fe003a"
              animationDuration="1200"
            >
              up for a challenge 🚀
            </RoughNotation>
          </p>



          <div className="flex flex-row gap-x-10  animate-[wiggle_1s_ease-in-out_infinite]">

            <button className="btn transition-all duration-700 bg-primary border-2 border-primary text-white hover:border-primary  hover:bg-primary text-1xl  hover:shadow-[0_0px_15px_rgba(254,_0,_58,_1)] ">Get in touch
              <FontAwesomeIcon icon={faHandshake} className="fa-regular fa-xl" />
            </button>
            <button className="btn  transition-all duration-700 text-primary border-primary border-2  bg-white hover:bg-white hover:text-primary hover:border-primary  hover:shadow-[0_0px_15px_rgba(254,_0,_58,_1)] ">See my projects
              <FontAwesomeIcon icon={faCircleRight} className="fa-regular  fa-xl" />
            </button>




          </div>
        </div>
      </div>
    </div>
  );
}
