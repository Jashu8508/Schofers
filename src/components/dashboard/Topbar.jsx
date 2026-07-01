import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

function Topbar() {
  return (
    <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">

      {/* Search Box */}

      <div className="relative w-96">

        <Search
          size={18}
          className="absolute left-4 top-3.5 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search careers, scholarships..."
          className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell size={24} />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle
            size={40}
            className="text-blue-600"
          />

          <div>

            <h3 className="font-semibold">
              Jaswanth
            </h3>

            <p className="text-sm text-gray-500">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;