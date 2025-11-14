export default function NewsGrid() {
  const articles = [
    {
      tag: "Research",
      title: "Breakthrough in Renewable Energy Research",
      desc: "Faculty team develops new solar technology with 40% efficiency improvement.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop",
    },
    {
      tag: "Campus",
      title: "New Innovation Center Opens This Fall",
      desc: "State-of-the-art facility to foster entrepreneurship.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    },
    {
      tag: "Awards",
      title: "MU Professor Receives National Award",
      desc: "Dr. Sarah Chen honored for groundbreaking AI research.",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold">Latest News</h2>
          <a
            href="#"
            className="hidden sm:flex items-center text-sm text-gray-900"
          >
            View all
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article
              key={i}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition"
            >
              <div className="relative h-48">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-600 mb-2">{a.tag}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{a.desc}</p>
                <a
                  href="#"
                  className="text-sm text-gray-900 inline-flex items-center"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
