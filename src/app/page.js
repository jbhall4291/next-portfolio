import Image from "next/image";
import { RoughNotation } from "react-rough-notation";


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
        />
        <Image
          src="/images/hero-mobile.jpg"
          width={400}
          height={400}
          className="block md:hidden rounded-lg"
          alt="headshot of johnny hall"
          loading="eager"
        />
        <div>
          <h1 className="text-5xl font-bold text-primary">Hi, I'm Johnny.</h1>
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
            <br />Whether it's front-end or back-end, I'm always{" "}
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




          <button className="btn bg-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
}
