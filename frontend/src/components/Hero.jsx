// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero({ onExplore }) {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
              Shaping Tomorrow's Leaders
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Join a community of scholars, innovators, and changemakers at Mait
              Delhi. Where excellence meets opportunity.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onExplore}
                className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
              >
                Explore Programs
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-900 rounded-md hover:bg-gray-50 transition">
                Schedule a Visit
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&h=800&fit=crop"
              alt="Campus"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
