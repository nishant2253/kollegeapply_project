// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/vjti-logo.png";

export default function HeaderVJTI({ openModal }) {
  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 right-0 bg-[#800000]/90 backdrop-blur-sm shadow border-b border-[#600000] z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT — LOGO + TITLE */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="VJTI Logo" className="w-10 h-10" />
            <div className="flex flex-col leading-tight text-[#F5C518]">
              <span className="font-semibold text-base">VJTI Mumbai</span>
              <span className="text-xs text-[#ffd972] -mt-1">
                Veermata Jijabai Technological Institute
              </span>
            </div>
          </div>

          {/* RIGHT — BUTTONS */}
          <div className="flex items-center space-x-3">
            <button
              onClick={openModal}
              className="px-4 py-2 bg-[#F5C518] text-black text-xs rounded-full font-medium hover:bg-[#ffdd4a] transition"
            >
              Fees
            </button>

            <button className="px-4 py-2 bg-white text-black text-xs rounded-full font-medium border border-[#F5C518] hover:bg-[#fdf3cc] transition">
              Brochure
            </button>

            <a
              href="#leadForm"
              className="px-4 py-2 bg-black text-white text-xs rounded-full font-medium hover:bg-[#222] transition"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
