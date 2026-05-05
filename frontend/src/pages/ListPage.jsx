import { useEffect, useState } from "react";
import { getReports } from "../services/api";

export default function ListPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    getReports()
      .then(res => setData(res.data))
      .catch(() => {});
  }, []);

  const filteredData = data.filter(item =>
    item.title?.toLowerCase().includes(search.toLowerCase()) &&
    (status === "" || item.status === status)
  );

  const start = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(start, start + itemsPerPage);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Reports</h2>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          className="border p-2 rounded w-full"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Data */}
      {paginatedData.length === 0 ? (
        <p className="text-center text-gray-500">No data available</p>
      ) : (
        paginatedData.map(item => (
          <div
            key={item.id}
            className="bg-white shadow p-4 mb-3 rounded hover:shadow-md transition"
          >
            <b className="text-lg">{item.title}</b>
          </div>
        ))
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={start + itemsPerPage >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}