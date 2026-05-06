import { useEffect, useState } from "react";

export default function ListPage() {

  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

  const storedReports =
    JSON.parse(localStorage.getItem("reports"));

  if (storedReports && storedReports.length > 0) {

    setReports(storedReports);

  } else {

    const defaultReports = [
      {
        id: 1,
        title: "Annual Financial Report",
        status: "Completed",
        date: "2026-04-20"
      },
      {
        id: 2,
        title: "Audit Summary",
        status: "Pending",
        date: "2026-04-22"
      },
      {
        id: 3,
        title: "Sales Performance",
        status: "Completed",
        date: "2026-04-23"
      }
    ];

    setReports(defaultReports);

    localStorage.setItem(
      "reports",
      JSON.stringify(defaultReports)
    );
  }

}, []);

  const filteredReports = reports.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📋 Reports
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search reports..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg mb-4 w-full focus:ring-2 focus:ring-indigo-300"
      />

      {/* Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredReports.length > 0 ? (
              filteredReports.map((r) => (
                <tr
                  key={r.id}
                  className="border-t hover:bg-gray-50 transition"
                >

                  <td className="p-4 font-medium text-gray-700">
                    {r.title}
                  </td>

                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        r.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>

                  <td className="text-gray-500 text-sm">
                    {r.date}
                  </td>

                  {/* Actions */}
                  <td className="flex gap-2 text-sm p-4">

                    <button
  onClick={() => {

    const updatedTitle = prompt(
      "Edit report title",
      r.title
    );

    if (!updatedTitle) return;

    const updatedReports = reports.map((item) =>
      item.id === r.id
        ? { ...item, title: updatedTitle }
        : item
    );

    setReports(updatedReports);

    localStorage.setItem(
      "reports",
      JSON.stringify(updatedReports)
    );
  }}
  className="text-blue-500 hover:underline"
>
  ✏️ Edit
</button>

                    <button
  onClick={() => {
    setReports(
      reports.filter((item) => item.id !== r.id)
    );
  }}
  className="text-red-500 hover:underline"
>
  🗑 Delete
</button>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-6 text-gray-500"
                >
                  No reports found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}