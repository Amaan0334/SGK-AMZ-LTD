import { CalendarDays, RefreshCw } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-3xl font-bold">
            Amazon Analytics
          </h2>

          <p className="text-gray-500 mt-2">
            Last Updated: 30 June 2026
          </p>
        </div>

        <div className="flex gap-6 mt-5 md:mt-0">

          <div className="flex items-center gap-2">
            <CalendarDays size={20} />
            Jan 2026 – Jun 2026
          </div>

          <div className="flex items-center gap-2 text-green-600">
            <RefreshCw size={20} />
            Updated
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;