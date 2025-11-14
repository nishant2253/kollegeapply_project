// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";

export default function Header({ openModal }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 glass border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT SIDE — LOGO + TEXT */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="University Logo"
              className="w-10 h-10 object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-900 text-base">
                MAIT DELHI
              </span>
              <span className="text-xs text-gray-600 -mt-1">Delhi</span>
            </div>
          </div>

          {/* CENTER NAVIGATION */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#academics"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Academics
            </a>
            <a
              href="#admissions"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Admissions
            </a>
            <a
              href="#research"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Research
            </a>
            <a
              href="#campus"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Campus Life
            </a>
            <a
              href="#about"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              About
            </a>
          </div>

          {/* RIGHT SIDE – CTA BUTTONS */}
          <div className="flex items-center space-x-3">
            {/* CHECK FEES */}
            <button
              onClick={openModal}
              className="px-3 py-2 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
            >
              Check Fees
            </button>

            {/* BROCHURE */}
            <button className="px-3 py-2 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition">
              Brochure
            </button>

            {/* APPLY NOW */}
            <a
              href="#leadForm"
              className="px-3 py-2 bg-orange-500 text-white text-xs rounded-md hover:bg-orange-600 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
