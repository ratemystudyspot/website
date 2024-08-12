import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import RatingInfo from "./RatingInfo";
import TagIcons from "./TagIcons";

export default function SpotPreview({
  id,
  title,
  location,
  imageLink,
  totalReviews,
  averageRating,
  tags,
}: {
  id: string;
  title: string;
  location: string;
  imageLink: StaticImageData;
  totalReviews: number;
  averageRating: number;
  tags: string[];
}) {
  return (
    <Link href={`/studyspot/${id}`}>
      <div className="m-[0.8rem] flex h-[20.5rem] w-[19rem] cursor-pointer flex-col items-center rounded-[1.25rem] bg-white p-3">
        <div className="h-[65%] w-full overflow-hidden rounded-[1.0625rem]">
          <Image
            className="size-full object-cover"
            src={imageLink}
            alt={title}
            width={250}
            placeholder="blur"
          />
        </div>
        <div className="mt-2 w-full">
          <div className="ml-1 text-[1.25rem] font-semibold text-gray-900">
            {title}
          </div>
          <div className="ml-1 text-[1.25rem] font-semibold text-gray-900">
            {location}
          </div>
          <RatingInfo
            averageRating={averageRating}
            totalReviews={totalReviews}
          />
          <TagIcons tags={tags} />
        </div>
      </div>
    </Link>
  );
}
