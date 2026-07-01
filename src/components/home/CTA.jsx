function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold">
          Start Your Learning Journey Today
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Discover careers, scholarships, digital skills, and cyber safety—all
          in one place.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Explore Careers
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition">
            Find Scholarships
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;