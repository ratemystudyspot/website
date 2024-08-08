import Image, { StaticImageData } from 'next/image'
import RatingInfo from './RatingInfo'

export default function SpotPreview ({
    title,
    location,
    imageLink,
    totalReviews,
    averageRating
} : {
    title: string,
    location: string,
    imageLink: StaticImageData,
    totalReviews: number,
    averageRating: number
}) {
    return (
        <div className='flex items-center flex-col p-3 w-[307px] h-[327px] m-[10px] bg-white rounded-[20px] cursor-pointer'>
            <div className='overflow-hidden rounded-[17px] h-[65%] w-full'>
                <Image
                    className='object-cover h-full w-full'
                    src={imageLink}
                    alt={title}
                    width={250}
                    placeholder="blur"
                />
            </div>
            <div className='w-full mt-2'>
                <div className='text-[20.32px] ml-1 text-gray-900 font-semibold'>{title}</div>
                <RatingInfo averageRating={averageRating} totalReviews={totalReviews} />
            </div>
        </div>
    )
}