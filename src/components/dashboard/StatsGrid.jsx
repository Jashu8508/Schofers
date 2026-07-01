import DashboardCard from "./DashboardCard";

import {
  GraduationCap,
  Award,
  BookOpen,
  TrendingUp,
} from "lucide-react";

function StatsGrid() {
  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      <DashboardCard
        title="Career Paths"
        value="150+"
        icon={<GraduationCap size={28} />}
        color="bg-blue-600"
      />

      <DashboardCard
        title="Scholarships"
        value="80+"
        icon={<Award size={28} />}
        color="bg-green-600"
      />

      <DashboardCard
        title="Courses"
        value="45"
        icon={<BookOpen size={28} />}
        color="bg-orange-500"
      />

      <DashboardCard
        title="Progress"
        value="65%"
        icon={<TrendingUp size={28} />}
        color="bg-purple-600"
      />

    </div>
  );
}

export default StatsGrid;