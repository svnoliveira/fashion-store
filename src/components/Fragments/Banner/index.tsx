import Image from "next/image"

export const Banner = () => {
    return (
        <div>
            <Image 
            src="/main-banner.png"
            width={945}
            height={691}
            alt="Banner image, women wearing stylish outfits"
            priority={true}
            />
        </div>
    )
}