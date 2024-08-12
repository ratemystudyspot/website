import Image from "next/image";

// Replace with actual fetch from backend
import sSample from "@/src/sample-data/SpotsSample";

export default function StudySpot({ params }: { params: { id: string } }) {
  const spot = sSample.filter((spot) => spot.id == params.id)[0];
  return (
    <div className="flex w-screen flex-row items-center justify-center">
      <div className="flex h-full w-[40%]">
        <div className="h-[50vh] w-full overflow-hidden rounded-[1.0625rem]">
          <Image
            className="size-full h-full w-full object-cover"
            src={spot.imageLinks[0]}
            alt={spot.name}
            width={400}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex h-full w-[40%]"></div>
    </div>
  );
}

// title,
// location,
// imageLink,
// totalReviews,
// averageRating,
// tags,
