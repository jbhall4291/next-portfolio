import Image from "next/image";
import { RoughNotation } from "react-rough-notation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  var notationPrimaryColour = "#F51767"
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/profilepic-white-square.png"
          width={300}
          height={300}
          className="block md:hidden rounded-lg"
          alt="headshot of johnny hall"
          loading="eager"
          priority={true}
        />
        <Image
          src="/images/profilepic-white-square.png"
          width={450}
          height={450}
          className="hidden md:block "
          alt="headshot of johnny hall"
          loading="eager"
          priority={true}
        />

        <div>
          <h1 className="text-center lg:text-left text-4xl md:text-6xl font-bold text-primary">Hi, I&apos;m Johnny.</h1>
          <h2 className="pt-4 pb-6 md:py-6 text-lg text-[#1f232a]">Full-stack software developer by day, and a devoted pizza enthusiast{" "}
            <RoughNotation
              color={notationPrimaryColour}
              strokeWidth="5"
              type="crossed-off"
              show={true}
              animationDelay="1500"
              multiline="true"
            >
              by night.
            </RoughNotation>
            <br />



            <RoughNotation
              color={notationPrimaryColour}
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
              color={notationPrimaryColour}
              animationDuration="1200"
            >
              up for a challenge 🚀
            </RoughNotation>
          </h2>



          <div className="flex flex-col md:flex-row gap-x-8 gap-y-4">

            <a href='/contact' className="font-semibold text-lg btn rounded-lg transition-all duration-700 bg-primary border-2 border-primary text-white hover:border-primary  hover:bg-primary text-1xl  hover:shadow-[0_0px_15px_rgba(254,_0,_58,_1)] ">Get in touch
              <FontAwesomeIcon icon={faHandshake} className="fa-regular fa-xl" />
            </a>


            <a href="/projects" className="font-semibold text-lg btn rounded-lg transition-all duration-700 text-primary border-primary border-2  bg-white hover:bg-white hover:text-primary hover:border-primary  hover:shadow-[0_0px_15px_rgba(254,_0,_58,_1)] ">
              See my projects
              <FontAwesomeIcon icon={faCircleRight} className="fa-regular  fa-xl" />
            </a>


          </div>
        </div>
      </div>
    </div>
  );
}
