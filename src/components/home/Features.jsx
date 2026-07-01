import {
  FaGraduationCap,
  FaSearch,
  FaShieldAlt,
  FaLaptop,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Career Guidance",
      description:
        "Explore career paths, required skills, colleges, certifications, and future opportunities.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FaSearch />,
      title: "Scholarship Finder",
      description:
        "Find scholarships with eligibility, deadlines, application links, and filters.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Literacy",
      description:
        "Learn essential digital skills, AI tools, productivity software, and online learning.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Safety",
      description:
        "Protect yourself from cyber threats, scams, phishing, hacking, and online fraud.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <FaChartLine />,
      title: "Progress Tracking",
      description:
        "Track your learning journey, completed modules, and achievements.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FaRobot />,
      title: "AI Assistant",
      description:
        "Receive personalized career suggestions and learning recommendations.",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Everything You Need In One Platform
          </h2>

          <p className="text-slate-600 mt-5 max-w-3xl mx-auto">
            Schofers combines career guidance, scholarship discovery,
            digital literacy, cyber safety, AI recommendations,
            and student progress tracking into one platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;