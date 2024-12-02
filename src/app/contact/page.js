import Image from "next/image";

export default function Contact() {
    return (
        <main className=" bg-orange-100  min-h-[calc(100vh-64px)]" >
            hello from contact




            <form className="bg-white text-red-500" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <input type="text" name="firstname" id="firstname" />
                    <label htmlFor="yourname">
                        Your Name:
                    </label> <br />
                    <input type="text" name="name" id="yourname" />
                </p>
                <p>
                    <label htmlFor="youremail">
                        Your Email:
                    </label> <br />
                    <input type="email" name="email" id="youremail" />
                </p>
                <p>
                    <label htmlFor="yourmessage">
                        Message:
                    </label> <br />
                    <textarea name="message" id="yourmessage"></textarea>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>



        </main>
    );
}
