function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              AI Powered Student Success Platform
            </span>

            <h1 className="text-6xl font-extrabold leading-tight mt-6 text-slate-900">
              Empowering Every Student
              <span className="text-blue-600"> Through AI</span>
            </h1>

            <p className="text-slate-600 text-lg mt-8 leading-8">
              Discover careers, scholarships, digital literacy,
              cyber safety resources and personalized learning
              roadmaps—all in one platform.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition font-semibold shadow-lg">
                Explore Careers
              </button>

              <button className="border border-slate-300 px-8 py-4 rounded-xl hover:bg-white transition font-semibold">
                Find Scholarships
              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-[500px] h-[450px] rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 shadow-2xl flex items-center justify-center">

              <div className="text-center text-white">

                <div className="text-8xl">
                    🎓
                </div>

                <h2 className="text-4xl font-bold mt-6">
                  Schofers
                </h2>

                <p className="mt-3 text-lg opacity-90">
                  Learn • Grow • Achieve
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;