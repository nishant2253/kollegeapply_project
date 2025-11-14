import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">
              Academics
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Schools & Colleges</a>
              </li>
              <li>
                <a href="#">Libraries</a>
              </li>
              <li>
                <a href="#">Academic Calendar</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">
              Admissions
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">Undergraduate</a>
              </li>
              <li>
                <a href="#">Graduate</a>
              </li>
              <li>
                <a href="#">International</a>
              </li>
              <li>
                <a href="#">Financial Aid</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Research</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">Research Centers</a>
              </li>
              <li>
                <a href="#">Faculty Research</a>
              </li>
              <li>
                <a href="#">Publications</a>
              </li>
              <li>
                <a href="#">Innovation</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">About</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Campus Map</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-sm text-gray-600 mb-4 sm:mb-0">
            © 2025 Mait delhi. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
            <a href="#">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
