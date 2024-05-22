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
          width={500}
          height={500}
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



          <div className="flex flex-row gap-x-10">

            <button className="btn bg-primary border-2 border-primary text-white hover:border-primary hover:text-white hover:bg-primary text-1xl hover:shadow-lg hover:shadow-primary hover:drop-shadow-2xl">Get in touch
              <FontAwesomeIcon icon={faHandshake} className="fa-light" size="2xl" />
            </button>
            <button className="btn  text-primary border-white border-2 hover:text-black bg-white">See my projects
              <FontAwesomeIcon icon={faCircleRight} className="fa-light" size="2xl" />
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}
