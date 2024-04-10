

export default function Section2() {
    return (
        <div className="flex gap-10 md:gap-20 items-center bg-red-100 px-5 md:px-20 lg:px-48 pb-20 flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2">
                <img src="/asset2/custom-fields.webp" alt="" />
                <img src="/asset2/custom-database.jpeg" alt="" />
                <img src="/asset2/custom-relations.jpeg" alt="" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-5">
                <p className="text-3xl md:text-4xl font-bold leading-snug">Flexibility to work your own way</p>
                <p className="text-lg">By providing the ability to create custom databases, fields, and relations, Fibery enables users to tailor the platform to their specific workflows, processes, and use cases. This flexibility allows teams to capture, organize, and manage their data in a way that best suits their needs, ultimately leading to improved collaboration, efficiency, and productivity.</p>
            </div>
        </div>
    )
}