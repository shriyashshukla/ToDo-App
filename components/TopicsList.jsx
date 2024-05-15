import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return await res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] }; 
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics() || { topics: [] }; 

  return (
    <>
      {topics.length > 0 ? (
        topics.map((t) => (
          <div
            key={t._id}
            className="p-6 border border-slate-300 rounded-lg my-4 flex justify-between gap-6 items-start hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <h2 className="font-bold text-2xl mb-2">{t.title}</h2>
              <p className="text-slate-600">{t.description}</p>
            </div>

            <div className="flex gap-3 items-center">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} className="text-blue-500 hover:text-blue-600 transition-colors duration-200" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-slate-500 mt-6">No topics available</p>
      )}
    </>
  );
}
