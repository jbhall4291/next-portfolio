import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-purple-500 navbar px-4">
            <Link href="/" className="navbar-start">LOGO</Link>

            <div className="navbar-end flex flex-row gap-x-8">
                <Link href="about">About</Link>
                <Link href="skills">Skills</Link>
            </div>
        </header>
    );
}
