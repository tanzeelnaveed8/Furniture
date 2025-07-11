"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Loader from "../components/Loader";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            await emailjs.send(
                "service_rii46gd",
                "template_lofofx4",
                { name, email, message },
                "6-Kam43CWHu3OFPER"
            );

            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully.",
                icon: "success",
                confirmButtonColor: "#6b21a8",
            });
            (e.currentTarget as HTMLFormElement).reset();
        } catch (error) {
            console.error("Form submission error:", error); // Logs the error

            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.", 
                icon: "error",
                confirmButtonColor: "#dc2626",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white relative">
        {/* Loader Show Hone ka Logic */}
        {loading && <Loader />}
        <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white ">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-8 flex items-center justify-center gap-2 animate-bounce">
                        <Mail className="text-purple-500 size-10" /> Get in Touch
                    </h3>
                    <p className="text-sm sm:text-base text-white mb-8">
                        I&aposm always open to new opportunities and exciting projects. Feel free to reach out if you&aposd like to work together!
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <a
                            href="https://github.com/tanzeelnaveed8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
                        >
                            <Github size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tanzeel-naveed-khan-660491312"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
                        >
                            <Linkedin size={32} />
                        </a>
                        <a
                            href="https://www.instagram.com/codebytanzeel_khan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
                        >
                            <Instagram size={32} />
                        </a>
                        <a
                            href="mailto:tanzeelnaveed8@gmail.com"
                            className="text-white hover:text-purple-500 transition-transform transform hover:scale-110"
                        >
                            <Mail size={32} />
                        </a>
                    </div>
                    {/* Contact Form */}
                    <div className="bg-gray-800/70 p-6 sm:p-8 rounded-2xl shadow-lg">
                        <h4 className="text-xl sm:text-2xl font-semibold mb-4">Send Me a Message</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm text-white">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Contact;

