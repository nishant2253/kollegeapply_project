export default function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Applications are now open for Fall 2025.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#leadForm"
            className="px-6 py-3 bg-gray-900 text-white rounded-md"
          >
            Start Your Application
          </a>
          <button className="px-6 py-3 border border-gray-300 text-gray-900 rounded-md">
            Request Information
          </button>
        </div>
      </div>
    </section>
  );
}
