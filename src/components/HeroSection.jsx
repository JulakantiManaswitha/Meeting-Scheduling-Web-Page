

export default function HeroSection() {
    return (
        <div className="text-center flex flex-col gap-10 py-24 items-center justify-center px-2">
            <p className="font-extrabold text-3xl md:text-5xl lg:text-4xl">Empower Your Team's Productivity with Seamless Meeting Scheduling</p>
            <p className="md:text-lg text-stone-500 font-normal">Streamline your team's workflow and eliminate the hassle of back-and-forth emails with Fibery's intuitive meeting scheduling solution. Say goodbye to scheduling conflicts and hello to effortless collaboration.
                <br />
            </p>
            <p className="font-extrabold text-2xl md:text-3xl lg:text-2xl">With Fibery,you can:</p>
            <ul className="list-disc ml-4">
                <li className="mb-2 text-left">
                Easily find the perfect meeting time that works for everyone, eliminating the need for lengthy email chains.
                </li>
                <li className="mb-2 text-left" >
                Seamlessly integrate with your existing calendar to ensure all meetings are scheduled without conflicts.
                </li>
                <li className="mb-2 text-left" >
                Tailor your availability preferences to fit your unique schedule and preferences, ensuring meetings are scheduled at the most convenient times.
                </li>
                <li className="mb-2 text-left" >
                Foster a culture of collaboration and productivity by simplifying the meeting scheduling process for your entire team.
                </li>
                
            </ul>
        </div>
    )
}