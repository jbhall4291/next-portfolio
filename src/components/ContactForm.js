'use client';

import { useState } from 'react';


function ContactForm() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        visaType: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
        visaType: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation
        const validationErrors = {};

        if (formData.name.trim() === '') {
            validationErrors.name = "invalid";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email.trim() === '' || !emailRegex.test(formData.email)) {
            validationErrors.email = "invalid";
        }



        if (formData.message.trim() === '') {
            validationErrors.message = "invalid";
        }

        // Set errors or submit the form
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Proceed with form submission
            fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': 'contact',
                    'subject': 'Testing subject!',
                    ...formData
                }),
            })
                .then(() => setFormSubmitted(true))
                .catch((error) => alert(error));
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        if (value.trim() === '') {
            error = "generic invalid"
        } else if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = "email invalid"

            }
        }

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const { name, email, visaType, message } = formData;

    return (
        <div className="flex flex-col gap-y-1.5 w-full mx-auto  items-center text-black  ">
            {formSubmitted ? (
                <div className=" flex flex-col gap-y-3 text-center  justify-center  text-lg p-8 -lg ">
                    <h2>Thanks for your message, {formData.name}.</h2>
                    <p className="max-w-2xl   mx-auto  font-light text-black text-base  md:text-lg   ">
                        I&apos;ll be in touch soon!
                    </p>
                </div>
            ) : (
                <div className="text-left w-full">
                    <div className=" mx-auto text-center flex flex-col gap-y-1.5">

                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                        <div>
                            <p>
                                <label>Name:</label>
                            </p>
                            <input
                                className="bg-[#f7f7f7] border rounded border-solid w-full border-offBlack p-2   focus:outline focus:outline-highlight focus:border-highlight -lg"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Name"
                            />
                            <div className="h-1">
                                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                            </div>
                        </div>

                        <div>
                            <p>
                                <label>Email:</label>
                            </p>
                            <input
                                className="bg-[#f7f7f7] border rounded border-solid w-full border-offBlack p-2 focus:outline focus:outline-highlight focus:border-highlight -lg"
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Email"
                            />
                            <div className="h1">
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                            </div>
                        </div>


                        <div>
                            <p>
                                <label>Message:</label>
                            </p>
                            <textarea
                                className="bg-[#f7f7f7] border rounded  border-solid w-full  block border-offBlack p-2  focus:outline focus:outline-highlight focus:border-highlight -lg"
                                name="message"
                                rows="5"
                                value={message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Your Message"
                            />
                            <div className="h-1">
                                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className=" btn w-full btn-primary px-5 py-3 flex flex-row justify-center items-center gap-x-2 rounded text-base  text-white"
                        >
                            <div>Submit Message</div>
                        </button>






                    </form>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
