import { BiVolumeMute } from "react-icons/bi";
// quiet
import { LuCable } from "react-icons/lu";
// outlets
import { LuBookLock } from "react-icons/lu";
// study-rooms
import { MdMicrowave } from "react-icons/md";
// microwaves
import { MdOutlineFastfood } from "react-icons/md";
// food-near
import { MdOutlineDoorFront } from "react-icons/md";
// open-now
import { PiToiletBold } from "react-icons/pi";

// washrooms

export default function TagIcons({ tags }: { tags: string[] }) {
  const icons: JSX.Element[] = []; // Define the type of icons array

  tags.map((tag) => {
    if (tag === "quiet") {
      icons.push(
        <BiVolumeMute className="mr-2 size-5 text-gray-500" key={tag} />,
      );
    } else if (tag === "outlets") {
      icons.push(<LuCable className="mr-2 size-5 text-gray-500" key={tag} />);
    } else if (tag === "study-rooms") {
      icons.push(
        <LuBookLock className="mr-2 size-5 text-gray-500" key={tag} />,
      );
    } else if (tag === "microwaves") {
      icons.push(
        <MdMicrowave className="mr-2 size-5 text-gray-500" key={tag} />,
      );
    } else if (tag === "food-near") {
      icons.push(
        <MdOutlineFastfood className="mr-2 size-5 text-gray-500" key={tag} />,
      );
    } else if (tag === "open-now") {
      icons.push(
        <MdOutlineDoorFront className="mr-2 size-5 text-gray-500" key={tag} />,
      );
    } else if (tag === "washrooms") {
      icons.push(
        <PiToiletBold className="mr-2 size-5 text-gray-500" key={tag} />,
      );
    }
  });

  return <div className="ml-1 mt-3 flex flex-row">{icons}</div>;
}
