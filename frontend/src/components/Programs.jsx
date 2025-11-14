import {
  BookOpen,
  Cpu,
  FlaskConical,
  Briefcase,
  HeartPulse,
  Scale,
} from "lucide-react";

const cards = [
  {
    icon: BookOpen,
    title: "Arts & Humanities",
    desc: "Explore literature, philosophy, history, and creative arts.",
  },
  {
    icon: Cpu,
    title: "Engineering & Technology",
    desc: "Lead innovation in computer science and engineering.",
  },
  {
    icon: FlaskConical,
    title: "Sciences",
    desc: "Advance knowledge in biology, chemistry, physics.",
  },
  {
    icon: Briefcase,
    title: "Business & Economics",
    desc: "Build leadership skills and business acumen.",
  },
  {
    icon: HeartPulse,
    title: "Health & Medicine",
    desc: "Train for careers in medicine and public health.",
  },
  {
    icon: Scale,
    title: "Law & Public Policy",
    desc: "Shape policy and advocate for justice.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Academic Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover world-class programs across diverse fields of study
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-300 transition"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{c.desc}</p>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-gray-700 inline-flex items-center"
                >
                  Learn more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
