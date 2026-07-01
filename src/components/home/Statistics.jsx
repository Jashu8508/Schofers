import {
  FaUserGraduate,
  FaAward,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "1000+",
      title: "Students Benefited",
    },
    {
      icon: <FaAward />,
      number: "500+",
      title: "Scholarships",
    },
    {
      icon: <FaLaptopCode />,
      number: "100+",
      title: "Career Roadmaps",
    },
    {
      icon: <FaBookOpen />,
      number: "50+",
      title: "Learning Resources",
    },
  ];

  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Platform Impact
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Schofers empowers students with career guidance,
            scholarships, digital literacy, and cyber safety
            through one intelligent platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center"
            >

              <div className="text-5xl text-blue-600 flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold mt-6">
                {item.number}
              </h2>

              <p className="text-slate-600 mt-3">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;