import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return <div className="bg-black min-h-[60vh] w-full px-10 md:px-32 py-8 text-white ">
        <div className="flex items-start md:items-center ml-10 md:ml-0 justify-center gap-20 flex-col md:flex-row ">
            <div className=" w-[210px]  h-[150px] object-cover object-center overflow-hidden ">
                <img src="/footerLogo.avif" alt="image" className="h-full w-full scale-125" />
            </div>
            <div className=" cursor-pointer w-auto  ">
                <h1 className="text-3xl md:text-4xl mb-10 font-bold">CREEM</h1>
                <div><h4 className="text-xl md:text-2xl font-semibold my-2 relative inline-block after:h-0.5 after:w-0 after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-linear">About</h4></div>
                <div><h4 className="text-xl md:text-2xl font-semibold my-2 relative inline-block after:h-0.5 after:w-0 after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-linear">Frequently Asked Questions</h4></div>
                <div><h4 className="text-xl md:text-2xl font-semibold my-2 relative inline-block after:h-0.5 after:w-0 after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-linear">Contact</h4></div>
            </div>
            <div className="cursor-pointer w-auto ">
                <h1 className="text-3xl md:text-4xl mb-10 font-bold">POLICIES</h1>
                <div><h4 className="text-xl md:text-2xl font-semibold my-2 relative inline-block after:h-0.5 after:w-0 after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-linear">Terms of Service</h4></div>
                <div><h4 className="text-xl md:text-2xl font-semibold my-2 relative inline-block after:h-0.5 after:w-0 after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-linear">Privacy</h4></div>
                <div><h4 className="text-xl md:text-2xl font-semibold my-2 relative inline-block after:h-0.5 after:w-0 after:bg-white after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:ease-linear">Accessibility</h4></div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-16">
            <h1 className="flex items-center justify-between gap-6 ">
                <Instagram className="size-10 cursor-pointer hover:text-gray-300" /><Facebook className="size-10 cursor-pointer hover:text-gray-300" /><Twitter className="size-10 cursor-pointer hover:text-gray-300" /><FaSpotify className="size-10 cursor-pointer hover:text-gray-300" /><FaYoutube className="size-10 cursor-pointer hover:text-gray-300" />
            </h1>
            <p>© 2025 CREEM Magazine LLC. All Rights Reserved.</p>
            <p>info@creem.com</p>
        </div>
    </div>
}