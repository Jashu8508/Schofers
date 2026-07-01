import { CalendarDays } from "lucide-react";

const scholarships = [
  {
    name: "National Scholarship Portal",
    deadline: "15 August 2026",
    amount: "₹75,000",
  },
  {
    name: "AICTE Pragati Scholarship",
    deadline: "10 September 2026",
    amount: "₹50,000",
  },
  {
    name: "Vidya Lakshmi Scholarship",
    deadline: "25 September 2026",
    amount: "₹1,00,000",
  },
];

function LatestScholarships() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Latest Scholarships
        </h2>

        <button className="text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">

        {scholarships.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 hover:bg-slate-50 transition"
          >

            <h3 className="text-lg font-semibold">
              {item.name}
            </h3>

            <div className="flex justify-between mt-4">

              <div className="flex items-center gap-2 text-gray-500">
                <CalendarDays size={18} />
                {item.deadline}
              </div>

              <span className="font-bold text-green-600">
                {item.amount}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default LatestScholarships;