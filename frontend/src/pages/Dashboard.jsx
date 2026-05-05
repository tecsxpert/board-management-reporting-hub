import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const data = [
    { name: "Total", value: 10 },
    { name: "Completed", value: 6 },
    { name: "Pending", value: 4 }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow text-center">
          <h4 className="text-gray-500">Total</h4>
          <p className="text-2xl font-bold">10</p>
        </div>

        <div className="bg-green-100 p-6 rounded shadow text-center">
          <h4 className="text-gray-500">Completed</h4>
          <p className="text-2xl font-bold text-green-700">6</p>
        </div>

        <div className="bg-red-100 p-6 rounded shadow text-center">
          <h4 className="text-gray-500">Pending</h4>
          <p className="text-2xl font-bold text-red-700">4</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded shadow flex justify-center overflow-x-auto">
        <BarChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </div>
    </div>
  );
}