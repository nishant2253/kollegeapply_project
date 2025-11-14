import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Choose Your University
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
          <Link
            to="/vjti"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition"
          >
            VJTI Mumbai
          </Link>

          <Link
            to="/mait"
            className="px-8 py-4 bg-gray-900 text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            MAIT Delhi
          </Link>
        </div>
      </div>
    </div>
  );
}
