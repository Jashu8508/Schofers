import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-slate-900">
            Empowering Every Student
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Schofers is an AI-powered student success platform helping NGOs,
            schools, and colleges provide career guidance, scholarships,
            digital literacy, and cyber safety education.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
              Explore Careers
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;