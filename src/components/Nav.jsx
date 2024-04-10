import React from "react";
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function Nav() {

  const [hide, setHide] = useState(false)

  const handleButtonClick = () => {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/bindhuu1998/fibery-demo-1' });
    return false;
  };

    return (
        <div className="font-bold flex justify-evenly items-center w-screen px-4 md:px-10 lg:px-20 pt-4 relative text-lg">

            <div class="relative flex items-center">
            <p class="text-3xl font-bold mr-8">Fibery</p>
                <img src="Fibery.jpg" alt="Logo" class="absolute top-0 right-0 h-6 w-8" />
            </div>  
                
            <div className="hidden lg:flex gap-10">
                <a href="#">Solutions</a>
                <a href="#">Product</a>
                <a href="#">Resources</a>
                <a href="#">Pricing</a>
                <a href="#">...</a>
                
            </div>

            {
                hide ?
                    <div className="flex lg:hidden gap-10 pl-7 lg:pl-0 flex-col absolute top-28 lg:static bg-white w-full shadow-md shadow-slate-200 lg:shadow-none pb-8 left-0 lg:flex-row">
                        <a href="#">Solutions</a>
                        <a href="#">Product</a>
                        <a href="#">Resources</a>
                        <a href="#">Pricing</a>
                        <a href="#">...</a>
                    </div>
                    : ""
            }
            <div className="flex gap-4 md:gap-8 items-center">
                <a href="#" className="hidden md:block">Log In </a>
                
                <button onClick={handleButtonClick} class="border-black border bg-white text-black px-10 py-1 rounded-md">Get a demo</button>
               
                <button class="border-black border bg-black text-white px-10 py-1 rounded-md">Try for Free</button>

                {
                    <div className="lg:hidden text-2xl p-1" onClick={() => setHide(!hide)}>
                        {
                            hide ? <GrClose /> : <FaBars />
                        }
                    </div>
                }
            </div>

        </div>
    )
}


