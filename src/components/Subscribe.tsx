import FanclubBtn from "./UI/FanclubButton";


const btn3 = ["Digital Archive Access" , "Discounts (10%)"];
const btn2 = ["Digital Archive Access","Quarterly Print Issues","Discounts (20%)","Annual Store Credit ($20 towards all merch)","Annual Gift ($60 Value)"]
const btn1 = ["Digital Archive Access","Quarterly Print Issues","Discounts (15%)","Annual Store Credit ($10 towards all merch)"]


export default function Subscribe() {
    return <div className=" w-full h-auto bg-[#EBEBEB] text-black py-20">
        {/**  part 1   */}
        <h2 className="text-center w-full h-auto mb-6 font-comic py-8 text-5xl">SUBSCRIBE</h2>

        {/***   part 2    */}
        <div className="flex items-center justify-between gap-5 flex-col lg:flex-row  px-20">
            <FanclubBtn image="img3.webp" heading="PRINT"    price="79" facilities={btn1}/>
            <FanclubBtn image="img4.webp" heading="FAN CLUB" price="129" border="true" facilities={btn2}/>
            <FanclubBtn image="img5.webp" heading="DIGITAL"  price="29" facilities={btn3}/>
        </div>


        {/***    part 3    */}
        <div className="px-10">
            <h2 className="text-2xl font-comic text-center md:text-4xl lg:text-5xl xl:text-7xl mt-20 ">Get a FREE Tote with every new Print <br />or Fan Club subscription ($25 value)*</h2>
            <p className="text-center text-lg my-5 mt-10">*Tote will be automatically added to your order in cart. While supplies last. <u className="cursor-pointer">Terms</u> apply.</p>
            <p className="text-center text-lg my-5">DISCLAIMER: One (1) promotional gift per new Print or Fan Club subscription.</p>
        </div>
    </div>
}