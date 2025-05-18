import ItemCard from "./UI/Items";


export default function ThankYou() {
    return <div className=" w-full h-auto bg-[#00A6F3] flex flex-col items-center justify-center gap-5 py-10">
        <div className="h-[20%] w-[40%] md:h-[10%] md:w-[30%]  object-center object-cover overflow-hidden ">
            <img src="/thankyou-image.avif" alt="thank you" className="h-full w-full"/>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 px-10 md:px-32 py-16 min-h-[100vh] h-auto w-full  ">
            <div   className="col-span-1  overflow-hidden ">
                <ItemCard box="box1" title="Boy Howdy! T-Shirt" price="40" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box2" title="Boy Howdy! Electric T-Shirt" price="35" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box3" title="Boy Howdy! Crewneck" price="55" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box4" title="Boy Howdy! Hoodie" price="60" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box5" title="Boy Howdy! Ribbed Tank" price="30" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box6" title="Boy Howdy! Trucker" price="35" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box7" title="Boy Howdy! Plushie" price="35" />
            </div>

            <div   className="col-span-1  overflow-hidden">
                <ItemCard box="box8" title="Who The F is Boy Howdy? T-Shirt" price="35" />
            </div>
            
        </div>
        <div>
            <div className="font-extrabold text-2xl text-center px-4 py-2 bg-white text-black cursor-pointer border-2 border-black hover:border-white hover:bg-black hover:text-white transition-all duration-300 ease-in">SHOP NOW</div>
        </div>
    </div>
}