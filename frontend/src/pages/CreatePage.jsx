import { useState } from "react";

export default function CreatePage() {

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    author: "",
    priority: "Medium",
    status: "Pending",
    description: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {

    if (
      !formData.title ||
      !formData.department ||
      !formData.author
    ) {
      alert("Please fill all required fields");
      return;
    }

    const existing =
      JSON.parse(localStorage.getItem("reports")) || [];

    const newReport = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };

    existing.push(newReport);

    localStorage.setItem(
      "reports",
      JSON.stringify(existing)
    );

    alert("Report created successfully ✅");

    setFormData({
      title: "",
      department: "",
      author: "",
      priority: "Medium",
      status: "Pending",
      description: "",
    });
  };

  return (

    <div className="p-6 flex justify-center bg-gray-50 min-h-screen">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        <h2 className="text-3xl font-bold text-indigo-600 mb-6">
          Create New Report
        </h2>

        {/* Title */}
        <div className="mb-4">

          <label className="block text-sm font-medium mb-2">
            Report Title *
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter report title"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 outline-none"
          />

        </div>

        {/* Department */}
        <div className="mb-4">

          <label className="block text-sm font-medium mb-2">
            Department *
          </label>

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter department"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 outline-none"
          />

        </div>

        {/* Author */}
        <div className="mb-4">

          <label className="block text-sm font-medium mb-2">
            Author *
          </label>

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 outline-none"
          />

        </div>

        {/* Priority + Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          {/* Priority */}
          <div>

            <label className="block text-sm font-medium mb-2">
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

          </div>

          {/* Status */}
          <div>

            <label className="block text-sm font-medium mb-2">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>Pending</option>
              <option>Completed</option>
            </select>

          </div>

        </div>

        {/* Description */}
        <div className="mb-6">

          <label className="block text-sm font-medium mb-2">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter report description"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-300 outline-none"
          ></textarea>

        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Create Report
        </button>

      </div>

    </div>
  );
}