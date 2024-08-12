import Preview from "@/src/components/homepage/SpotPreview";
import sSample from "@/src/sample-data/SpotsSample";

export default function Home() {
  return (
    // List of study spots
    <div className="flex flex-row overflow-x-hidden">
      {sSample.map((spot) => (
        <Preview
          key={spot.id}
          id={spot.id}
          title={spot.name}
          location={spot.locationLink}
          imageLink={spot.imageLinks[0]}
          averageRating={spot.averageRating}
          totalReviews={spot.ratingIds.length}
          tags={spot.tags}
        />
      ))}
    </div>
  );
}
