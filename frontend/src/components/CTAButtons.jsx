export default function CTAButtons({ openModal }) {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
      >
        Check Course-wise Fees
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700">
        Download Brochure
      </button>
      <button
        onClick={() =>
          document
            .getElementById("leadForm")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600"
      >
        Apply Now
      </button>
    </div>
  );
}
