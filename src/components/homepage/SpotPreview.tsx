import Image from "next/image";
import type { StaticImageData } from "next/image";

import RatingInfo from "./RatingInfo";
import TagIcons from "./TagIcons";

export default function SpotPreview({
  title,
  location,
  imageLink,
  totalReviews,
  averageRating,
  tags,
}: {
  title: string;
  location: string;
  imageLink: StaticImageData;
  totalReviews: number;
  averageRating: number;
  tags: string[];
}) {
  return (
    <div className="m-[10px] flex h-[327px] w-[307px] cursor-pointer flex-col items-center rounded-[20px] bg-white p-3">
      <div className="h-[65%] w-full overflow-hidden rounded-[17px]">
        <Image
          className="size-full object-cover"
          src={imageLink}
          alt={title}
          width={250}
          placeholder="blur"
        />
      </div>
      <div className="mt-2 w-full">
        <div className="ml-1 text-[20.32px] font-semibold text-gray-900">
          {title}
        </div>
        <div className="ml-1 text-[20.32px] font-semibold text-gray-900">
          {location}
        </div>
        <RatingInfo averageRating={averageRating} totalReviews={totalReviews} />
        <TagIcons tags={tags} />
      </div>
    </div>
  );
}
