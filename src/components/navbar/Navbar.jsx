import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Schofers
        </Link>

        <div className="flex gap-8">

          <Link to="/">Home</Link>

          <Link to="/career">Career</Link>

          <Link to="/scholarships">Scholarships</Link>

          <Link to="/about">About</Link>

          <Link to="/login">Login</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;