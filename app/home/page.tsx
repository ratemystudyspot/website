import SpotsSample from "@/sample-data/SpotsSample"
import SpotPreview from "@/components/homepage/SpotPreview"

export default function Home() {
    return (
        // List of study spots
        <div className="flex flex-row overflow-x-hidden">
            {SpotsSample.map((spot) => 
                (<SpotPreview  title={spot.name} location={spot.locationLink} imageLink={spot.imageLinks[0]} averageRating={spot.averageRating} totalReviews={spot.ratingIds.length} tags={spot.tags}/>))}
        </div>
    )
}
// location, imageLink averageRating