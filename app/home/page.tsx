import Preview from "@/components/homepage/SpotPreview";
import sSample from "@/sample-data/SpotsSample";

export default function Home() {
  return (
    // List of study spots
    <div className="flex flex-row overflow-x-hidden">
      {sSample.map((spot) => (
        <Preview
          key={spot.id}
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
// location, imageLink averageRating
