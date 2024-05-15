import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4 shadow-lg">
      <Link className="text-2xl text-white font-bold hover:text-gray-300 transition duration-300" href={"/"}>
        ToDo List
      </Link>
      <Link className="bg-white text-slate-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-slate-700 hover:text-white transition duration-300" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
