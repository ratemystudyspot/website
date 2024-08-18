export default function StudyspotImages() {
  return (
    <div className="flex h-96 w-full flex-row gap-4 pt-2">
      <div className="relative h-full w-2/3">
        <div className="h-full rounded-l-xl bg-red-200"></div>{" "}
        {/* eventually replace with photos */}
      </div>
      <div className="flex h-full w-1/3 flex-col gap-4">
        <div className="size-full rounded-tr-xl bg-blue-200"></div>
        <div className="size-full rounded-br-xl bg-blue-200"></div>
      </div>
    </div>
  );
}
