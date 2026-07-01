import {
  LayoutDashboard,
  GraduationCap,
  Award,
  Shield,
  BookOpen,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-3xl font-bold text-blue-400">
          Schofers
        </h1>

      </div>

      <nav className="p-4 space-y-3">

        <MenuItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
        <MenuItem icon={<GraduationCap size={20} />} text="Career Guidance" />
        <MenuItem icon={<Award size={20} />} text="Scholarships" />
        <MenuItem icon={<BookOpen size={20} />} text="Digital Literacy" />
        <MenuItem icon={<Shield size={20} />} text="Cyber Safety" />
        <MenuItem icon={<User size={20} />} text="Profile" />
        <MenuItem icon={<Settings size={20} />} text="Settings" />
        <MenuItem icon={<LogOut size={20} />} text="Logout" />

      </nav>

    </aside>
  );
}

function MenuItem({ icon, text }) {
  return (
    <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition">
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default Sidebar;