import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Completed", value: 6 },
  { name: "Pending", value: 4 },
];

export default function Dashboard({ setPage }) {

  const stats = {
    total: 10,
    completed: 6,
    pending: 4,
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h2>

          <p className="text-gray-500 mt-1">
            Welcome to Board Management Reporting Hub
          </p>
        </div>

        

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Total */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">

          <p className="text-gray-500">
            Total Reports
          </p>

          <h2 className="text-4xl font-bold text-indigo-600 mt-2">
            {stats.total}
          </h2>

        </div>

        {/* Completed */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">

          <p className="text-gray-500">
            Completed
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {stats.completed}
          </h2>

        </div>

        {/* Pending */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">

          <p className="text-gray-500">
            Pending
          </p>

          <h2 className="text-4xl font-bold text-yellow-500 mt-2">
            {stats.pending}
          </h2>

        </div>

      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">

        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Report Status Overview
        </h3>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={data}>

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[8, 8, 0, 0]}
              barSize={70}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}