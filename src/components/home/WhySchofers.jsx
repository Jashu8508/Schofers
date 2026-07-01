function WhySchofers() {
  const features = [
    {
      icon: "🎯",
      title: "Career Guidance",
      description:
        "Explore career paths, required skills, higher education options, and personalized roadmaps.",
    },
    {
      icon: "💰",
      title: "Scholarships",
      description:
        "Search scholarships, eligibility criteria, deadlines, and application guidance in one place.",
    },
    {
      icon: "💻",
      title: "Digital Literacy",
      description:
        "Develop essential digital skills, productivity tools, communication, and responsible technology usage.",
    },
    {
      icon: "🛡️",
      title: "Cyber Safety",
      description:
        "Learn how to stay safe online through interactive lessons on privacy, scams, passwords, and cybersecurity.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose <span className="text-blue-600">Schofers?</span>
          </h2>

          <p className="text-slate-600 mt-5 max-w-3xl mx-auto text-lg">
            One platform designed to empower school and college students with
            career guidance, scholarships, digital literacy, cyber safety,
            and continuous learning opportunities.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhySchofers;