import { Check } from "lucide-react";

export default function FanclubBtn({price , image , heading , border , facilities} : {price: string, image: string , heading: string , border ?: string , facilities : string[]}) {
    return <div className={`w-auto   h-auto   ${border && "border-2 border-black" }  rounded-3xl py-10 `}>
        <h1 className="text-center text-3xl font-comic">{heading}</h1>
        <div className="  h-auto  flex items-center justify-center ">
            <div className="h-[300px] w-[250px] object-center object-cover overflow-hidden">
                <img src={`/${image}`} alt="PRINT image" className="w-full h-full " />
            </div>
        </div>
        <div className="mx-5 my-4 ">
            <h2 className="text-center font-bold mb-5 block lg:hidden"><span className="text-xl">${price}/</span>Year</h2>
            <div className="bg-black text-white font-bold text-[16px] px-2 py-3 flex items-center gap-4 justify-center lg:justify-between">
                <p>SUBSCRIBE NOW</p>
                <p className="hidden lg:block">${price}/YEAR</p>
            </div>

            <div className="py-10">
                {
                    facilities.map((item , index) => (
                        <div key={index} className="flex items-center justify-between gap-4 font-bold mt-2">
                            <p>{item}</p>
                            <Check className="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}