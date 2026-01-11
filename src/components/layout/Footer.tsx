import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">VistaLabs</span>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Empowering the next generation of digital startups with robust infrastructure and
              design.
            </p>
          </div>

          {/* Column 2: SERVICES (Replaces 'Product') */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Generative AI & RAG
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect
            </h3>
            <div className="flex space-x-6 mt-4">
              {/* GitHub */}
              <a
                href="https://github.com/saqibalijavaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <Github className="h-6 w-6" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/saqibalijavaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <Twitter className="h-6 w-6" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/saqib-ali-javaid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              {/* Email - Updated to Copy to Clipboard */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText('saqibalijavaid2@gmail.com');
                  alert('Email copied to clipboard!');
                }}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors cursor-pointer"
                aria-label="Copy Email Address"
                title="Click to copy email"
              >
                <Mail className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} VistaLabs, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
