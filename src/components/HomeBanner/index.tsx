import { Banner } from "../Fragments/Banner"

export const HomeBanner = () => {
    return (
        <section className="flex flex-col md:flex-row mt-7 md:mt-14 gap-6 md:gap-12 items-center">
            <Banner />
            <div className="h-fit md:h-[514px] flex flex-col justify-between w-4/5 md:w-fit">
                <div className="text-title1-m md:text-title1 text-center">
                    <h1>Kenzie</h1>
                    <h1>Fashion</h1>
                    <h1>Store</h1>
                </div>
                <button className="bg-black text-white text-breadcrumbs h-[60px] hover:opacity-50">
                CHECK OUT SALES
                </button>
            </div>
        </section>
    )
}
