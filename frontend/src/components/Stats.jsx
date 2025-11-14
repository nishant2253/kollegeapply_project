export default function Stats() {
  const items = [
    { value: "15,000+", label: "Students Enrolled" },
    { value: "200+", label: "Degree Programs" },
    { value: "95%", label: "Employment Rate" },
    { value: "$45M", label: "Research Funding" },
  ];

  return (
    <section className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                {it.value}
              </div>
              <div className="text-sm text-gray-600">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
