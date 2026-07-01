function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🎓</span>
          <h1 className="text-2xl font-bold text-blue-600">
            Schofers
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">Home</a>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Career</a>
          <a href="#" className="hover:text-blue-600 transition">Scholarships</a>
          <a href="#" className="hover:text-blue-600 transition">Digital Literacy</a>
          <a href="#" className="hover:text-blue-600 transition">Cyber Safety</a>
        </nav>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Navbar;