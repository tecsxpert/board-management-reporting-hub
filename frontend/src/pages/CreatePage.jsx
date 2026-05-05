import { useState } from "react";
import { createReport } from "../services/api";

export default function CreatePage() {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    try {
      await createReport({ title });
      alert("Created successfully");
      setTitle("");
    } catch {
      console.log("Waiting for backend...");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow p-6 rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Report</h2>

        <input
          className="border p-2 w-full mb-4 rounded"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}