
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




export default function Contact() {
    return (
        <main className=" bg-white  min-h-[calc(100vh-64px)] p-2  flex flex-col justify-center items-center"  >
            <h1 className="mb-8 text-lg max-w-[60ch]">If you’re interested in collaborating on a project or would like to learn more about my work, feel free to reach out. I’d love to hear from you!</h1>

            <div className="flex flex-col-reverse md:flex-row  w-full md:w-auto gap-x-4 gap-y-8">

                <div className="md:w-[400px]">
                    <ContactForm />
                </div>
                <div className="md:w-[400px] flex flex-col items-center gap-y-6 justify-center">

                    <a href="mailto:jbhall4291@gmail.com" target="_blank" rel="noreferrer">
                        <button
                            type="submit"
                            className=" btn btn-primary px-5 py-3 flex flex-row justify-center items-center gap-x-2  w-[226px] rounded text-base  text-white"
                        >
                            <div>Email Me</div>
                            <div style={{ height: "18px", width: "18px" }}>
                                <FontAwesomeIcon icon={faEnvelope} className="fa-regular fa-xl " />
                            </div>
                        </button>
                    </a>









                    <a href="https://www.linkedin.com/in/johnny-hall-dev/" target="_blank" rel="noreferrer">
                        <button
                            type="submit"
                            className=" btn btn-primary px-5 py-3 flex flex-row justify-center items-center gap-x-2  w-[226px] rounded text-base  text-white"
                        >
                            <div>Connect On LinkedIn</div>
                            <div style={{ height: "18px", width: "18px" }}>
                                <FontAwesomeIcon icon={faLinkedin} className="fa-regular fa-xl " />
                            </div>
                        </button>
                    </a>







                    <a href="https://github.com/jbhall4291" target="_blank" rel="noreferrer">
                        <button
                            type="submit"
                            className=" btn btn-primary px-5 py-3 flex flex-row justify-center items-center gap-x-2  w-[226px] rounded text-base  text-white"
                        >
                            <div>View My GitHub </div>
                            <div style={{ height: "18px", width: "18px" }}>
                                <FontAwesomeIcon icon={faGithub} className="fa-regular fa-xl " />
                            </div>
                        </button>
                    </a>






                </div>
            </div>
        </main>
    );
}
