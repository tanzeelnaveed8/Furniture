import {  FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-purple-900/20 ">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p className="mb-4">© 2025 Tanzeel Naveed Khan. All rights reserved.</p>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 text-xl">
                    
                    <a href="https://x.com/tanzeelnaveed5/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/tanzeel-naveed-khan-660491312" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/codebytanzeel_khan" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/923202834184" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:tanzeelnaveed88@gmail.com" className="hover:text-purple-400 transition">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Contact Number */}
                <p className="mt-4 text-gray-400">Contact: +92 320 2834 184</p>
            </div>
        </footer>
    );
};

export default Footer;

