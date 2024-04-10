export default function BottomSection() {
    return (
        <div className="bg-green-400 rounded-2xl text-center text-white flex gap-10 flex-col justify-center items-center py-16">
            <p className="text-3xl md:text-4xl font-bold">How you can make it happen</p>
            <div className="flex gap-5 items-center justify-center">
                <div className="text-2xl font-bold text-black w-1/4 p-4">
                    <button className="border-2 p-2 text-black border-green-400 hover:border-green-600 focus:border-green-600">Signup for Free</button>
                    <p className="text-lg font-normal py-5">
                    Start using AI space creation and / or templates to test the waters.
                    </p>
                </div>
                <div className="text-2xl font-bold text-black w-1/4 p-4">Build your workspace
                    <p className="text-lg font-normal py-5">
                    Start integrating any data from existing tools and map your company's processes.
                    </p>
                </div>
                <div className="text-2xl font-bold text-black w-1/4 p-4">Share it with your team
                    <p className="text-lg font-normal py-5">
                    Don't keep Fibery to yourself. Be the hero your company needs and not the one they deserve!
                    </p>
                </div>
                <div className="text-2xl font-bold text-black w-1/4 p-4">Enjoy the moment that you dared to be different
                    <p className="text-lg font-normal py-5">
                    Humans are pack animals - conformity is in our DNA. But you dared to be different by not choosing an Atlassian product. Well done!
                    </p>
                </div>
            </div>
        </div>
    )
}