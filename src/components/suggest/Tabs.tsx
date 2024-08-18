import { FaBookmark, FaPencilAlt, FaShareSquare } from "react-icons/fa";

export default function Tabs() {
  return (
    <div className="flex flex-row justify-center gap-4">
      <button className="flex size-8 items-center justify-center rounded-full bg-gray-300">
        <FaPencilAlt />
      </button>

      <button className="flex size-8 items-center justify-center rounded-full bg-gray-300">
        <FaShareSquare />
      </button>

      <button className="flex size-8 items-center justify-center rounded-full bg-gray-300">
        <FaBookmark />
      </button>
    </div>
  );
}
