
export default function Feedback() {
    return (
        <div className="flex gap-5 md:gap-15 py-10 bg-yellow-100 items-center px-5 md:px-48 pb-20 flex-col lg:flex-row">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src="/person.webp " className="mt-10" alt="" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="text-xl md:text-2xl font-bold leading-snug">"I had tried Coda, Notion, and a bunch of other similar tools, but the problem always was that it felt like a system built by others. With Fibery, it feels like the opposite. I build the system, and it just provides an interface to work with my data."</p>
                <div className="mt-2">
                    <p className="text-lg">Co-founder at QuadSpinner</p>
                    <p className="text-lg font-semibold">Dax</p>
                </div>
            </div>
        </div>
    )
}