import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10 ">
      <div className="max-w-7xl mx-auto px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center justify-center md:justify-start  gap-3 mb-6">
              <img src={FooterLogo} alt="AI Hub Logo" className="h-10 w-auto" />
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                AI Hub
              </h2>
            </div>

            <p className="text-neutral-200 text-lg text-center md:text-left max-w-md">
              One subscription. Access to all frontier AI models in a single
              powerful platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-neutral-200 flex gap-4 text-center md:text-left justify-center md:flex-col md:gap-0">
              <li>
                <a href="#" className="hover:text-white transition">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-red-400 font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-neutral-200 flex gap-4 justify-center md:flex-col md:gap-0">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 text-center md:text-left ">
            <h3 className="text-red-400 font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-4 text-neutral-200 flex gap-4 justify-center text-center md:text-left md:flex-col md:gap-0">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Settings
                </a>
              </li>
            </ul>
            <div className="mt-8 flex text-center md:text-left justify-center md:justify-start gap-6 text-2xl text-neutral-200">
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaDiscord />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row text-neutral-200 items-center justify-between gap-4 text-sm">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              Made with ❤️ for AI enthusiasts
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
