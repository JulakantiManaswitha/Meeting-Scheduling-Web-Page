import { BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { RiSearchLine } from 'react-icons/ri';
 
export default function Footer() {
    return (
        <div className="py-20 px-10 bg-white items-center">

            <div className="grid md:grid-cols-3 gap-10 lg:grid-cols-4 justify-between">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Solutions</p>
                    <p className="text-lg">No Code</p>
                    <p className="text-lg">Product Management</p>
                    <p className="text-lg">User research</p>
                    <p className="text-lg">StartUp</p>
                    <p className="text-lg">Software Development</p>
                    <p className="text-lg">Digital Agency</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Product</p>
                    <p className="text-lg">Features</p>
                    <p className="text-lg">Pricing</p>
                    <p className="text-lg">Customer stories</p>
                    <p className="text-lg">Integrations</p>
                    <p className="text-lg">Changelog</p>
                    <p className="text-lg">StartUp program</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Resources</p>
                    <p className="text-lg">Getting Started</p>
                    <p className="text-lg">Expert Help</p>
                    <p className="text-lg">Blog</p>
                    <p className="text-lg">User Guide</p>
                    <p className="text-lg">Community</p>
                    <p className="text-lg">Security & Privacy</p>
                    <p className="text-lg">Cookie settings</p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-xl">Team</p>
                    <p className="text-lg">About Us</p>
                    <p className="text-lg">Open startup</p>
                    <p className="text-lg">Startup dairy</p>
                    <p className="text-lg">Careers</p>
                </div>
            </div>

            <br />
            <br />

            <div class="relative flex justify-center items-center w-full">
                <input type="text" placeholder="Search for a template,space or integration..." class="border-b-2 border-black focus:border-blue-500 py-2 pl-4 pr-10 outline-none w-full text-2xl " />
                <RiSearchLine className="absolute top-0 right-0 mt-3 mr-3 h-6 w-6 text-black-400 " />
            </div>

            <br />

            <div className="flex gap-10 md:gap-28 flex-col md:flex-row justify-end">
                <div className="flex gap-8 items-center text-2xl mt-10">
                    <a href=""><IoMdMail/></a>
                    <a href=""><BsTwitterX /></a>
                    <a href=""><BsYoutube /></a>
                    <a href=""><BsLinkedin /></a>
                </div>
            </div>

            <div className="mt-10 text-stone-500 flex justify-between gap-10 flex-col md:flex-row">
                <p className="text-2xl text-black"> &copy; Fibery Limited </p>
                <p className="text-lg">Terms and Conditions</p>
                <p className="text-lg">Privacy Policy</p>
                <p className="text-lg">Cookies Policy</p>
            </div>
        </div>
    )
}

