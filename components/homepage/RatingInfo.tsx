export default function RatingInfo({
  averageRating,
  totalReviews,
}: {
  averageRating: number;
  totalReviews: number;
}) {
  const maxStars = 5;
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <svg
        key={`full-${i}`}
        className="me-1 size-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>,
    );
  }

  if (halfStar) {
    stars.push(
      <svg
        key="half"
        className="me-1 size-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M11 17.033l-4.518 2.375a1.532 1.532 0 0 1-2.226-1.616l.863-5.031-3.656-3.563a1.535 1.535 0 0 1 .902-2.624l5.051-.734 2.259-4.577a1.534 1.534 0 0 1 2.752 0l2.259 4.577 5.051.734a1.535 1.535 0 0 1 .902 2.624l-3.656 3.563.863 5.031a1.532 1.532 0 0 1-2.226 1.616L11 17.033Z" />
        <path
          d="M11 0l2.259 4.577 5.051.734a1.535 1.535 0 0 1 .902 2.624l-3.656 3.563.863 5.031a1.532 1.532 0 0 1-2.226 1.616L11 17.033Z"
          fill="gray"
        />
      </svg>,
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <svg
        key={`empty-${i}`}
        className="me-1 size-4 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>,
    );
  }

  return (
    <div className="flex items-center">
      <p className="mr-1 ms-1 mt-[2px] text-sm font-medium text-gray-500 dark:text-gray-400">
        {averageRating}
      </p>
      {stars}
      <p className="ms-1 mt-[2px] text-sm font-medium text-gray-500 dark:text-gray-400">
        ({totalReviews})
      </p>
    </div>
  );
}
