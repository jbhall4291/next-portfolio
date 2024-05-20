import Image from "next/image";


export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/hero-desktop.jpg"
          width={500}
          height={500}
          className="hidden md:block rounded-lg"
          alt="headshot of johnny hall"
        />
        <Image
          src="/images/hero-mobile.jpg"
          width={400}
          height={400}
          className="block md:hidden rounded-lg"
          alt="headshot of johnny hall"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Johnny.</h1>
          <p className="py-6">Full-stack software developer by day, and a devoted pizza enthusiast by night.
            I love building cool stuff and learning new technologies.
            Whether it's front-end or back-end, I'm always up for a challenge 🚀.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
