"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
      <label className="flex flex-col">
        <span className="font-semibold mb-1">Topic Title</span>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border border-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter topic title"
        />
      </label>

      <label className="flex flex-col">
        <span className="font-semibold mb-1">Topic Description</span>
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="border border-slate-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
          placeholder="Enter topic description"
        />
      </label>

      <button className="bg-green-600 hover:bg-green-700 font-bold text-white py-2 px-4 rounded-md w-fit self-center transition duration-200">
        Update Topic
      </button>
    </form>
  );
}
