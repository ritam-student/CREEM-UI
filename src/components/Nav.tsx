import { Menu, Search } from "lucide-react";

import { FaCartShopping } from "react-icons/fa6";

export default function Nav(){

    return <nav className="bg-[#000000] fixed w-full h-32 z-30  ">
        <div className="border-b-2 border-[#7F7F7F] w-full py-3 text-sm md:text-lg px-4 md:px-6 lg:px-8  text-white  text-center font-bold  cursor-pointer font-comic"><span className="hover:text-[#FB4451] transition-colors">FREE DOMESTIC SHIPPING ON ORDERS OVER $75! *TERMS AND EXCLUSIONS APPLY</span></div>
        <div className="px-4 md:px-6 lg:px-8 flex items-center justify-between text-white  text-[18px] md:text-lg">
            <div>
                {/** for md and lg screen */}
                <div className="hidden md:block tracking-[1px]  ">
                    <div className="flex items-center justify-between gap-4 pt-3">
                        <button className="font-comic text-xl bg-white px-3 py-[1px] text-black border-2 border-white hover:bg-black hover:text-white transition-colors">SUBSCRIBE</button>
                        <a href="#" className="relative font-bold text-xl after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all ">LATEST</a>
                        <a href="#" className="relative font-bold text-xl after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all ">ARCHIVE</a>
                        <a href="#" className="relative font-bold text-xl after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[3px] after:bg-white hover:after:w-full after:transition-all ">SHOP</a>
                    </div>
                </div>

                {/**   for small screen   */}
                <div className="block md:hidden"><Menu className="text-white hover:text-[#ECC302] cursor-pointer transition-colors" /></div>
            </div>
            <div className="flex items-center justify-between gap-3 pt-3">
                <div className=" text-xl font-bold">LOGIN</div>
                <div><Search className="text-white hover:text-[#ECC302] cursor-pointer size-5 transition-colors" /></div>
                <div className="hover:text-black text-white border-[1px] border-white px-2 py-2 hover:bg-[#00A6F3] cursor-pointer transition-colors "><FaCartShopping className="size-[20px] md:size-[30px] "  /></div> 
            </div>
        </div>
    </nav>
}