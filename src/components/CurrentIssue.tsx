export default function CurrentIssue(){
    return <div className="w-full h-auto border-t-2 bg-[#EBEBEB] border-black">
        <div className="mx-auto container px-4 py-16 flex items-center justify-between flex-col md:flex-row">
            <div className="w-full md:w-1/2  flex items-center justify-center py-4 h-[400px] ">
                <div className="h-[300px] w-[250px] object-center object-cover md:ml-[20%] rotate-6 ">
                    <img src="/img1.avif" alt="image" className="h-full w-full scale-125" />
                </div>
            </div>

            <div className="w-full md:w-1/2  flex items-center justify-center flex-col py-4">
                <p className=" text-black font-comic"><u>CURRENT ISSUE</u></p>
                <h2 className="mt-4 text-6xl  font-comic">CREEM #11</h2>
                <p className="mt-4 font-normal font-serif tracking-wide text-xl">Just play the hits!</p>
                <p className="mt-8 text-2xl">Here's <u className="hover:text-gray-600 cursor-pointer">what's inside</u>.</p>
                <button className="mt-20 font-[900] font-serif text-lg md:text-2xl bg-black text-white border-[2px] border-black mt-100 hover:bg-white hover:text-black transition-all px-4 py-3">Subscribe</button>
            </div>
        </div>
    </div>
}