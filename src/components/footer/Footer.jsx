import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandInstagramFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <section className="footer-section bg-(--primary-color) text-white">
            <div className="container mx-auto px-4 pt-20 pb-7.5 text-center">

                <h2 className="text-4xl sm:text-6xl font-bold mb-4">
                    Keen<span className="text-gray-300">Keeper</span>
                </h2>

                <p className="text-sm text-gray-300 mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-10">
                    <h3 className="mb-3 font-medium text-white">Social Links</h3>

                    <div className="flex justify-center gap-4">
                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-center hover:scale-105  duration-200  transition-all">
                            <TbBrandInstagramFilled size={20} />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-center hover:scale-105  duration-200  transition-all">
                            <FaFacebookSquare size={20} />
                        </a>

                        <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-center hover:scale-105  duration-200  transition-all">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>

                <hr className="border-gray-500 opacity-40 mb-7.5" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
                    <p className="hover:text-white">&copy; 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a className="hover:text-white">Privacy Policy</a>
                        <a className="hover:text-white">Terms of Service</a>
                        <a className="hover:text-white">Cookies</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;