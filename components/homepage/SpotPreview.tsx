import Image from 'next/image'

export default function SpotPreview ({
    title,
    location,
    imageLink,
    averageRating
} : {
    title: string,
    location: string,
    imageLink: string,
    averageRating: number
}) {
    return (
        <div>
            <Image 
            src={imageLink}
            alt={title}
            />
            <div>{title}</div>
            <div>{averageRating}</div>
        </div>
    )
}