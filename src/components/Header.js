import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar bg-base-100 lg:px-10 text-xl text-white">
            <div className="w-full md:navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link href="skills">Skills</Link>
                        <Link href="skills">Projects</Link>
                        <Link href="about">About</Link>
                        <Link href="about">Contact</Link>
                    </ul>
                </div>
                <Link className="w-full text-center md:text-left text-[1.1rem] lg:text-[1.3rem] " href="/">Johnny Hall : Software Developer</Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal lg:flex gap-x-10 text-[1.1rem] lg:text-[1.3rem]">
                    <Link href="skills">Skills</Link>
                    <Link href="projects">Projects</Link>
                    <Link href="about">About</Link>
                    <Link href="contact">Contact</Link>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
}
