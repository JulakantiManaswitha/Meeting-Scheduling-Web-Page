

export default function Section1() {
    return (
        <div className="flex gap-10 md:gap-20 items-center bg-blue-100 px-5 md:px-20 lg:px-48 pb-20 mt-10 flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="text-3xl md:text-4xl font-bold leading-snug">Bring work and knowledge under the same roof</p>
                <p className="text-lg">Fibery is a comprehensive work management platform that enables teams to seamlessly integrate their work processes with their knowledge management practices. By combining task management, project tracking, and collaboration tools with powerful knowledge management capabilities, Fibery creates a unified environment where teams can work on tasks and projects while accessing and sharing relevant knowledge and information.</p>
            </div>
            <div className="w-full md:w-1/2">
                <img src="/asset1.webp" className="mt-10" alt="" />
            </div>
        </div>


    )
}

