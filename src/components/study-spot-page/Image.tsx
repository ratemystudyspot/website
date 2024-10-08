import { StaticImageData } from "next/image";

interface ImageGalleryProps {
  mainImage: StaticImageData;
  sideImages: StaticImageData[];
}

// Define the component as a function with typed props
const ImageGallery = ({ mainImage, sideImages }: ImageGalleryProps) => {
  return (
    <div className="ceb space-y-4 rounded-lg bg-white p-4 shadow-lg">
      {" "}
      {/* Changed the outer div to `space-y-4` for vertical spacing */}
      {/* Title and Top-right Icons */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h2 className="text-2xl font-bold">Gallery</h2>

        {/* Top-right icons */}
        <div className="flex space-x-2">
          <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Main image */}
      <div className="grid grid-cols-3 gap-x-1">
        {/* Main Image */}
        <div className="col-span-2 rounded-lg">
          <img
            src={mainImage.src}
            alt="Main Gallery Image"
            className="w-3/4 rounded-lg object-cover"
          />
        </div>

        {/* Side Images */}
        <div className="grid grid-rows-2 gap-y-1">
          {sideImages.map((image, index) => (
            <div key={index} className="">
              <img
                src={image.src}
                alt={`Side Image ${index + 1}`}
                className="w-3/8 h-1/2 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
