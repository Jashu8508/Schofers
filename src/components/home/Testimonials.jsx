import {
  FaStar,
} from "react-icons/fa";

function Testimonials() {

  const testimonials = [

    {
      name: "Rahul",
      role: "B.Tech Student",
      review:
        "Schofers helped me discover career paths I never knew existed. The scholarship section is amazing.",
    },

    {
      name: "Priya",
      role: "Intermediate Student",
      review:
        "The Digital Literacy lessons improved my computer skills. Everything is easy to understand.",
    },

    {
      name: "Sai Kumar",
      role: "School Student",
      review:
        "Cyber Safety lessons taught me how to identify fake messages and online scams.",
    },

  ];

  return (

    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            What Students Say
          </h2>

          <p className="text-slate-600 mt-4">
            Thousands of students can improve their future with Schofers.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >

              <div className="flex gap-1 text-yellow-400">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-slate-600 mt-6 leading-7">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-slate-500">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Testimonials;