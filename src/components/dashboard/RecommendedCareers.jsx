import { ArrowRight } from "lucide-react";

const careers = [
  {
    title: "AI / Machine Learning Engineer",
    description: "Build intelligent systems and AI-powered applications.",
  },
  {
    title: "Full Stack Developer",
    description: "Develop complete web and mobile applications.",
  },
  {
    title: "Cyber Security Analyst",
    description: "Protect organizations from cyber attacks and threats.",
  },
];

function RecommendedCareers() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recommended Careers
        </h2>

        <button className="text-blue-600 flex items-center gap-2 hover:underline">
          View All
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="space-y-4">

        {careers.map((career, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:bg-slate-50 transition"
          >
            <h3 className="font-semibold text-lg">
              {career.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {career.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default RecommendedCareers;