// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function FeesModal({ isOpen, closeModal, fees }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="bg-white w-11/12 max-w-md p-6 rounded shadow relative"
      >
        <button onClick={closeModal} className="absolute right-3 top-3 text-xl">
          ×
        </button>
        <h2 className="text-lg font-bold mb-4">Course-wise Fees</h2>
        {fees ? (
          <div>
            {fees.data.courses.map((course, idx) => (
              <p key={idx} className="mb-2">
                <strong>{course.name}</strong>: ₹{course.fees.min} – ₹
                {course.fees.max}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </motion.div>
    </div>
  );
}
