import { CiShare1 } from "react-icons/ci";

import Amenities from "@/src/components/suggest/Amenties";
import Map from "@/src/components/suggest/Map";
import Reviews from "@/src/components/suggest/Reviews";
import StudyspotImages from "@/src/components/suggest/StudyspotImages";
import Tabs from "@/src/components/suggest/Tabs";

export default function SuggestSpot() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden px-36 pt-24">
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">Name</h1>
        <Tabs />
      </div>
      <StudyspotImages />
      <div className="flex w-full flex-row justify-between gap-4 pt-8">
        <div className="flex w-7/12 flex-col gap-2">
          <div className="rounded-xl bg-red-500">
            <Map /> {/* probably use mapbox for this     */}
          </div>
          <div>
            <Amenities />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="size-4 rounded-full bg-green-500">
              {/*Will have to change to accomodate for opened or close colorwise */}{" "}
            </div>
            <p>
              <span>{/*have to change to red or green */}Open Now</span> -
              Closes 11pm Tues
            </p>
            <CiShare1 className="size-4" />
          </div>
          <p>yapyapyap</p>
        </div>
        <div className="w-5/12 rounded-xl bg-blue-500">
          <Reviews />
        </div>
      </div>
    </main>
  );
}
