import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";
import RecommendedCareers from "../../components/dashboard/RecommendedCareers";
import LatestScholarships from "../../components/dashboard/LatestScholarships";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome Back, Jaswanth 👋
        </h1>

        <p className="text-gray-600 mt-2">
          Here's an overview of your learning journey today.
        </p>
      </div>

      {/* Statistics */}
      <StatsGrid />

      {/* Two Column Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <RecommendedCareers />

        <LatestScholarships />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;