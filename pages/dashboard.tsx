import DashboardLayout from "@/layouts/dashboard";
import MetricGrid from "@/components/dashboard/MetricGrid";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <MetricGrid />
        </div>
        <div className="col-span-12 row-span-2">
          <span>algo aqui</span>
        </div>
      </div>
    </DashboardLayout>
  );
}